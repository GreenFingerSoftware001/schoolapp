from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager

# Create your models here.


class CustomAccountManager(BaseUserManager):

      def create_user(self, username, email, password=None, **other_fields):
          
          if not email:
              raise ValueError(_('you must provide weed') )
       
          email = self.normalize_email(email)
          student = self.model(email=email, username=username)
          student.set_password(password)
          student.save()
          return student
      
      def create_superuser(self, username, email, password=None, **other_fields):
          other_fields.setdefault('is_staff', True)
          other_fields.setdefault('is_superuser', True)
          other_fields.setdefault('is_active', True)
          
          user = self.create_user(
             username=username,
             email=email,
             password=password,
          )
          
          user.is_admin = True
          user.is_staff = True
          user.save(using=self._db)
          
          if other_fields.get('is_staff') is not True:
            raise ValueError(
                 'Superuser must be assigned to is_staff=True')
          if other_fields.get('is_superuser') is not True:
            raise ValueError(
                 'Superuser must be assigned to is_superuser=True')
          
          return user



class CustomUser(AbstractUser):
    username = models.CharField(max_length=120, unique=True, primary_key=True)
    email = models.EmailField()
    student = models.BooleanField(default=False)
    teacher = models.BooleanField(default=False)
    password = models.CharField(max_length=200)
    
    objects = CustomAccountManager()
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    
    def __str__(self):
         return self.username



class User_data(models.Model):
      firstname_field = models.CharField(max_length=120, unique=False, primary_key=True)
      lastname_field = models.CharField(max_length=120, unique=False)
      username_field = models.CharField(max_length=90, unique=True)
      email_field = models.EmailField(unique=True)
      image_field = models.ImageField(upload_to ='users-image/', null=True)
      Student_field = models.BooleanField(default=False)
      Teacher_field = models.BooleanField(default=False)
      login_count = models.IntegerField(default=0)
      comment_count = models.IntegerField(default=0)
      date_joined = models.DateTimeField(auto_now_add=True)
      last_login = models.DateTimeField(auto_now=True)
      password_field = models.CharField(max_length=90)
      conf_password_field = models.CharField(max_length=100)


      def __str__(self):
            return self.firstname_field + lastname_field

