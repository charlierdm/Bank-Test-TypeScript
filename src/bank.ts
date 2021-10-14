class Transaction {
  credit: number;
  debit: number;
  balance: number;

  constructor(credit: number, debit: number, balance: number) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }
}

class Account {
  balance: number;
  transactionHistory: object[];

  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit = (amount: number, transaction = Transaction) => {
    let newDeposit = new transaction(amount, 0, this.balance += amount)
    this.transactionHistory.push(newDeposit)
  }

  withdraw = (amount: number, transaction = Transaction) => {
    let newWithdraw = new transaction(amount, 0, this.balance -= amount)
    this.transactionHistory.push(newWithdraw)
  }
}

