# Bank-Test-TypeScript

![banks-and-tech-used](https://user-images.githubusercontent.com/75075773/138326968-902a9c2d-798b-429f-950e-6c13992afbe9.jpg)



This is my solution to the Makers Academy Bank Tech Test. I wrote this in TypeScript to learn how to assign types and to create a robust solution that meets the acceptance criteria. Tests are written using Jest and all passing.


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
then the following to navigate to the index.html file:
```
$ cd public/
```
then type the following to open the file in the browser.
```
$ open index.html
```

You can then use the dev tools (assuming your in Chrome) to interact with the app.

To run the tests, from the root dir enter:
```
cd src/
```
```
npm test
```

### Example code

```
let account = new Account();
account.deposit(100)
account.deposit(500)
account.withdraw(400)
account.printStatement()
```
