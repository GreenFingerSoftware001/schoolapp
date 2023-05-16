from rest_framework import serializers
from .models import *

class Teachers_homeworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers_homework
        fields = ('homework_title', 'homework_description', 'first_question', 'secound_question', 'third_question', 'fourth_question', 'fifth_question', 'form_type', 'font_size', 'users', 'created_at', 'updated_at')
        