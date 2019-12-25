from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.index, name='index'),
    path('generate/', views.generate_pairs, name='generate_pairs'),
    path('show/', views.show_pair, name='show_pair'),
]
