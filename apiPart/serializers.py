from rest_framework import serializers
from principal.models import *
from estudiantes.models import *
from profesores.models import *


class User_dataSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_data
        fields = '__all__'

class CoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'