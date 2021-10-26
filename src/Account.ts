import { Transaction } from './Transaction'
import { StatementPrinter } from './StatementPrinter'

export class Account {
  private balance: number;
  private transactionHistory: Transaction[];

  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  amountHasTwoDecimals = (amount: number) => {
    if (Math.floor(amount * 100) !== amount * 100) throw new Error('Only 2 decimal places permitted e.g £0.99')
  }

  checkUserInput = (amount: number) => {
    if (amount < 0) throw new Error('Please enter an amount more than £0')
    this.amountHasTwoDecimals(amount)
  }

  deposit = (amount: number, date = new Date(), transaction = Transaction) => {
    this.checkUserInput(amount)
    this.transactionHistory.push(new transaction(date, amount, 0, this.balance += amount))
  }

  withdraw = (amount: number, date = new Date(), transaction = Transaction) => {
    if (amount > this.balance) throw new Error('Not enough funds in your account')
    this.checkUserInput(amount)
    this.transactionHistory.push(new transaction(date, 0, amount, this.balance -= amount))
  }

  printStatement = (statement = StatementPrinter) => {
    return new statement().formatTransactions(this.transactionHistory)
  }
}