import random

from django.shortcuts import render
from .models import Present


def index(request):
    friend_list = Present.objects.all()
    return render(request, 'blog/index.html', {'friend_list': friend_list})


def show_pair(request):
    code = request.POST['code']
    friend = Present.objects.get(code=code)
    return render(request, 'blog/show_pair.html', {'friend': friend})


def check(friend_list):
    for friend in friend_list:
        if friend.name == friend.name_of_friend:
            return False
    return True


def random_shuffle(friend_list):
    for x in range(5):
        first = random.randrange(friend_list.count())
        second = random.randrange(friend_list.count())
        friend_list[first].name_of_friend, friend_list[second].name_of_friend = \
            friend_list[second].name_of_friend, friend_list[first].name_of_friend

    for friend in friend_list:
        friend.save()
    return friend_list


def generate_pairs(request):
    friend_list = Present.objects.all()
    for x in range(5):
        friend_list = random_shuffle(friend_list)
    while not check(friend_list):
        friend_list = random_shuffle(friend_list)
    return render(request, 'blog/index.html', {'friend_list': friend_list})