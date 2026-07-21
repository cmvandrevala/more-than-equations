---
title: We Can Rebuild Them
date: 2025-02-28
tags: [c-plus-plus, java, csc-216, recursion, binary-search-trees, avl-trees]
description: In this lab, we will implement an AVL tree along with methods to serialize and deserialize the data.
---

## 🔖 Background Information

Suppose that we are working with some structured data in a piece of software. Examples might include an array of integers, a hashmap of key-value pairs, or a custom object that you define. We often want to store, transmit, receive, and reconstruct these structures so that other applications can utilize what we have created.

There are lots of examples of this:

* I might create an array of numbers, save that data to the disk, and then read it back into the program at a later time.
* I might create a User class with the attributes of "firstName" and "lastName", save that data to a database, and then retrieve it at a later time.
* I might create a hashmap of key-value pairs, format the data as [JSON](https://www.json.org/json-en.html), and then transmit it to a website [@IntroducingJSON2025].
* I might take a plaintext string which represents somebody's password, hash it using the [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) protocol, and then store the output in a database alongside a salt to protect the information [@Bcrypt2025].
* And much more!

The process of converting a structure to a byte stream or string is called "serialization". The process of converting a byte stream or string back to the original object is called "deserialization".

The question is, how do you serialize structured data? There is not one "correct" way of doing it, but here are some examples of how you might go about it.

Suppose that I want to serialize an integer. This is easy! The integer `5` just becomes the string "5".

Suppose that I wanted to serialize an array. This is a bit trickier, but still not too difficult. I might store the array `[1, 2, nil, 4]` as the string "1,2,nil,4".

However, suppose that I wanted to serialize a binary search tree... that might be trickier... 🤔

## 🎯 Problem Statement

Implement an AVL tree data structure that can insert values, delete values, and serialize itself. For bonus extra credit, add a method to take the output from serializing the tree, deserialize the data, and create a brand new AVL tree.

## ✅ Acceptance Criteria

Your AVL tree should have the following methods:

* `insert(int value)` - This method should insert a value into the AVL tree. The tree should rebalance itself automatically when an element is inserted.
* `delete(int value)` - This method should delete the given value from the AVL tree. The tree should rebalance itself automatically when an element is deleted.
* `serialize()` - This method should return a string which consists of all of the nodes in the tree ordered as a comma-separated list of values. You can use any symbol you want to represent a "blank" node.

For extra credit, you can try to implement a `deserialize` method:

* `deserialize(string str)` - This method should take a serialized tree from the `serialize` method and return a newly constructed AVL tree with the given values.

You are welcome to implement other methods that might help you implement the ones listed above.

## 📋 Dev Notes

* You can assume that we are only going to store integers in this tree. You do NOT have to implement a generic AVL tree.
* There are a number of resources that might help you with this lab. Consider the following:
  * [AVL Tree Source Code](https://www.youtube.com/watch?v=tqFZzXkbbGY) [@fisetAVLTreeSource2017]
  * [Serialize and Deserialize a Binary Tree](https://www.youtube.com/watch?v=suj1ro8TIVY) [@backtobacksweSerializeDeserializeBinary2019]
* Before you start any problem, think about how you might be able to break it down into smaller pieces. The first thing you might consider doing is implementing a regular binary search tree with no rebalancing. You can implement all of the methods listed in the Acceptance Criteria without any balancing needed. Then, once that is done, add in the balancing to the `insert` and `delete` methods to create the AVL tree.

## 🖥️ Example Output

I might expect to see an `AVLTree` class used like this:

> [!tip]- C++
>
> ```cpp
> #include <iostream>
>
> int main() {
>  AVLTree tree;
>
>   // Inserts four nodes into the tree
>   tree.insert(3);
>   tree.insert(4);
>   tree.insert(5);
>   tree.insert(6);
>
>   // Prints out a serialized tree which might look like "4,3,5,nil,nil,nil,6"
>   // The actual output will depend on the pattern you use to serialize the tree
>   std::cout << tree.serialize();
>
>   // Deletes a node from the tree
>   tree.delete(6);
>
>   // Prints out a serialized tree which might look like "4,3,5"
>   // The actual output will depend on the pattern you use to serialize the tree
>   std::cout << tree.serialize();
> }
> ```

> [!tip]- Java
>
> ```java
> class Main {
>   public static void main(String[] args) {
>     AVLTree tree = new AVLTree();
>
>     // Inserts four nodes into the tree
>     tree.insert(3);
>     tree.insert(4);
>     tree.insert(5);
>     tree.insert(6);
>
>     // Prints out a serialized tree which might look like "4,3,5,nil,nil,nil,6"
>     // The actual output will depend on the pattern you use to serialize the tree
>     System.out.println(tree.serialize());
>
>     // Deletes a node from the tree
>     tree.delete(6);
>
>     // Prints out a serialized tree which might look like "4,3,5"
>     // The actual output will depend on the pattern you use to serialize the tree
>     System.out.println(tree.serialize());
>   }
> }
> ```

## 📝 Thought Provoking Questions

1. Remember, there is not one "correct" way to serialize / deserialize structured data. You can represent your AVL tree on disk in a myriad of different ways. How did you represent your AVL tree on disk?
2. Do the serialized values follow any pattern? It might be good to reflect on depth-first and breadth-first searches here!
3. Suppose you were serializing a binary search tree without rebalancing rather than an AVL tree. On average, would you expect to see more or fewer "nil" values in the serialized output? Why?

## 💼 Optional Extra Credit

N/A

## 🔗 Useful Links

* [C++ Project Template](https://github.com/cmvandrevala/we-can-rebuild-them-cpp-template)
* [Java Project Template](https://github.com/cmvandrevala/we-can-rebuild-them-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
