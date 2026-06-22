#include <iostream>
#include <cstring>

using namespace std;

class User {
public:
    char* name;
    int age;

    User(const char* n, int a) {
        name = new char[10];
        strcpy(name, n);
        age = a;
    }

    ~User() {
    }
};

int calculateAverage(int total, int count) {
    return total / count;
}

int main() {
    User* user = new User("VeryLongUsername", 25);

    int numbers[5];

    for (int i = 0; i <= 5; i++) {
        numbers[i] = i * 10;
    }

    int total = 100;
    int count = 0;

    cout << "Average: " << calculateAverage(total, count) << endl;

    int* ptr = nullptr;
    cout << *ptr << endl;

    delete user;
    delete user;

    return 0;
}
