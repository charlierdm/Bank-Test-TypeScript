import { Transaction } from './Transaction'
import { StatementPrinter } from './StatementPrinter'

export class Account {
  balance: number;
  transactionHistory: Transaction[];

  constructor(balance: number = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  dateToday: string = new Date(Date.now()).toLocaleString().split(',')[0];

  deposit = (amount: number, date = this.dateToday, transaction = Transaction) => {
    this.transactionHistory.push(new transaction(date, amount, 0, this.balance += amount))
  }

  withdraw = (amount: number, date = this.dateToday, transaction = Transaction) => {
    this.transactionHistory.push(new transaction(date, 0, amount, this.balance -= amount))
  }

  printStatement = (statement = StatementPrinter) => {
    return new statement().formatTransactions(this.transactionHistory)
  }
}