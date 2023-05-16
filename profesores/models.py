from django.db import models
from django.forms.fields import DateField
from principal.models import User_data


# Create your models here.

class Courses(models.Model):
      courses_name = models.CharField(max_length=90, primary_key=True)
      courses_description = models.CharField(max_length=300)
      miniatura = models.ImageField()
      hora_ini = models.TimeField()
      hora_fin = models.TimeField()
      users = models.ForeignKey(User_data, on_delete=models.CASCADE)



class Teachers_homework(models.Model):
     homework_title = models.CharField(max_length=100, primary_key=True)
     homework_description = models.CharField(max_length=200)
     first_question = models.CharField(max_length=110)
     secound_question = models.CharField(max_length=110)
     third_question = models.CharField(max_length=110)
     fourth_question = models.CharField(max_length=110)
     fifth_question = models.CharField(max_length=110)
     form_type = models.CharField(max_length=7, choices=[('form1', 'form-type1'), ('form2', 'form-type2'), ('form3', 'form-type3'), ('form4', 'form-type4'), ('form5', 'form-type5')])
     font_size = models.CharField(max_length=20, choices=[ ('font-size1', '10%'), ('font-size2', '20%'), ('font-size3', '40%'), ('font-size4', '60%'), ('font-size5', '80%'), ('font-size6', '100%'),])
     users = models.ForeignKey(User_data, on_delete=models.CASCADE)


class Teachers_message(models.Model):
      receiver = models.CharField(max_length=100, primary_key=True)
      asunto = models.CharField(max_length=90)
      content = models.TextField()
      users = models.ForeignKey(User_data, on_delete=models.CASCADE)



class PostContent(models.Model):
      content = models.CharField(max_length=100, primary_key=True)
      fecha = models.DateField(auto_now=True)
      hora_post = models.TimeField(auto_now=True)
      post_img = models.ImageField(upload_to='TComentImg/')
      users = models.ForeignKey(User_data, on_delete=models.CASCADE)

class Lessons(models.Model):
      title = models.CharField(max_length=90, primary_key=True)
      description = models.CharField(max_length=200)
      lesson_file = models.FileField()