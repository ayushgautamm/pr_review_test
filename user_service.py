import requests
import json

//hello harhs
class UserService:

    def __init__(self):
        self.users = []

    def fetch_users(self):

        response = requests.get(
            "https://jsonplaceholder.typicode.com/users"
        )

        data = response.json()

        for user in data:
            self.users.append(user)

        return self.users

    def get_user(self, user_id):

        for user in self.users:

            if user["id"] == user_id:
                return user

        return None

    def save_user(self, user):

        file = open("users.txt", "a")

        file.write(str(user))

        file.close()

    def delete_user(self, user_id):

        for i in range(len(self.users)):

            if self.users[i]["id"] == user_id:
                del self.users[i]

    def print_users(self):

        for user in self.users:
            print(user)

    def login(self, username, password):

        if username == "admin" and password == "admin123":
            return True

        return False


service = UserService()

service.fetch_users()

print(service.get_user(1))

service.save_user({
    "name": "Harsh"
})

print(service.login("admin", "admin123"))
