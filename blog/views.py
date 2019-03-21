import json
from django.http import JsonResponse, HttpResponse
from .models import User
from django.core import serializers


def index(request):
    data = User.objects.values('id', 'name', 'status', 'role')
    list_result = [entry for entry in data]
    return JsonResponse(json.dumps(list_result), safe=False)

