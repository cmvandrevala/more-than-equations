---
layout: lab
title: Rolling Along
draft: true
---

## 🔖 Background Information

Suppose you want to roll some number of dice, each having some number of faces, and count up the total on all of the faces. Tabletop gamers will often use the phrase "NdS" where N is the number of dice and S is the number of sides on each die. For example, 4d6 would represent rolling 4 dice, each with 6 sides.

The minimum value achievable on such a roll is N since each die has a minimum value of one and there are N of them. The maximum value you can get on such a roll is NS since the maximum value on each die is S and there are N of them. The average of such a roll is the quantity:

$$
avg = \frac{min + max}{2}
$$

This problem is available courtesy of {% cite jamesRollEmRoll2023 %}.

## 🎯 Problem Statement

Write a program that prints out some of the statistics on a roll of multiple dice. Then, have the program make the roll and return the result to the user.

## ✅ Acceptance Criteria

* When I start the program, I should see a welcome message.
* The program should prompt me for the number of dice in my roll as well as the number of faces per die.
* The program should calculate the minimum, maximum, and average of the given dice roll and report them in a nicely formatted way.
* After the program reports the statistics for a given roll, it should produce a sample roll of the dice.
* Finally, the program should display an exit message and exit gracefully.

## 📋 Dev Notes

* Be sure to seed your random number generator appropriately so that I get different values for the roll if I run the program repeatedly.
* I don't want you to simply return a number between the maximum and minimum values - that would correspond to a uniform distribution of results. Instead, I want you to return results with the same probability that the actual dice rolls would be.

## 🖥️ Example Output

```bash
$ ./dicestat.out

Welcome to the Dice Statistics Program!

How many dice are in your roll?
3

How many sides are on a dice in your roll?
12

Thank you! When rolling a 3d12, your statistics will be:

   Minimum:  3
   Average:  19.5
   Maximum:  36

You rolled a 23!

Thank you for using the DSP!
```

## 📝 Thought Provoking Questions

1. How is the `srand` function used in your code? What happens if you do not use it?
2. What strategy did you use to make sure the seeded value for the random number generator was different every time the program was run?
3. How did you use the random number generator to generate dice rolls with the correct statistics?

## 💼 Add-Ons For the Portfolio

### (One Credit) Critical Hit

In Dungeons and Dragons, if you roll a 20 on a 20-sided die, that is called a natural 20. In combat, a natural 20 corresponds to a critical hit. Modify your program so that if the user is rolling a 1d20, the program tells them that they got a natural 20 and a critical hit. The output of the program might look something like this:

```bash
$ ./dicestat.out

Welcome to the Dice Statistics Program!

How many dice are in your roll?
1

How many sides are on a dice in your roll?
20

Thank you! When rolling a 1d20, your statistics will be:

   Minimum:  1
   Average:  10.5
   Maximum:  20

You rolled a natural 20! Critical hit!

Thank you for using the DSP!
```

### (Two Credits) Constant Modifier

Oftentimes, a player wants to roll some dice and add a constant modifier to the result. For example, I might want to roll three six-sided dice and then add the number 4 to the result. This would be written as "3d6 + 4". Note that the maximum, minimum, and average values will all increase by the amount of the constant modifier.

Update you program to take a constant modifier as input. The output of the program might look something like this:

```bash
$ ./dicestat.out

Welcome to the Dice Statistics Program!

How many dice are in your roll?
3

How many sides are on a dice in your roll?
6

What is the constant modifier you want to add to your roll?
4

Thank you! When rolling a 3d6 + 4, your statistics will be:

   Minimum:  7
   Average:  14.5
   Maximum:  22

You rolled a 10.

Thank you for using the DSP!
```

### (Three Credits) A More Natural UI

Traditional gamers using your program might find the interaction a bit clumsy since they are used to the notation that you print in the report (NdS) instead of entering N at one prompt and S at another. It is in their guide / rulebooks as NdS, it is on their character sheets as NdS, and it is even in their heads as NdS, but they can't use it here!

Update your program to use the more natural notation. The output of your program might look something like:

```bash
$ ./dicestat.out

Welcome to the Dice Statistics Program!

What is your roll?  3d12

Thank you! When rolling a 3d12, your statistics will be:

   Minimum:  3
   Average:  19.5
   Maximum:  36

You rolled a 23!

Thank you for using the DSP!
```

If you decided to complete the add-on called "Constant Modifier", you have to consider rolls with a constant modifier. Your output might look like:

```bash
$ ./dicestat.out

Welcome to the Dice Statistics Program!

What is your roll?  3d12 + 2

Thank you! When rolling a 3d12, your statistics will be:

   Minimum:  5
   Average:  21.5
   Maximum:  38

You rolled a 21!

Thank you for using the DSP!
```

### (Four Credits) Dice Combinations

You need to complete "A More Natural UI" before you can do this add-on.

Sometimes, a player wants to roll combinations of different types of dice. For example, I might want to roll 3d6 + 2d8 + 1d4. This would mean that I want to roll three six-sided die, two eight-sided die, and one four sided die and add up all of the faces.

The statistics for combinations of dice rolls are a bit more complicated then just a single group of dice, so we will gloss over them for now. You only need to return the maximum and minimum values that the roll can take (no need to include the average).

Update your program to allow a user to enter combinations of dice. The output of your program might look something like:

```bash
$ ./dicestat.out

Welcome to the Dice Statistics Program!

What is your roll?  3d12 + 2d6

Thank you! When rolling a 3d12 + 2d6, your statistics will be:

   Minimum:  5
   Maximum:  48

You rolled a 29!

Thank you for using the DSP!
```

If you decided to complete the add-on called "Constant Modifier", you have to consider rolls with a constant modifier. Your output might look like:

```bash
$ ./dicestat.out

Welcome to the Dice Statistics Program!

What is your roll?  3d12 + 2d6 + 5

Thank you! When rolling a 3d12 + 2d6, your statistics will be:

   Minimum:  10
   Maximum:  53

You rolled a 34!

Thank you for using the DSP!
```

Remember! I don't want you to return a random value between the maximum and minimum values. That corresponds to a uniform distribution of results. Instead, I want you to actually make the dice rolls using a random number generator and add up all of the individual roll results.

## 📘 Works Cited

{% bibliography --cited %}
