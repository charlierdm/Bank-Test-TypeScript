import { Transaction } from './Transaction'
import { StatementPrinter } from './StatementPrinter'

export class Account {
  public balance: number;
  public transactionHistory: Transaction[];

  constructor(balance: number = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  dateToday: string = new Date(Date.now()).toLocaleString().split(',')[0];

  deposit = (amount: number, date = this.dateToday, transaction = Transaction) => {
    let newDeposit = new transaction(date, amount, 0, this.balance += amount)
    this.transactionHistory.push(newDeposit)
  }

  withdraw = (amount: number, date = this.dateToday, transaction = Transaction) => {
    let newWithdraw = new transaction(date, 0, amount, this.balance -= amount)
    this.transactionHistory.push(newWithdraw)
  }

  printStatement = (statement = StatementPrinter) => {
    return new statement().formatTransactions(this.transactionHistory)
  }
}