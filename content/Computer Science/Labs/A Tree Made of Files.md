---
title: A Tree Made of Files
date: 2025-02-23
tags: [csc-216, trees]
description: In this lab, you will read an implementation of the tree command, run it locally on your computer, and analyze the code. Then, you will then customize the code to return a new view of the files.
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

A robust implementation of `tree` can be a bit complicated, but a GitHub user named Kevin Newton implements a simplified version of `tree` whenever they want to learn a new programming language [@newtonKddnewtonTree2025]. We will analyze and expand upon their code in this lab.

## 🎯 Problem Statement

Complete the following tasks:

1. Read through the C++ or Java implementation of the tree function as written by Newton in their [tree repository](https://github.com/kddnewton/tree) [@newtonKddnewtonTree2025].
2. Make sure that you can run Newton's original code locally on your computer.
3. Update the implementation of tree to list the directories / files in *reverse* alphabetical order.

## ✅ Acceptance Criteria

* The tree function should work in exactly the same way as before. However, the output should be different.
* Child directories should be listed in reverse alphabetical order.
* Files within each directory should be listed in reverse alphabetical order.

## 📋 Dev Notes

N/A

## 🖥️ Example Output

Suppose the original tree function listed files and directories like so:

```bash
$ ./tree.out

.
|- folder_a/
|---- file_a.txt
|---- file_b.txt
|---- file_c.txt
|- folder_b/
|---- file_a.txt
|---- file_b.txt
|---- file_c.txt
```

I now expect to see the following output:

```bash
$ ./tree.out

.
|- folder_b/
|---- file_c.txt
|---- file_b.txt
|---- file_a.txt
|- folder_a/
|---- file_c.txt
|---- file_b.txt
|---- file_a.txt
```

## 📝 Thought Provoking Questions

1. How does the command work? Give a high-level description of how the command displays a tree in the console.
2. Is the filesystem displayed by the `tree` command an example of a binary tree or a general tree?
3. What is the root node of the tree displayed by the `tree` command?
4. What are the leaf nodes of the tree displayed by the `tree` command?
5. How might you generate a tree with the largest possible depth via the `tree` command on a given filesystem?

## 💼 Add-Ons For the Portfolio

N/A

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
