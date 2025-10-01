---
title: Point of Sale
tags: [c-plus-plus, csc-121, csc-122, classes, composition]
description: This activity will give you some practice writing and composing classes.
---

## 🔖 Background Information

N/A

## 🎯 Problem Statement

A grocery store in your area uses five digit codes to store information about each item for sale. For example, the code "10342" might represent a "Granny Smith Apple" that is priced at 80 cents. At the checkout line, the point of sale program will take the shopping cart of a user and generate an itemized bill.

## ✅ Acceptance Criteria

This is a table of grocery items, their store codes, and their current prices. You will use it in the exercises below.

| Name               | Code  | Price    |
| ------------------ | ----- | -------- |
| Cucumber           | 00295 | 25 cents |
| Granny Smith Apple | 10342 | 80 cents |
| Banana             | 10557 | 55 cents |
| Apricot            | 11221 | 95 cents |
| Peach              | 12151 | 85 cents |
| Celery             | 12157 | 90 cents |

### Part 1

Write a `ShoppingCart` class that does the following:

1. A user should be able to add an item from the table above to their current list of items in the cart. You can choose if you add items by name or code. Additionally, you can choose how users can enter multiple items (e.g. 5 cucumbers, 3 apricots, etc.).
2. A user should be able to print out a list of the current items in their cart.
3. A user should be able to clear all of the items in their cart.

### Part 2

Write a `PointOfSale` class that does the following:

1. It should be initialized with a `ShoppingCart` as a single argument in the constructor.
2. It should print out an itemized bill for the customer which includes:
    * The name of each item
    * The grocery code of each item
    * The quantity of each item
    * The subtotal for each item
    * The total for all of the groceries

## 📋 Dev Notes

Think about how you might break this problem down into tiny pieces so that you can solve it effectively!

## 🖥️ Example Output

A user of your class might implement it as follows:

```cpp
#include <iostream>

using namespace std;

class ShoppingCart {
  // Your implementation goes here
}

class PointOfSale {
  // Your implementation goes here
}

int main() {
  ShoppingCart cart;

  cart.addItem("Apricot", 5);
  cart.addItem("Celery", 2);

  // This will print out that a user has 5 apricots and 2 celery in their cart.
  cart.getCurrentItems();

  cart.clear();
  cart.addItem("Apricot", 3);
  cart.addItem("Banana", 1);

  // This will print out that a user has 3 apricots and 1 banana in their cart.
  cart.getCurrentItems();

  PointOfSale pos(cart);

  // This line should print out a report similar to this:
  //
  // Apricots    11221    3 @ 95 cents = $2.85
  // Bananas     10557    1 @ 55 cents = $0.55
  // -----------------------------------------
  // Total                               $3.40
  pos.bill();
}
```

## 📘 Works Cited

N/A
