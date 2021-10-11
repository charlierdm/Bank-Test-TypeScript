let transaction = require('./transaction')

class Account {
  balance: number;
  transactionHistory: object[];

  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit = (amount: number, transaction = Transaction) => {
    let newTransaction = new transaction(amount, 0, this.balance += amount)
    this.transactionHistory.push(newTransaction)
  }
}