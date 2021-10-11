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

module.exports = Transaction;