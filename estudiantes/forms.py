import datetime
from django import forms
from django.forms import widgets, ModelForm, Textarea
from django.utils.translation import gettext_lazy as _
from estudiantes.models import *


class Tareas(ModelForm):
     class Meta:
          model = homework_s
          fields = "__all__"
          labels = {
            'title': _('')
          }
          exclude = ['users']
          widgets = {
            'descriptions': Textarea(attrs={'cols': 40, 'rows': 10}),
            'title':forms.TextInput(attrs={"placeholder": "Titulo de la Tarea: "}),
          }


     def clean(self):
           cleaned_data = super(Tareas, self).clean()
           self.title = cleaned_data.get("title")
           self.description = cleaned_data.get("description")
           self.homework_file = cleaned_data.get("homework_file")
           self.Date = cleaned_data.get("Date")
           self.teachers_comments = cleaned_data.get("Email")

           return cleaned_data

class SearchForm(forms.Form):
     searchfield = forms.CharField(max_length=90, widget=forms.TextInput(attrs={'placeholder': 'Search'}), label='')


class Message_form(ModelForm):
      class Meta:
          model = message_data
          fields = ['receiver', 'asunto', 'content']
          exclude = ['users']
          labels = {
            'receiver': _(''),
            'asunto': _(''),
            'content': _(''),
          }
          widgets = {
            'receiver':forms.TextInput(attrs={"placeholder": "Para:"}),
             'asunto':forms.TextInput(attrs={"placeholder": "asunto:"}),
            'content': Textarea(attrs={'cols': 60, 'rows': 20}),
          }

      def clean(self):
           cleaned_data = super(Message_form, self).clean()
           self.receiver = cleaned_data.get("receiver")
           self.asunto = cleaned_data.get("asunto")
           self.content = cleaned_data.get("content")
           self.users = cleaned_data.get("users")
           return cleaned_data
