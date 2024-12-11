from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views


app_name = 'home'
urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    # path('portfolio/', views.portfolio, name='portfolio'),
    path('add/', views.add_blog_post, name='add_blog_post'),

] #+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)