---
title: A Mighty Oak Tree
date: 2024-12-26
tags: [binary-trees, csc-122, csc-214, data-structures]
description: In this lab, you will implement a binary tree data structure. Then, you will populate and traverse the tree using some simple operations.
---

## 🔖 Background Information

A binary tree data structure consists of a set of nodes, each carrying a piece of data. Every node in the tree can point to up to two children, canonically called "left" and "right". This short article [@programizBinaryTree] from Programiz gives a nice overview of the binary tree structure.

## 🎯 Problem Statement

Write a binary tree data structure that stores `Squirrel` objects.

## ✅ Acceptance Criteria

* The nodes of the binary tree data structure should be objects.
* I should be able to create a node and attach it to an existing node in the tree. Moreover, I should be able to specify whether I want to connect the new node as the "left" or "right" child.
* I should be able to traverse the tree, starting from the root and moving to the leaves. Moreover, I should be able to move to the two child nodes of a given node using the `left` and `right` methods.

## 📋 Dev Notes

* You cannot use any built-in classes from the standard library that implement trees. You need to implement this data structure from scratch.
* You do not have to implement the `Squirrel` object from scratch. I have provided it here:

> [!tip]- C++
>
> ```cpp
> class Squirrel {
>   private:
>     string name;
>
>   public:
>     Squirrel(string name) {
>       this->name = name;
>     }
>
>     string get_name() {
>       return this->name;
>     }
> }
> ```

> [!tip]- Java
>
> ```java
> public class Squirrel {
>   private String name;
>
>   Squirrel(string name) {
>     this.name = name;
>   }
>
>   String getName() {
>     return this.name;
>   }
> }
> ```

## 🖥️ Example Output

You could create a driver program that tests the binary tree data structure. It might look something like this:

> [!tip]- C++
>
> ```cpp
> Squirrel cheeks = Squirrel("Cheeks");
> Node node_one = new Node(&cheeks);
>
> Squirrel squeaks = Squirrel("Squeaks");
> Node node_two = new Node(&squeaks);
>
> Squirrel fluffybutt = Squirrel("Mr. Fluffy Butt");
> Node node_three = new Node(&fluffybutt);
>
> node_one.set_left(&node_two);
> node_one.set_right(&node_three);
>
> Node retrieved_node_one = node_one.left(); // This should retrieve the left node
> Node retrieved_node_two = node_one.right(); // This should retrieve the right node
> ```

> [!tip]- Java
>
> ```java
> Squirrel cheeks = new Squirrel("Cheeks");
> Node nodeOne = new Node(cheeks);
>
> Squirrel squeaks = new Squirrel("Squeaks");
> Node nodeTwo = new Node(squeaks);
>
> Squirrel fluffybutt = new Squirrel("Mr. Fluffy Butt");
> Node nodeThree = new Node(fluffybutt);
>
> nodeOne.set_left(nodeTwo);
> nodeOne.set_right(nodeThree);
>
> Node retrievedLeft = nodeOne.left(); // This should retrieve the left node
> Node retrievedRight = nodeOne.right(); // This should retrieve the right node
> ```

## 📝 Thought Provoking Questions

1. How is a binary tree with one long branch related to a linked list?
2. Why are we so interested in keeping binary trees balanced (i.e. approximately equal numbers of nodes on the left and right)?

## 💼 Optional Extra Credit

### (Three Credits) Generic Type for Binary Tree

Update your binary tree class to allow the user to specify what type of object will be stored in the tree. You can use a template to specify the type of object. The behavior of your binary tree should not change otherwise.

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/a-mighty-oak-tree-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/a-mighty-oak-tree-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
