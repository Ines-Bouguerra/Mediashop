from rest_framework import serializers
from account.models import Account


class RegistrationSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.EmailField()

    class Meta:
        model = Account
        fields = ('email', 'username',
                  'password' , 'confirmPassword')
        

    def save(self):
        account = Account(
            email=self.validate_data['email'],
            username=self.validate_data['username']
        )
        password = self.validate_data['password']
        confirmPassword = self.validate_data['confirmPassword']
        if password != confirmPassword:
            raise serializers.ValidationError(
                {'password': 'passwords must match.'})
        account.set_password(password)
        account.save()
        return account
