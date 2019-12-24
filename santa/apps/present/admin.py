from django.contrib import admin
from .models import Present


class PresentAdmin(admin.ModelAdmin):
    list_display = ['name', 'code']


admin.site.register(Present, PresentAdmin)
