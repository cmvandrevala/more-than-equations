---
layout: activity
title: "Kim's Game"
draft: true
---

## 🔖 Background Information

Kim's Game is a game derived from Rudyard Kipling's 1901 novel Kim, in which the protagonist plays a memory game while training as a spy. In it, a series of objects are laid out, and the player has to memorize details about them before recalling them at a later time {% cite kiplingKim1901 %}.

## 🎯 Problem Statement

Write a simple memory game that can be played in the console. The game will display a list of characters in the console and give the player a chance to memorize their sequence. Then, it will "clear" the screen and ask the player to re-enter the characters in the same order. Finally, it will tell the player which characters they got correct and incorrect.

## ✅ Acceptance Criteria

1. When I start the program, I should see a welcome message.
2. The program should then print out a randomly generated sequence of characters to the screen.
3. Next, the program should prompt the player to ask if they are ready to recreate the sequence.
4. When the player affirms that they are ready to play, the program should print out about 100 newline characters. This will "clear" the console by hiding the original sequence of characters.
5. The program should then allow the user to re-enter the sequence from memory.
6. Finally, the program should give the user a summary of which characters they got right and wrong before exiting gracefully.

## 📋 Dev Notes

* You get to decide how long the sequence of characters to memorize will be.

## 🖥️ Example Output

```bash
./kim.out

Welcome to Kim's Game!

Memorize the following sequence of characters: A B C 1 2 3

Are you ready? Yes

# The program prints out many newline characters here
# to "hide" the original sequence.

Enter the sequence from memory: A B C 4 5 6

Not quite! You wrote A B C 4 5 6, but the sequence was A B C 1 2 3.
```

## 📘 Works Cited

{% bibliography --cited %}
