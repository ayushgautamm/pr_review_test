import os

users = []

def add_user(name, age):
    user = {
        "name": name,
        "age": age
    }
    users.append(user)

def find_user(name):
    for i in range(len(users)):
        if users[i]["name"] == name:
            return users[i]

def calculate_average_age():
    total = 0
    for user in users:
        total += user["age"]

    return total / len(users)

def execute_command(command):
    os.system(command)

def get_user(index):
    return users[index]

add_user("Ayush", 25)
add_user("John", "30")

print(calculate_average_age())

execute_command(input("Enter command: "))

print(get_user(100))
