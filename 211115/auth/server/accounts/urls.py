from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('api-token-auth/', obtain_jwt_token),
    # path('api-token-refresh/', refresh_jwt_token)
]
