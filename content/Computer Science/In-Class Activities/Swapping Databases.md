---
title: Swapping Databases
tags: [c-plus-plus, csc-122, classes, polymorphism]
description: This activity will test your knowledge of runtime polymorphism in C++.
---

## 🔖 Background Information

In this exercise, we will practice polymorphism using an example with database adapters. In an app that I am building, I want to be able to specify a test database for when I am writing code locally in development or a production database when I run the app in a production environment where users will interact with it. I am going to give you some partially complete code, and it is your job to fill in the remainder to make everything pass.

## 🎯 Problem Statement

Fill in the code that makes the following driver program pass.

```cpp
#include <iostream>
#include <cassert>

using namespace std;

class Database {
  public:
  virtual void store(string str) = 0;
  virtual string retrieve() = 0;
};

class ProductionDatabase : public Database
{
  public:
    void store(string str) {
        cout << "I am running some low-level code that stores \"" + str + "\" to an actual, production database!" << endl;
    }

    string retrieve() {
      return "I am retrieving the data from the actual, production database!\n";
    }
};

class TestingDatabase : public Database {
  private:
    string currentData;

  public:
    void store(string str) {
        cout << "I am storing \"" + str + "\" in memory! This allows me to write unit tests that don't actually reach out to a database on disk!" << endl;
        currentData = str;
    }

    string retrieve() {
      cout << "I am retrieving data from in memory!\n";
      return currentData;
    }
};

class Application {
  // Write your code here!
};

int main()
{
  ProductionDatabase productionDatabase;
  Application productionVersion(&productionDatabase);

  TestingDatabase testingDatabase;
  Application testingVersion(&testingDatabase);

  productionVersion.storeInDatabase("my data");
  testingVersion.storeInDatabase("my data");

  assert(testingVersion.retrieveFromDatabase() == "my data");
  productionVersion.retrieveFromDatabase();
  testingVersion.retrieveFromDatabase();

  return 0;
}
```

## ✅ Acceptance Criteria

* You are not allowed to change the `Database`, `ProductionDatabase`, or `TestingDatabase` classes.
* You are not allowed to change the driver function.
* You must utilize polymorphism wherever possible to implement methods in `Application`.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

If you successfully complete this challenge, the assertion in `int main()` will pass and you will see some messages printed to the console.

## 📘 Works Cited

N/A
