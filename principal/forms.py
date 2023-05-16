import datetime
from django import forms
from django.forms import ModelForm
from django.forms.fields import ChoiceField
from .models import *
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


class LoginForm(forms.Form):
     username = forms.CharField(max_length=90, label='', widget=forms.TextInput(attrs={'placeholder': 'username'}))
     password = forms.CharField(required=True, label='', widget=forms.PasswordInput(attrs={'placeholder': 'Password:'}))

     
     def clean(self):
         cleaned_data = super(LoginForm, self).clean()
         self.username = cleaned_data.get("username")
         self.password = cleaned_data.get("password")
         return cleaned_data


class Signup(ModelForm):
     
      class Meta:
           model = User_data
           fields = "__all__"
           exclude = ['image_field', 'login_count', 'comment_count']
           labels = {
               'firstname_field': _(''),
               'lastname_field':_(''),
               'username_field': _(''),
               'password_field': _(''),
               'Student_field': _('Estudiante'),
               'Teacher_field': _('Profesor(a)'),
               'email_field': _(''),
               'login_count': _(''),
               'conf_password_field': _(''),
          }
           widgets = {
                'firstname_field':forms.TextInput(attrs={"placeholder": "Nombre"}),
                'lastname_field':forms.TextInput(attrs={"placeholder": "Apellido"}),
                'username_field':forms.TextInput(attrs={"placeholder": "Nombre de usuario"}),
                'email_field': forms.TextInput(attrs={"placeholder": "Correo electronico"}),
                'password_field': forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'contraseña'}),
                'conf_password_field': forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'confirmar contraseña'}),

           }

      
      def clean(self):
           cleaned_data = super(Signup, self).clean()
           self.firstname_field = cleaned_data.get("firstname_field")
           self.lastname_field = cleaned_data.get("lastname_field")
           self.username_field = cleaned_data.get("username_field")
           self.image_field = cleaned_data.get("image_field")
           self.email_field = cleaned_data.get("email_field")
           self.Student_field = cleaned_data.get("Student_field")
           self.Teacher_field = cleaned_data.get("Teacher_field")
           self.password_field = cleaned_data.get("password_field")
           self.conf_password_field = cleaned_data.get("conf_password_field")
           if (self.password_field != self.conf_password_field):
                raise ValidationError(
                   "not match"
                )
           if self.Student_field == True and self.Teacher_field == True:
               raise ValidationError(
                  "no se puede escojer los dos"
               ) 

           return cleaned_data
