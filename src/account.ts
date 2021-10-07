import { Transaction } from './transaction'

class Account {
  balance: number;
  transactionHistory: object[];

  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit = (amount: number) => {
    let transaction = new Transaction(amount, 0, this.balance += amount)
    this.transactionHistory.push(transaction)
  }
}
