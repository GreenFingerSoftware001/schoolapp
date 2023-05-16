from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from .forms import *
from rest_framework.views import APIView
from .models import *
from principal.forms import Signup
import datetime
from rest_framework.response import Response
from .serializers import Teachers_homeworkSerializer
from rest_framework import status
from django.http import Http404
from  tools.videoCapturing  import VIDEOCAPTURE 


# Create your views here.

class PerfilView(View):
    template_name = 'perfil.html'
    
    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        if request.method == "POST":
           print(request.POST['search_field'])
        return render(request, self.template_name)

class HomeView(ListView):
    template_name = 'teachers_home.html'
    form_class = [SearcherForm, PostContentForm, ImageLoad]
    model = PostContent
    object_list = PostContent.objects.all()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form1'] = self.form_class[0]()
        context['form2'] = self.form_class[1]()
        return context

    def get(self, request, *args, **kwags):
        context = self.get_context_data()
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        context = self.get_context_data()
        form1 = context['form1']
        form2 = context['form2']
        if form1.is_valid():
            print('form1 is valid')
        else:
            print('form1 not valid')
        if  form2.is_valid():
           new_post = PostContent(
               content = form2.content,
               fecha = form2.fecha,
               hora_post = form2.hora_post,
           )
        
           print('esto es un post', new_post.content, 'esto es la hora', new_post.hora_post)
          
        else:
            print('form2 is not valid')
        return render(request, self.template_name,context)


class FriendsView(View):
     template_name = 'teachers_friends.html'

     def get(self, request, *args, **kwargs):
         return render(request, self.template_name)



class DeskView(View):
     template_name = 'desk.html'
     form_class = [
           NewCoursesform, 
           Homeworkform,
           SearcherForm,
     ]

     def get(self, request, *args, **kwargs):
         form1 = self.form_class[0]()
         form2 = self.form_class[1]()
         form3 = self.form_class[2]()
         return render(request, self.template_name, {'form1':form1, 'form2':form2, 'form3':form3})
    #esto es un metodo post que maneja las peticiones post         
     def post(self, request, *args, **kwargs):
         form1 = self.form_class[0](request.POST)
         form2 = self.form_class[1](request.POST)
         form3 = self.form_class[2](request.POST)
         if form1.is_valid() and form1.is_bound:
               #this conditional tries to create new course
               new_class =  Courses(
                     courses_name = form1.cleaned_data['courses_name'],
                     courses_description = form1.cleaned_data['courses_description'],
                     miniatura = form1.cleaned_data['miniatura'],
                     hora_ini = form1.cleaned_data['hora_ini'],
                     hora_fin = form1.cleaned_data['hora_fin'], 
               )
               print(new_class.courses_description)
         else:
            print('form1 is not valid')
         if form2.is_valid() and form2.is_bound:
               #this conditional tries to create a new homework
               new_homework = Teachers_homework(
                   homework_title = form2.cleaned_data['homework_title'],
                   homework_description = form2.cleaned_data['homework_description'],
                   first_question = form2.cleaned_data['first_question'],
                   secound_question = form2.cleaned_data['secound_question'],
                   third_question = form2.cleaned_data['third_question'],
                   fourth_question = form2.cleaned_data['fourth_question'],
                   fifth_question = form2.cleaned_data['fifth_question'],
               )
             
               new_homework.save()
               obj = Teachers_homework.objects.all
               print(obj)

         else:
           # Don't validate form2 if it is not bound
           pass
         
         return render(request, self.template_name, {'form1': form1, 'form2':form2, 'form3':form3})


class NewHomeworkView(View):
    form_class = [SearcherForm, Homeworkform]
    template_name = 'homework.html'
    
    def get(self, request):
        form = self.form_class[0]()
        form2 = self.form_class[1]()
        return render(request, self.template_name, {'form':form, 'form2':form2})

    def post(self, request):
        form = self.form_class[0](request.POST)
        form2 = self.form_class[1](request.POST)
        return render(request, self.template_name, {'form':form, 'form2':form2})


class MessagesView(View):
     form_class = MessageForm
     template_name = "message.html"

     def get(self, request, *args, **kwargs):
         form = self.form_class()
         return render(request, self.template_name, {'form':form})
     
     def post(self, request, *args, **kwargs):
         form = self.form_class(request.POST)
         if form.is_valid():
            mssg = Mensajes(
                receiver = form.reciver,
                asunto = form.asunto,
                content = form.content,
            )
            mssg.save()
            
         
         return render(request, self.template_name, {'form':form})

class LiveView(TemplateView):
     template_name = 'liveclass.html'
     videolive = VIDEOCAPTURE(0)
     processing = videolive.capturingProcess

     def get(self, request):
        context = {
          'vid':self.processing()
        }
        return render(request, self.template_name, context)
     
     def post(self, request):
        return render(request, self.template_name)
