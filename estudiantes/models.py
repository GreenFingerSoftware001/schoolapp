from django.db import models
from django.db.models.fields import DateField
from django.utils import timezone
from principal.models import User_data

# Create your models here.

class Courses(models.Model):
      name = models.CharField(max_length=90, primary_key=True)


class homework_s(models.Model):
      addresses = models.CharField(max_length= 90, primary_key=True)
      descriptions = models.CharField(max_length=200)
      homework_file = models.FileField(upload_to='home_work_files/')
      Date = models.DateField(auto_now=True)
      users = models.ForeignKey(User_data, on_delete=models.CASCADE)

class Posts(models.Model):
      content = models.CharField(max_length=100, primary_key=True)
      fecha = models.DateField(auto_now=True)
      hora_post = models.TimeField(auto_now=True)
      post_img = models.ImageField(upload_to='TComentImg/')
      users = models.ForeignKey(User_data, on_delete=models.CASCADE)


class message_data(models.Model):
    receiver = models.CharField(max_length=100, primary_key=True)
    asunto = models.CharField(max_length=90)
    content = models.TextField()
    users = models.ForeignKey(User_data, on_delete=models.CASCADE)


class Friends(models.Model):
      name = models.CharField(max_length=90, primary_key=True)
      courses = models.CharField(max_length=90)
      users = models.ForeignKey(User_data, on_delete=models.CASCADE)
