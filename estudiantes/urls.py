from django.urls import path
from estudiantes.views import *
from django.contrib.auth.decorators import login_required
from . import views

app_name = 'estudiantes'

urlpatterns = [
    path('', HomeView.as_view(), name="students-home"),
    path('mensajes/', MessageView.as_view(), name="messages"),
    path('desktop/',  Desktopview.as_view(), name="desktop"),
    path('perfil/',  PerfilView.as_view(), name='public'),
    path('friends/', FriendsView.as_view(), name='amigos'),
    path('settings/', SettingsView.as_view(), name='configurations')

]
