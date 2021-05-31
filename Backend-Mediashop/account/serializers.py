from rest_framework import serializers
from account.models import Account


class RegistrationSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields = ['email', 'first_name', 'last_name',
                  'password', 'confirmPassword']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self):
        account = Account(
            email=self.validated_data['email'],
            first_name=self.validated_data['first_name'],
            last_name=self.validated_data['last_name']
        )
        password = self.validated_data['password']
        confirmPassword = self.validated_data['confirmPassword']
        if password != confirmPassword:
            raise serializers.ValidationError(
                {'password': 'passwords must match.'})
        account.set_password(password)
        account.save()
        return account
