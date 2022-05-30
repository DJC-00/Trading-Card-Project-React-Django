# Database Models

from unittest.util import _MAX_LENGTH
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)

class UserManager(BaseUserManager):
    #Manager for users
    def create_user(self, email, password = None, **extra_fields):
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email = self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        # Create and return a superuser
        user = self.create_user(email,password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    #User in the system
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

class Recipe(models.Model):
    # Recipe model
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete = models.DO_NOTHING,
    )
    title = models.CharField(max_length = 255)
    description = models.TextField(blank=True)
    time_minutes = models.IntegerField()
    price = models.DecimalField(max_digits = 5, decimal_places=2)
    link = models.CharField(max_length = 255, blank = True)

    def __str__(self):
        return self.title


class TradingCard(models.Model):
    # Recipe model
    creator = models.ForeignKey(
        User,
        related_name = 'creator',
        on_delete = models.DO_NOTHING,
    )
    owner = models.ForeignKey(
        User,
        related_name = 'owner',
        on_delete = models.CASCADE,
    )
    name = models.CharField(max_length = 255)
    rarity = models.CharField(max_length = 20)
    stats = ArrayField(
                models.FloatField(),
            size = 4)
    specMove = models.CharField(max_length = 255)
    link = models.CharField(max_length = 255, blank = True)
    rating = models.FloatField(default = 0)
    ratingCount = models.IntegerField(default = 0)
    isListed = models.BooleanField(default = False)


# class TradingCard(models.Model):
#     # Recipe model
#     creator = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         related_name='creator',
#
#     )
#     owner = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         related_name='owner',
#         on_delete = models.CASCADE,
#     )
#     name = models.CharField(max_length = 255)
#     rarity = models.CharField(max_length = 20)
#     stats = ArrayField(
#                 models.FloatField(),
#             size = 4)
#     specMove = models.CharField(max_length = 255)
#     link = models.CharField(max_length = 255, blank = True)
#     rating = models.FloatField(default = 0)
#     ratingCount = models.IntegerField(default = 0)
#     isListed = models.BooleanField(default = False)
