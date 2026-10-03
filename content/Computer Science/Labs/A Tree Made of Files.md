---
title: A Tree Made of Files
date: 2025-02-23
tags: [csc-216, trees]
description: In this lab, you will read an implementation of the tree command, run it locally on your computer, and analyze the code.
---

## 🔖 Background Information

The [`tree` command](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tree) is a utility that prints out the structure of files and folders starting from a given folder [@robinharwoodTree2023]. For example, if I use the `tree` command from some folder on my disk, I might see the following:

```text
$ tree path/to/folder/

path/to/folder/
├── some-file.txt
├── another-file.txt
├── subfolder
│   ├── my-code.cpp
│   └── my-code.h
└── last-file.txt

1 directories, 5 files
```

The `tree` command treats the files and folders on your disk as a tree data structure. The name of the command makes sense!

A robust implementation of `tree` can be a bit complicated, but a GitHub user named Kevin Newton implements a simplified version of `tree` whenever they want to learn a new programming language [@newtonKddnewtonTree2025]. We will analyze their code in this lab.

## 🎯 Problem Statement

Read through the C++ or Java implementation of the tree function as written by Newton in his [tree repository](https://github.com/kddnewton/tree) [@newtonKddnewtonTree2025]. Then, complete the following:

1. Run his code on your computer and capture the output in a screenshot.
2. Benchmark the execution of the code on a variety of different directory structures.
3. Answer the Thought Provoking Questions.

## ✅ Acceptance Criteria

Read through the code in the [tree repository](https://github.com/kddnewton/tree), taking time to understand it fully. Then, complete the tasks outlined in the Problem Statement.

## 📋 Dev Notes

Benchmarking this code is quite difficult because you have to think about all of the different edge cases you might run into! Take time to think about a strategy for benchmarking the code rather than just diving in and doing it randomly.

## 🖥️ Example Output

N/A

## 📝 Thought Provoking Questions

1. Report the results of your benchmarking trials. Be sure to visualize them in a way that your classmates can understand and interpret.
2. How does the command work? Give a high-level description of how the command displays a tree in the console.
3. Is the filesystem displayed by the `tree` command an example of a binary tree or a general tree?
4. What is the root node of the tree displayed by the `tree` command?
5. What are the leaf nodes of the tree displayed by the `tree` command?
6. What does it mean if two files are sibling nodes in the tree displayed by the `tree` command?
7. How might you generate a tree with the largest possible depth via the `tree` command?
8. In Unix-like operating systems, all the files on all the devices generally exist in a single hierarchy. In other words, there is one root directory called `/`, and every file on the system is located under it somewhere. How does this relate to the idea of a tree data structure?

## 💼 Optional Extra Credit

N/A

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
