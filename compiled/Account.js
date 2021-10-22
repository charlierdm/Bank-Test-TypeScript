import { Transaction } from './Transaction';
import { StatementPrinter } from './StatementPrinter';
export class Account {
    constructor(balance = 0) {
        this.dateToday = new Date(Date.now()).toLocaleString().split(',')[0];
        this.deposit = (amount, date = this.dateToday, transaction = Transaction) => {
            this.transactionHistory.push(new transaction(date, amount, 0, this.balance += amount));
        };
        this.withdraw = (amount, date = this.dateToday, transaction = Transaction) => {
            this.transactionHistory.push(new transaction(date, 0, amount, this.balance -= amount));
        };
        this.printStatement = (statement = StatementPrinter) => {
            return new statement().formatTransactions(this.transactionHistory);
        };
        this.balance = balance;
        this.transactionHistory = [];
    }
}
