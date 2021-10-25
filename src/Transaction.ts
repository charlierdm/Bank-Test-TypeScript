export class Transaction {
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
