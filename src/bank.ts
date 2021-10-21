import moment from "../node_modules/moment/ts3.1-typings/moment";

class Transaction {
  date: Date;
  credit: number;
  debit: number;
  balance: number;

  constructor(date: Date, credit: number, debit: number, balance: number) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }
}

export class Account {
  public balance: number;
  public transactionHistory: Transaction[];

  constructor(balance: number = 0 ) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit = (amount: number, transaction = Transaction) => {
    let newDeposit = new transaction(new Date(), amount, 0, this.balance += amount)
    this.transactionHistory.push(newDeposit)
  }

  withdraw = (amount: number, transaction = Transaction) => {
    let newWithdraw = new transaction(new Date(), 0, amount, this.balance -= amount)
    this.transactionHistory.push(newWithdraw)
  }
}
