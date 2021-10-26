import { Transaction } from './Transaction'
import { StatementPrinter } from './StatementPrinter'

export class Account {
  private balance: number;
  private transactionHistory: Transaction[];

  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  checkUserInput = (amount: number) => {
    if (amount < 0) throw new Error('Please enter an amount more than £0')
    if (amount.toString().split('.')[1].length > 2) throw new Error('Only 2 decimal places permitted')
  }

  deposit = (amount: number, date = new Date(), transaction = Transaction) => {
    this.checkUserInput(amount)
    this.transactionHistory.push(new transaction(date, amount, 0, this.balance += amount))
  }

  withdraw = (amount: number, date = new Date(), transaction = Transaction) => {
    this.checkUserInput(amount)
    this.transactionHistory.push(new transaction(date, 0, amount, this.balance -= amount))
  }

  printStatement = (statement = StatementPrinter) => {
    return new statement().formatTransactions(this.transactionHistory)
  }
}