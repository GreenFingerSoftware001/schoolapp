from django.urls import path
from . views import *
from . import views

app_name = 'api'

urlpatterns = [
    path('', UserApiView.as_view(), name='ApiViewHome' ),
    path('Api-StudentsCourses/', StudentCoursesApiView.as_view(), name='ApiStudentView-Homework')
]