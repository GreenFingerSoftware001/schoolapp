from django.contrib import admin
from .models import *
from  profesores.models import *
from estudiantes.models import homework_s


admin.site.register(User_data)
admin.site.register(CustomUser)
admin.site.register(Teachers_homework)
admin.site.register(homework_s)
admin.site.register(Teachers_message)
# Register your models here.
