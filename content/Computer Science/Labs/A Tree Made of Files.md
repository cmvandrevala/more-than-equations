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

Read through the C++ or Java implementation of the tree function as written by Newton in his [tree repository](https://github.com/kddnewton/tree) [@newtonKddnewtonTree2025]. Then, run his code on your computer and capture the output in a screenshot. Finally, answer the Thought Provoking Questions.

## ✅ Acceptance Criteria

* Read through the code in the [tree repository](https://github.com/kddnewton/tree), taking time to understand it fully.
* Clone the repository and run one of the implementations of `tree` on your computer. Take a snapshot of your output and submit that for your lab assignment.
* Answer the Thought-Provoking Questions

## 📋 Dev Notes

N/A

## 🖥️ Example Output

N/A

## 📝 Thought Provoking Questions

1. How does the command work? Give a high-level description of how the command displays a tree in the console.
2. Is the filesystem displayed by the `tree` command an example of a binary tree or a general tree?
3. What is the root node of the tree displayed by the `tree` command?
4. What are the leaf nodes of the tree displayed by the `tree` command?
5. What does it mean if two files are sibling nodes in the tree displayed by the `tree` command?
6. How might you generate a tree with the largest possible depth via the `tree` command?
7. In Unix-like operating systems, all the files on all the devices generally exist in a single hierarchy. In other words, there is one root directory called `/`, and every file on the system is located under it somewhere. How does this relate to the idea of a tree data structure?

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
