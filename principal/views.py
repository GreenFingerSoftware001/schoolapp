from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.views import View
from .forms import Signup, LoginForm
from .models import CustomUser, User_data
from django.contrib.auth import get_user_model
from django.conf import settings
from django.contrib.auth.mixins import PermissionRequiredMixin




CustomUser = get_user_model()


# Create your views here.

class LoginView(View):
    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)
     
    def post(self, request, *args, **kwargs):
        if form.is_valid():
           user = CustomUser.objects.filter(username=form.username).first()
           login(request, user)
           if user and user.check_password(form.password):
              if user.student == True:
                return redirect('estudiantes:home')
              elif user.teacher == True:
                return redirect('profesores:teachers_home')
           else:
               print('no es usuario')          
        return render(request, self.template_name)





class SignupView(View):
    form_class = Signup
    template_name = "signup.html"

    def get(self, request, *args, **kwargs):
         form = self.form_class()
         return render(request, self.template_name, {'form':form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST, request.FILES)
        if form.is_valid():
          new_user = User_data(
            firstname_field = form.firstname_field,
            lastname_field = form.lastname_field,
            username_field = form.username_field,
            email_field = form.email_field,
            image_field = form.image_field,
            Student_field = form.Student_field,
            Teacher_field = form.Teacher_field,
            password_field = form.password_field,
            conf_password_field = form.conf_password_field,
          )
          new_user.save()
          user = CustomUser.objects.create_user(
             new_user.username_field, 
             new_user.email_field,
             new_user.password_field,
          )
          user.student = new_user.Student_field
          user.teacher = new_user.Teacher_field
          user.save()
          login(request, user, backend='django.contrib.auth.backends.ModelBackend')
          
          if user.student == True:
             return redirect('estudiantes:home')
          elif user.teacher == True:
             return redirect('profesores:teachers_home')
        return render(request, self.template_name, {'form':form})
    

class ExploreView(View):
    template_name = 'explore.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)




class ForgottenView(View):
      template_name = 'forgotten.html'

      def get(self, request, *args, **kwargs):
          return render(request, self.template_name)



class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('/')