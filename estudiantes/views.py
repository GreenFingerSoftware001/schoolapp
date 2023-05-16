from django.shortcuts import render
from django.views import View
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.base import TemplateResponseMixin
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from  .forms import *
from rest_framework import viewsets
from .models import *
from rest_framework import permissions
import os


# Create your views here.

class HomeView(ListView):
    template_name = 'home-student.html'
    form_class = [SearchForm, Posts, ]
    model = Posts
    object_list = Posts.objects.all()

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




class PerfilView(View):
    form_class = {
        'form1': homework_s,
    }
    template_name = "student_perfil.html"


    def get(self, request, *args, **kwargs):
         forms = {
          'form1': self.form_class['form1'](),

         }

         return render(request, self.template_name, {'forms':forms})

    def post(self, request, *args, **kwargs):
        forms = {
          'form1': self.form_class['form1'](),

        }

        return render(request, self.template_name, {'forms':forms})

class MessageView(View):
    form_class = Message_form
    template_name = 'm_estudiantes.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
           user_id = request.user
           mssg = message_data(
              receiver = form.receiver,
              asunto = form.asunto,
              content = form.content,
              users = request.user
           )

           mssg.save()
           print("mierda ")
        return render(request, self.template_name, {'form':form})

class Desktopview(View):
     form_class = Tareas
     template_name = "workshop_student.html"

     def get(self, request, *args, **kwargs):
          form = self.form_class()
          return render(request, self.template_name, {'form':form})

     def post(self, request, *args, **kwargs):
         form = self.form(request.POST, request.FILES)
         if form.is_valid():
           print('mierda')
         return render(request, self.template_name, {'form':form})



class SettingsView(View):
     template_name = "settings.html"

     def get(self, request, *args, **kwargs):
         return render(request, self.template_name)


class FriendsView(View):
     template_name = "friends.html"

     def get(self, request, *args, **kwargs):
         return render(request, self.template_name)
