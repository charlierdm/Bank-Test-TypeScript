# Bank-Test-TypeScript

![banks-and-tech-used](https://user-images.githubusercontent.com/75075773/138326968-902a9c2d-798b-429f-950e-6c13992afbe9.jpg)



This is my solution to the Makers Academy Bank Tech Test. I wrote this in TypeScript to learn it's fundemental features, whilst building a robust solution that meets the acceptance criteria. Tests are written using Jest and all passing.

## Learning Objectives

* Learn the fundementals of TypeScripts syntax.
* Assign basic types to class properties and variables.
* Create an array of objects with an expected class type.
* Learn how to set up the tsconfig file.
* Learn how compiling works and how the tsconfig settings alter the resulting files.


## user stories

```
As a user,
So I can store my money in my bank account,
I’d like to be able to make a deposit.

As a user, 
So I can access money in my bank account,
I’d like to be able to make a withdrawal.

As a user,
So I can keep track of what state my account is in,
I’d like to see an account statement which details transactions and their respective dates as well as my current balance.
```

## Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## How to use

fork and clone this repo.

from the root dir (bank=test-TypeScript) enter the following into the command line to install dependencies:
```
npm i
```
then the following to navigate to the Account.js
```
$ cd compiled/
```
open Account.js, this is where you can interact with the compiled code. For example:
```
let account = new Account();
account.deposit(100)
account.deposit(500)
account.withdraw(400)
console.log(account.printStatement())
```
to see what you've logged to the console, run the following command:
```
$ node Account.js
```
The above code logs the users statement to the console:


![node-bank-ts](https://user-images.githubusercontent.com/75075773/138429461-a303a76f-b281-4a46-8c53-a215e78458b9.png)


To run the tests, from the root dir enter:
```
cd src/
```
inside the src directory, enter:
```
$ npm test
```



