export class Transaction {
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
