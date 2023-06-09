"""School URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from principal.views import LoginView, SignupView, ForgottenView, LogoutView, ExploreView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', LoginView.as_view(), name="login"),
    path('registro/', SignupView.as_view(), name="signup"),
    path('logout/', LogoutView.as_view(), name="logout"),
    path('password-reset/', ForgottenView.as_view(), name="reset" ),
    path('explore/', ExploreView.as_view(), name="exploring"),
    path('profesores/', include('profesores.urls', namespace='teachers-place')),
    path('estudiantes/', include('estudiantes.urls', namespace='students-place')),
    path('api-side/', include('apiPart.urls', namespace='api')),
    path('admin/', admin.site.urls),
  
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

