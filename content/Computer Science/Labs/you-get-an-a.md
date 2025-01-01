---
layout: lab
title: You Get an A!
draft: true
---

## 🔖 Background Information

I want to implement a brand new, customized gradebook for CSC 122. However, I don't have enough time in my busy schedule to build it myself. Thus, I am asking you to build me a gradebook with some basic functionality.

## 🎯 Problem Statement

Implement a `Gradebook` class that will track grades for CSC 122. I should be able to take the following actions with your gradebook:

1. Add a new student to the class (first name, last name, student ID).
2. Add a new assignment to the class (name of assignment, total points possible).
3. Give a student a grade for an assignment (the grade can be between zero and the total points possible).
4. Print out a formatted report that shows all of the students and all of the grade information.

## ✅ Acceptance Criteria

* Create a `Gradebook` class that implements all four parts of the Problem Statement. Note that I am not specifying any methods on the `Gradebook` class - the specific design of how everything will work is up to you!
* Write a useful `README` that tells me how to use your gradebook in addition to the normal information of how to get things set up.

## 📋 Dev Notes

* You have a lot of control over what the design of this program should be:
  * What domain objects are defined in this problem? Gradebook? Student? Assignment?
  * You are required to write a `Gradebook` class, but might it be useful to write some others?
  * What format should the report take? How will you handle grades that have not been set versus those that are zero?
  * Do you want to print the report to a file? Or maybe do you want to just print the report to the console?

## 🖥️ Example Output

Remember, you have a lot of control over the details of the inputs / outputs for this assignment. Your design does NOT have to match mine below. But here is the way that I, personally, might like to use the gradebook in a driver program.

```cpp
Gradebook gradebook;

gradebook.add_student("Bob Bobberson", "ABC123");
gradebook.add_student("Sam Sammerson", "DEF456");
gradebook.add_student("Jess Jesserson", "HIJ789");

gradebook.add_assignment("Quiz 1", 100);
gradebook.add_assignment("Lab 1", 50);

gradebook.enter_grade("Sam Sammerson", "Quiz 1", 95);
gradebook.enter_grade("Bob Bobberson", "Quiz 1", 85);
gradebook.enter_grade("Jess Jesserson", "Lab 1", 49);
gradebook.enter_grade("Jess Jesserson", "Quiz 1", 93);
gradebook.enter_grade("Bob Bobberson", "Lab 1", 0);

cout << gradebook.report();

// The outputted report might look something like this:

// Last_Name,First_Name,Student_Id,Quiz_1,Lab_1
// Bobberson,Bob,ABC123,85,0
// Jesserson,Jess,HIJ789,93,49
// Sammerson,Sam,DEF456,95,none
```

## 📝 Thought Provoking Questions

1. What strategy did you take to determine the design of your gradebook?
2. How are you storing grade information for students? What are some of the pros / cons of this strategy?
3. In what capacity, if any, are you using pointers in your implementation? Do you have any double pointers in your implementation?
4. What does your report look like if there is no student data or assignment data?
5. What happens if you try to enter grade information for a student or assignment that does not exist? Note: you do not have to implement a bunch of validations for user input at this time. I am just curious as to what would happen in your program.

## 💼 Add-Ons For the Portfolio

### (Two Credits) Average Grade for a Student

Update the report to calculate the average grade for each student. The average grade will just be the total number of points that they have earned for all assignments divided by the total number of points possible on all assignments. If a grade has not been entered for a particular assignment, don't include it in the average grade calculation. The output of your program might looks something like:

```cpp
Gradebook gradebook;

gradebook.add_student("Bob Bobberson", "ABC123");
gradebook.add_student("Sam Sammerson", "DEF456");
gradebook.add_student("Jess Jesserson", "HIJ789");

gradebook.add_assignment("Quiz 1", 100);
gradebook.add_assignment("Lab 1", 50);

gradebook.enter_grade("Sam Sammerson", "Quiz 1", 95);
gradebook.enter_grade("Bob Bobberson", "Quiz 1", 85);
gradebook.enter_grade("Jess Jesserson", "Lab 1", 49);
gradebook.enter_grade("Jess Jesserson", "Quiz 1", 93);
gradebook.enter_grade("Bob Bobberson", "Lab 1", 0);

cout << gradebook.report();

// The outputted report might look something like this:

// Last_Name,First_Name,Student_Id,Quiz_1,Lab_1,Average
// Bobberson,Bob,ABC123,85,0,56.666
// Jesserson,Jess,HIJ789,93,49,94.666
// Sammerson,Sam,DEF456,95,none,95.000
```

### (Two Credits) Assignment Breakdown

Create a new method on `Gradebook` called `assignment_report(...)` that takes an assignment as an argument and returns a breakdown of the scores. It should display all of the student scores for an assignment as well as the average score. If a score has not been entered for a student, display a placeholder and do not include it in the average score calculation. Your output might look something like this:

```cpp
Gradebook gradebook;

gradebook.add_student("Bob Bobberson", "ABC123");
gradebook.add_student("Sam Sammerson", "DEF456");
gradebook.add_student("Jess Jesserson", "HIJ789");

gradebook.add_assignment("Quiz 1", 100);
gradebook.add_assignment("Lab 1", 50);

gradebook.enter_grade("Sam Sammerson", "Quiz 1", 95);
gradebook.enter_grade("Bob Bobberson", "Quiz 1", 85);
gradebook.enter_grade("Jess Jesserson", "Lab 1", 49);
gradebook.enter_grade("Jess Jesserson", "Quiz 1", 93);
gradebook.enter_grade("Bob Bobberson", "Lab 1", 0);

cout << gradebook.assignment_report("Lab 1");

// The outputted report might look something like this:

// Last_Name,First_Name,Student_Id,Score
// Bobberson,Bob,ABC123,0
// Jesserson,Jess,HIJ789,49
// Sammerson,Sam,DEF456,none
//
// Average score: 24.5 / 50
```

## 📘 Works Cited

N/A
