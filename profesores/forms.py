from django import forms
from django.forms.widgets import Textarea
from django.utils.translation import gettext_lazy as _
from django.forms import ModelForm
from .models import *
from principal.models import User_data
import datetime
from django.core.exceptions import ValidationError

     

class ImageLoad(ModelForm):
    class Meta:
        model = User_data
        fields = ['image_field']
     
    def clean(self):
       cleaned_data = super(ImageLoad, self).clean() 
       self.image_field = cleaned_data.get("image_field")    

class NewCoursesform(ModelForm):
     class Meta:
          model = Courses
          fields = "__all__"
          exclude = ['users']
          widgets = {
            'courses_name':forms.TextInput(attrs={"placeholder": "Nombre del Curso: "}),
            'courses_description': Textarea(attrs={'cols': 66, 'rows': 10, 'placeholder': 'Enter a description here...'}),
            'hora_ini':forms.TextInput(attrs={"placeholder": "Inicio de clase: "}),
            'hora_fin':forms.TextInput(attrs={"placeholder": "fin de la clase: "}),
          }
          labels = {
               'courses_name' : _(''),
               'courses_description': _(''),
               'hora_ini': _(''),
               'hora_fin': _(''),
          }

     def clean(self):
           cleaned_data = super(NewCoursesform, self).clean()
           self.name = cleaned_data.get("name")
           self.description = cleaned_data.get("description")
           self.hora_ini = cleaned_data.get("hora_ini")
           self.hora_fin = cleaned_data.get("hora_fin")
           return cleaned_data

class SearcherForm(forms.Form):
     searchfield = forms.CharField(max_length=90, widget=forms.TextInput(attrs={'placeholder': 'Search'}), label='')



class MessageForm(ModelForm):
     class Meta:
          model = Teachers_message
          fields = "__all__"
          exclude = ['users']
          labels = {
               'receiver' : _(''),
               'asunto': _(''),
               'content': _(''),
          }
          widgets = {
            'receiver':forms.TextInput(attrs={"placeholder": "Para: "}),
            'asunto': forms.TextInput(attrs={"placeholder": "asunto: "})
          }
     def clean(self):
           cleaned_data = super(MessageForm, self).clean()
           self.receiver = cleaned_data.get("title")
           self.asunto = cleaned_data.get("content")
           self.content = cleaned_data.get("receiver")
           return cleaned_data


class Homeworkform(ModelForm):
     class Meta:
          model = Teachers_homework
          fields = "__all__"
          exclude = ['users']
          widgets = {
             'homework_description': Textarea(attrs={'cols': 40, 'rows': 6, 'placeholder': 'Ingrese una descripción aquí...'}),
             'title':forms.TextInput(attrs={"placeholder": "Ingrese el título de la tarea"}),
             'first_question': forms.TextInput(attrs={"placeholder": "Ingrese la primera pregunta"}),
             'secound_question': forms.TextInput(attrs={"placeholder": "Ingrese la segunda pregunta"}),
             'third_question': forms.TextInput(attrs={"placeholder": "Ingrese la tercera pregunta"}),
             'fourth_question': forms.TextInput(attrs={"placeholder": "Ingrese la cuarta pregunta"}),
             'fifth_question': forms.TextInput(attrs={"placeholder": "Ingrese la quinta pregunta"}), 
          }
          
          labels = {
               'homework_title' : _(''),
               'homework_description': _(''),
               'first_question': _(''),
               'secound_question': _(''),
               'third_question': _(''),
               'fourth_question': _(''),
               'fifth_question': _(''),
          }

     def clean(self):
           cleaned_data = super(Homeworkform, self).clean()
           self.title = cleaned_data.get("title")
           self.homework_description = cleaned_data.get("homework_description")
           self.archive = cleaned_data.get("archive")
           return cleaned_data

class  PostContentForm(ModelForm):
    class Meta:
        model =  PostContent
        fields = ['content']
        exclude = ['fecha', 'hora_post']
        
        widgets = {
           'content': Textarea(attrs={'cols': 60, 'rows': 6, 'placeholder': 'crea una publicacion...'}),
        }
     
        labels = {
          'content': ''
        }
        
    def clean(self):
        cleaned_data = super(PostContentForm, self).clean()
        self.content = cleaned_data.get("content")
        self.fecha = cleaned_data.get("fecha")
        self.hora_post = cleaned_data.get("hora_post")
        
        if len(self.content) < 10:
            raise ValidationError('El contenido debe tener al menos 10 caracteres')
        return cleaned_data
