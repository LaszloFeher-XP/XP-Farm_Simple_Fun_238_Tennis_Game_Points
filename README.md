[![Run Tests](https://github.com/LaszloFeher-XP/XP-Farm_Simple_Fun_238_Tennis_Game_Points/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Simple_Fun_238_Tennis_Game_Points/actions/workflows/test.yml/badge.svg) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Simple_Fun_238_Tennis_Game_Points) 
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Farm_Simple_Fun_238_Tennis_Game_Points/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Simple_Fun_238_Tennis_Game_Points/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# Simple Fun #238: Tennis Game Points

https://www.codewars.com/kata/590942d4efde93886900185a/train/javascript

## Instructions 

Task

Your friend has invited you to watch a tennis match at a local sports club. Since tennis isn't your favorite sport, you get bored right at the start of the first game and start looking for something to keep yourself entertained. Noticing the scoreboard, you realize you don't even know how many points have been won since the game started, so you decided to calculate this number. Given the current score, your goal is to find the number of points won in the current game.

If you are not familiar with tennis rules, here's a short description of its scoring system. Score calling is unique in tennis: each point has a corresponding call that is different from its point value. The table of points won and corresponding calls is given below.
```
+----------------------+--------------------+
| Number of points won | Corresponding call |
+----------------------+--------------------+
|          0           |      "love"        |
+----------------------+--------------------+
|          1           |       "15"         |
+----------------------+--------------------+
|          2           |       "30"         |
+----------------------+--------------------+
|          3           |       "40"         |
+----------------------+--------------------+
```
There's an additional rule to remember: when players are tied by one or two points, the score is described as "15-all" and "30-all", respectively.

It's guaranteed that no more than 5 points have been won so far, and the game is not over yet. It is also guaranteed that at least one point has been won.
Input/Output

[input] string score

A string in the format <p1>-<p2> representing a valid score, where <p1> is the first player's score, and <p2> is the second player's score.

[output] an integer

The number of points won so far.
Example

For `score = "15-40"`, the output should be 4.

The first player won `1` point, and the second `3`, so `1 + 3 = 4` points have been won.

For `score = "30-all"`, the output should be 4.

The players have won 2 points each.


## User Stories 

### 1. Checking first scores
As a User
I want to check the first scores
So that create logic for checking first part

#### Scenarios 

#### 1. 
Given the score which is 15-0
When the first part of the score is checked
Then value is 1

#### 2. 
Given the score which is 30-0
When the first part of the score is checked
Then value is 2

#### 3. 
Given the score which is 40-0
When the first part of the score is checked
Then value is 3

### 2. Checking second scores
As a User
I want to check the first scores
So that create logic for checking first part

#### Scenarios 

#### 4. 
Given the score which is 0-15
When the first part of the score is checked
Then value is 1

#### 5. 
Given the score which is 0-30
When the first part of the score is checked
Then value is 2

#### 6. 
Given the score which is 0-40
When the first part of the score is checked
Then value is 3

# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test -- --watchAll --collect-coverage --verbose```  

