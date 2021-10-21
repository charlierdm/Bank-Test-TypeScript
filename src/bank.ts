class Transaction {
  date: string;
  credit: number;
  debit: number;
  balance: number;

  constructor(date: string, credit: number, debit: number, balance: number) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }
}

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

class StatementPrinter {
  formatNumbers = (numbers: number) => {
    return numbers === 0 ? ' ' : ` ${Math.round(numbers).toFixed(2)} `
  }
  formatTransactions = (transactionHistory : Transaction[]) => {
    const header = 'date || credit || debit || balance'
    const footer = transactionHistory.map(transaction => {
      return `${transaction.date} ||${this.formatNumbers(transaction.credit)}||${this.formatNumbers(transaction.debit)}||${this.formatNumbers(transaction.balance).trimEnd()}`
    })
    return `${header}\n${footer.reverse().join('\n')}`
  }
}


