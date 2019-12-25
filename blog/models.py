from django.db import models


class Present(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    name_of_friend = models.CharField(max_length=50, blank=True)