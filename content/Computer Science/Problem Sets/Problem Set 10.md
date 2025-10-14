---
title: Problem Set 10
tags: [csc-216]
description: This problem set focuses on sets and skip lists.
---

Consider a set whose elements are integers in the range $[0, N-1]$. A popular scheme for representing a set $A$ of this type is by means of a boolean array, $B$, where we say that $x$ is in $A$ if and only if $B[x]$ is true. Since each cell of $B$ can be represented with a single bit, $B$ is sometimes referred to as a bit vector.

Write the pseudocode for a `Set` class which uses a bit vector to keep track of stored integers. It should include the following methods:

1. A constructor in which you can specify the range of values from 0 to N.
2. A method to insert an element into the set.
3. A method to delete an element from the set.

---

Suppose I have a perfect skip list with the values 3, 4, 7, 12, 13, 14, 17.

4. Sketch a diagram of the skip list, showing which nodes are connected at which "levels".
5. Highlight the path that would be taken through the skip list if you are searching for the number 12.
6. Sketch a new diagram (or set of diagrams) that shows how you would insert the number 15 into the skip list. You do not have to maintain a perfect skip list - the insertion of the element will make it non-perfect. Be sure to describe how randomness is used to determine the "height" of the new element.
7. Sketch a new diagram (or set of diagrams) that shows how you would remove the number 7 from the skip list. You do not have to maintain a perfect skip list - the deletion of the element will make it non-perfect.

---

Consider two sets, $A$ and $B$, each with some number of unique elements.

8. Write the pseudocode for an algorithm that creates one aggregate set from the two sets $A$ and $B$.
9. What is the time complexity of your algorithm? Prove your answer.
