from django.urls import path
from . views import *
from . import views

app_name = 'profesores'

urlpatterns = [
    path('', HomeView.as_view(), name='teachers_home'),
    path('desktop/', DeskView.as_view(), name='desktop'),
    path('mensajes/', MessagesView.as_view(), name='teachers_messages'),
    path('perfil/', PerfilView.as_view(), name='teacher_perfil'),
    path('friends/', FriendsView.as_view(), name='co-workers'),
    path('Live/', LiveView.as_view(), name='homework'),
]