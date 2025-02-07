---
title: Payroll
date: 2025-01-30
tags: [c-plus-plus, csc-121, csc-214, basic-math]
description: In this lab you write a program that generates a payroll report based on some inputs from the user.
---

## 🔖 Background Information

This problem is available courtesy of Professor Jason James [@jamesPayrollUs2018].

## 🎯 Problem Statement

Create a payroll calculator for an employee of a business. When an employee enters their hours worked and number of dependents, the program will give them a full breakdown of their expenses and net pay.

## ✅ Acceptance Criteria

* When I start the program, I should see a welcome message.
* Next, the program should prompt me for the number of hours I worked this week and the number of dependents I have.
* From that information, the program should print out a report with my hours worked, rate of pay, gross earnings, calculated expenses, and net pay.
* Finally, the program should print an goodbye message and exit gracefully.

The following information will be useful when creating the report:

1. The current hourly rate is $16.78 per hour for all employees. This rate is paid for an employee's first 40 hours worked each week. If the employee works overtime (i.e. works hours beyond the first 40), those hours are paid at a rate one and a half times the normal pay rate.

2. Gross pay is calculated by taking the hourly rate and multiplying it by the number of hours worked. Don't forget to take overtime into account.

3. Tax deductions from employees' pay include: 6% withheld for social security tax, 14% withheld for federal income tax, and 5% withheld for state income tax. All employees are also a part of the local union which takes $10.00 for union dues.

4. Employees participate in a group insurance program so that they can get good rates on health insurance. The current package says that workers with three or more dependents must pay \$35 per pay check whereas other employees need to pay \$15 per paycheck.

5. Net pay is equal to gross pay minus all of the expenses. Note that net pay might be a negative number - we will fix that issue in one of the Add-Ons for the Portfolio.

## 📋 Dev Notes

Your output should be neat and organized with some formatting to the output. Dollar amounts should be aligned by either the decimal place or by the dollar sign. The entries in the report should either be left or right justified to make the report look nice and neat.

## 🖥️ Example Output

Your output report does not have to match this format exactly. I simply want to see all of the relevant information in a well-organized report. This includes the hours worked, payrate, gross pay, expenses, and net pay. An example output is as follows:

```text
Welcome to the Payroll Program!

How many hours did you work this week? 30
How many children do you have?  4

Payroll Stub:

   Hours:   30.0
    Rate:   16.78 $/hr
   Gross:   $ 503.40

  SocSec:   $ 30.20
  FedTax:   $ 70.48
   StTax:   $ 25.17
   Union:   $ 10.00
     Ins:   $ 35.00

     Net:   $ 332.55

Thank you for using the Payroll Program!
```

## 📝 Thought Provoking Questions

1. What was your testing strategy for this lab? How did you make sure that all of the different calculations were working properly?
2. Are there any inputs for the hours worked and / or number of dependents that would cause your program to crash?
3. Are there any inputs for the hours worked and / or number of dependents that would cause your program to return an erroneous output?

## 💼 Add-Ons For the Portfolio

### (One Credit) Customized Pay Rate

It is unrealistic for every employee of the company to earn $16.78 per hour. Add a prompt to ask the user what their pay rate is. Then, use that pay rate in all of the calculations.

The output of your program should not change otherwise.

### (One Credit) Validations for Pay Rate

You must first complete the add-on called "Customized Pay Rate" before you can attempt this add-on.

Right now, an employee can accidentally type a negative number for the pay rate. Update your code so that if an employee types a negative number for the pay rate, it asks them to re-enter their rate of pay.

The output of your program should not change otherwise.

### (One Credit) Validations for Number of Children

Right now, an employee can accidentally type a negative number for the number of children. Update your code so that if an employee types a negative number for the number of children, it automatically treats the number of children as zero. Is this the best strategy? Probably not. But the employee will see zero children on their report and know something went wrong.

The output of your program should not change otherwise.

### (Two Credits) Validations for Negative Pay

After taxes are deducted from an employee's paycheck, there could be a situation where there is not enough money left for union dues or insurance payments. In this situation, don't subtract union dues or insurance payments from the paycheck. Instead, print out how much the employee owes in dues / payments in addition to their payment. An example output looks like:

```text
Welcome to the Payroll Program!

How many hours did you work this week? 2
How many children do you have?  4

Payroll Stub:

   Hours:   2.0
    Rate:   16.78 $/hr
   Gross:   $ 33.56

  SocSec:   $ 2.01
  FedTax:   $ 4.70
   StTax:   $ 1.68

     Net:   $ 25.17

The employee still owes:

   Union:   $ 10.00
     Ins:   $ 35.00

Thank you for using the Payroll Program!
```

### (Four Credits) Life Insurance Plans

Employees can now add a life insurance plan to their payroll calculation. The packages available are: (1) no plan, (2) the single plan, (3) the married plan, and (4) the married with children plan. In addition to prompting the user for the number of hours that they worked and the number of children that they have, prompt the user with a menu of life insurance options. If the user enters a valid life insurance option, proceed with the calculation, including the life insurance costs outlined below. If the user does not enter a valid life insurance plan, print out an error message and prompt them for another selection.

1. Any employee can select the "no plan" option. In that case, there is no additional deduction from their paycheck.

2. Any employee can select the "single plan" option. In that case, there is a $5 deduction from their paycheck.

3. Any employee can select the "married plan" option (we will assume for now that everyone is perfectly honest about reporting whether they are married or not). In that case, there is a $10 deduction from their paycheck.

4. Only employees with one or more children can select the "married with children" plan. In that case, there is a $15 deduction from their paycheck.

An example output is shown below:

```text
Welcome to the Payroll Program!

How many hours did you work this week? 30
How many children do you have?  0
Which life insurance plan do you want to select?

  (1) no plan
  (2) single plan
  (3) married plan
  (4) married with children plan

4

Sorry! You need at least one child to select that plan.

Which life insurance plan do you want to select?

  (1) no plan
  (2) single plan
  (3) married plan
  (4) married with children plan

2

Payroll Stub:

   Hours:   30.0
    Rate:   16.78 $/hr
   Gross:   $ 503.40

  SocSec:   $ 30.20
  FedTax:   $ 70.48
   StTax:   $ 25.17
   Union:   $ 10.00
     Ins:   $ 15.00
 LifeIns:   $  5.00

     Net:   $ 347.55

Thank you for using the Payroll Program!
```

## 🔗 Useful Links

* [Java Project Template](https://github.com/cmvandrevala/payroll-java-template)

## 📘 Works Cited

[//]: <> (This is a placeholder for where the Works Cited will be rendered for this page.)
