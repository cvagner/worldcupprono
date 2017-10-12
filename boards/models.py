from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType


class Board(models.Model):
    owner = models.ForeignKey(User, related_name='boards')
    name = models.CharField(max_length=255, verbose_name="Nom")
    users = models.ManyToManyField(User, verbose_name="participants")
    created = models.DateTimeField(
        verbose_name=u"Date de création",
        auto_now_add=True,
        db_index=True)

    def __str__(self):
        return "Board - %s" % self.name

    class Meta:
        ordering = ['-created']

    @property
    def meta(self):
        return self._meta

    @property
    def contenttype(self):
        return ContentType.objects.get_for_model(self)

    @property
    def class_name(self):
        return self.__class__.__name__
