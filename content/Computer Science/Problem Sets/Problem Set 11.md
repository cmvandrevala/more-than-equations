---
title: Problem Set 11
tags: [csc-216]
description: This problem set is from week eleven of the course.
---

1. Insert the integer keys [67, 13, 49, 24, 40, 33, 58] in order into a hash table of size 9 using the hash function h(k) = (11k + 4) mod 9. Collisions should be resolved via chaining, where collisions are stored at the end of a chain. Draw a picture of the hash table after all keys have been inserted.

---

2. Draw the 11-entry hash table that results from using the hash function h(k) = (3k + 5) mod 11 when inserting the sequence of keys [12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5], in that order. Assume that collisions are handled by quadratic probing, up to the point where the function fails.

---

3. Draw the 11-entry hash table that results from using the hash function h(k) = (3k + 5) mod 11 when inserting the sequence of keys [12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5], in that order. Assume that collisions are handled using a secondary hash function h'(k) = 7 - (k mod 7).

---

4. Explain why a hash table is not suited to implement an ordered map.

---

5. An interesting strategy for hashing with separate chaining is known as "power-of-two-choices" hashing. Two independent hash functions are computed for each key, and a newly inserted element is placed into the choice of the two indicated buckets that currently has the fewest entries. Write the pseudocode for the insert and get operations on a hashmap which uses the power of two choices hashing strategy.
