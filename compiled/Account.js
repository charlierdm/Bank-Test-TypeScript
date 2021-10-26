import { Transaction } from './Transaction';
import { StatementPrinter } from './StatementPrinter';
export class Account {
    constructor(balance = 0) {
        this.checkUserInput = (amount) => {
            if (amount < 0)
                throw new Error('Please enter an amount more than £0');
        };
        this.deposit = (amount, date = new Date(), transaction = Transaction) => {
            this.checkUserInput(amount);
            this.transactionHistory.push(new transaction(date, amount, 0, this.balance += amount));
        };
        this.withdraw = (amount, date = new Date(), transaction = Transaction) => {
            this.checkUserInput(amount);
            this.transactionHistory.push(new transaction(date, 0, amount, this.balance -= amount));
        };
        this.printStatement = (statement = StatementPrinter) => {
            return new statement().formatTransactions(this.transactionHistory);
        };
        this.balance = balance;
        this.transactionHistory = [];
    }
}
