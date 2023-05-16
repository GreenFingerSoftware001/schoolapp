from django.shortcuts import render
from rest_framework.views import APIView
from principal.models import *
from estudiantes.models import *
from profesores.models import *
from rest_framework.response import Response
from .serializers import User_dataSerializer
from rest_framework import status
from django.http import Http404
# Create your views here.

class UserApiView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        queryset = User_data.objects.all()
        serializer = User_dataSerializer(users, many=True)

        return Response(serializer.data) 

class StudentCoursesApiView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        studentCourses = Courses.objects.all()
        serializer = User_dataSerializer(studentCourses, many=True)

        return Response(serializer.data) 