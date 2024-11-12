from django.shortcuts import render, redirect
from django.conf import settings

def index(request):
        
    return render(request, 'home/index.html')

def about(request):
    
    return render(request, 'home/about.html')

def programs(request):
    
    return render(request, 'home/programs.html')