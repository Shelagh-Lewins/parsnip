import uuid 

from django.db import models
from django.utils.http import int_to_base36

ID_LENGTH = 12

def pkgen():
    from base64 import b32encode
    from hashlib import sha1
    from random import random

    pk = int_to_base36(uuid.uuid4().int)[:ID_LENGTH]
    return pk

class List(models.Model):
    slug = models.CharField(max_length=ID_LENGTH, default=pkgen, editable=False)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    is_public = models.BooleanField(default=False)

    def __str__(self):
        return self.text
