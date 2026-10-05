---
title: Lemonade Stand
tags:
  - c-plus-plus
  - csc-122
  - csc-214
  - java
description: This portfolio has you build your own console-based game where you sell drinks and snacks from a virtual lemonade stand.
---

## 🔖 Background Information

In a "business tycoon" style game, you assume the role of a business owner and try to successfully run a business in a simulated market. There are a huge number of these types of games, each with their own unique quirks. In this portfolio, we are going to build a lemonade stand game that can be played in the console. Players can purchase ingredients, set prices, and sell lemonade in a simulated lemonade market.

## 🎯 Problem Statement

Implement a "businss tycoon" style game where you sell lemonade from your own virtual lemonade stand.

Note: You will expand on this codebase multiple times throughout the semester in different portfolios.

## ✅ Acceptance Criteria

Players start the game with $100 in their account. The game progresses day by day with each day broken up into a "preparation phase" and a "selling phase".

At the start of the day (i.e. the preparation phase), players can take any of the following actions:

1. Purchase Ingredients - Players can purchase as many lemons (one for $1) and cups of sugar (one for 50 cents) as they want. We will add other ingredients and snacks in future portfolios.
2. Tweak the Recipe - Players can specify how many lemons, cups of sugar, and cups of water go into one pitcher of lemonade. Water comes from your parent's tap, so it is free. Right now, you can assume that some magic is happening and every pitcher is the same volume, regardless of how much lemon, water, and sugar you put in it. We will change this in a future portfolio 😊
3. Set the Price - Players can specify how much they want to charge for one cup of lemonade. Each pitcher contains 8 cups of lemonade.
4. Make Pitchers of Lemonade - Players can make pitchers of lemonade based on their recipe and their current ingredients.
5. Move Onto the Selling Phase - Once the player has prepared for the day, they can move onto the selling phase.

Once the preparation phase is done, players move into the selling phase.

1. Generate a random number of customers between 1 and 500. Each customer wants to buy a cup of lemonade if there is enough in stock. If there are not enough cups of lemonade, the available cups are all sold out and some customers leave without lemonade.
2. Water, lemons, and cups of sugar do not expire. You can keep them in your inventory forever.
2. Any pitchers of lemonade that are not sold at the end of the day go to waste. You don't have a fridge, so you just have to dump them out on the sidewalk and lose those ingredients...

## 📋 Dev Notes

Your code needs to gracefully handle all of the edge cases that you would reasonably expect to encounter in this game. Your program should not crash from user input!

Just to name a few edge cases you might think about:

1. What happens if a player tries to buy a lemon, but they don't have enough money?
2. What happens if a player starts the day without any money to buy ingredients?
3. What happens if a player tries to make a pitcher of lemonade, but they don't have enough of one ingredient?
4. What happens if a player tweaks the recipe multiple times during the preparation phase?
4. Can you realistically sell a cup of lemonade for a fraction of a penny?
4. And more!

Keep the idea of an MVP (minimal viable product) in mind as you write your code. If you have to ask "should I include this feature?", the answer is probably "no" unless specifically outlined in the Acceptance Criteria.

## 🖥️ Example Output

```bash
Welcome to My Lemonade Stand!

Day 1: Preparation Phase
Let's prepare for the day!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lemons: 0
Sugar (Cups): 0
Water (Cups): Infinity
Current Pitchers: 0
Cash: $100

1. Purchase Ingredients
2. Tweak the Recipe
3. Set the Price
4. Make Pitchers of Lemonade
5. Move Onto the Selling Phase

What would you like to do? 1

Lemons are $1 each
Sugar is $0.50 per cup

How many lemons do you want to buy? 50
How many cups of sugar do you want to buy? 40

Great! Transaction complete!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lemons: 50
Sugar (Cups): 40
Water (Cups): Infinity
Current Pitchers: 0
Cash: $30

1. Purchase Ingredients
2. Tweak the Recipe
3. Set the Price
4. Make Pitchers of Lemonade
5. Move Onto the Selling Phase

What would you like to do? 2

How many lemons do you want per pitcher? 5
How many cups of sugar do you want per pitcher? 2
How many cups of water do you want per pitcher? 6

Great! Your recipe is set!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lemons: 50
Sugar (Cups): 40
Water (Cups): Infinity
Current Pitchers: 0
Cash: $30

1. Purchase Ingredients
2. Tweak the Recipe
3. Set the Price
4. Make Pitchers of Lemonade
5. Move Onto the Selling Phase

What would you like to do? 3

How much will you sell one cup of lemonade for? Remember, one pitcher is 8 cups: $1.00

Awesome! Each cup of lemonade is $1.00 and each pitcher is 8 x $1.00 = $8.00 total.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lemons: 50
Sugar (Cups): 40
Water (Cups): Infinity
Current Pitchers: 0
Cash: $30

1. Purchase Ingredients
2. Tweak the Recipe
3. Set the Price
4. Make Pitchers of Lemonade
5. Move Onto the Selling Phase

What would you like to do? 4

How many pitchers of lemonade do you want to make? 8

Fantastic! You used 40 lemons, 16 cups of sugar, and 48 cups of water to make 8 pitchers of lemonade.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lemons: 10
Sugar (Cups): 24
Water (Cups): Infinity
Current Pitchers: 8
Cash: $30

1. Purchase Ingredients
2. Tweak the Recipe
3. Set the Price
4. Make Pitchers of Lemonade
5. Move Onto the Selling Phase

What would you like to do? 5

Day 1: Selling Phase

The customers are coming!

30 customers visited your stand today! You sold 30 cups of lemonade for $30.

Unfortunately, you did not sell the remaining 4 pitchers + 2 cups of lemonade. That lemonade got thrown onto a potted plant. The potted plant died 🥲

Let's get a good night sleep and try again tomorrow!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Day 2: Preparation Phase
Let's prepare for the day!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lemons: 10
Sugar (Cups): 24
Water (Cups): Infinity
Current Pitchers: 0
Cash: $30

1. Purchase Ingredients
2. Tweak the Recipe
3. Set the Price
4. Make Pitchers of Lemonade
5. Move Onto the Selling Phase

What would you like to do?
```

## 🔗 Useful Links

N/A

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
