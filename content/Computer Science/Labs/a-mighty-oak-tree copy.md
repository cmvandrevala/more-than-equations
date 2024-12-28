---
layout: lab
title: A Mighty Oak Tree
draft: true
---

## 🔖 Background Information

A binary tree data structure consists of a set of nodes, each carrying a piece of data. Every node in the tree can point to two children, canonically called "left" and "right". This [short article](https://www.programiz.com/dsa/binary-tree) from Programiz gives a nice overview of the binary tree structure {% cite programizBinaryTree %}.

## 🎯 Problem Statement

Write a binary tree data structure that stores `Squirrel` objects.

## ✅ Acceptance Criteria

* The nodes of the binary tree data structure should be C++ objects.
* I should be able to create a node and attach it to an existing node in the tree. Moreover, I should be able to specify whether I want to connect the new node as the "left" or "right" child.
* I should be able to traverse the tree, starting from the root and moving to the leaves. Moreover, I should be able to move to the two child nodes of a given node using the `left` and `right` methods.

## 📋 Dev Notes

* The C++ STL does not implement a specific binary tree data structure. However, it provides a variety of containers and helper methods that you are free to use when implementing your solution.
* You do not have to implement the `Squirrel` object from scratch. I have provided it here:

```cpp
class Squirrel {
  private:
    string name;

  public:
    Squirrel(string name) {
      this->name = name;
    }

    string get_name() {
      return this->name;
    }
}
```

## 🖥️ Example Output

You could create a driver program that tests the binary tree data structure. It might look something like this:

```cpp
Squirrel cheeks = Squirrel("Cheeks");
Node node_one = new Node(&cheeks);

Squirrel squeaks = Squirrel("Squeaks");
Node node_two = new Node(&squeaks);

Squirrel fluffybutt = Squirrel("Mr. Fluffy Butt");
Node node_three = new Node(&fluffybutt);

node_one.set_left(&node_two);
node_one.set_right(&node_three);

Node retrieved_node_one = node_one.left(); // This should retrieve the left node
Node retrieved_node_two = node_one.right(); // This should retrieve the right node
```

## 📝 Thought Provoking Questions

1. How is a binary tree with one long branch related to a linked list?
2. Why are we so interested in keeping binary trees balanced (i.e. approximately equal numbers of nodes on the left and right)?

## 💼 Add-Ons For the Portfolio

### (Two Credits) Real-World Example of a Binary Tree

Find a real-world example of where a binary tree data structure is used. This will require a bit of research!

Write a short description of the problem that needs to be solved and why a binary tree might be a good data structure to use for the problem at hand. I am looking for a paragraph or two of details. Be sure to cite all of your sources!

### (Three Credits) Generic Type for Binary Tree

Update your binary tree class to allow the user to specify what type of object will be stored in the tree. You can use a class template to specify the type of object. The behavior of your binary tree should not change otherwise.

## 📘 Works Cited

{% bibliography --cited %}
