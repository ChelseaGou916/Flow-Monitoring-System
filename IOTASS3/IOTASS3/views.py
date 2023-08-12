from django.http import HttpResponse

# def hello(request):
#     return HttpResponse("Hello world ! ")

from django.shortcuts import render
from . import testdb

def HomePage(request):
    return render(request, "Home_page.html")
