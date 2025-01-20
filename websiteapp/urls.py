from django.urls import path
from websiteapp import views



urlpatterns =[
    path('', views.index, name='index'),
]