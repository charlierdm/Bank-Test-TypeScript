const moment = require('moment');
class Transaction {
    constructor(date, credit, debit, balance) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }
}
class Account {
    constructor(balance = 0) {
        this.deposit = (amount, transaction = Transaction) => {
            let newDeposit = new transaction(moment(new Date(), "DD-MM-YYYY"), amount, 0, this.balance += amount);
            this.transactionHistory.push(newDeposit);
        };
        this.withdraw = (amount, transaction = Transaction) => {
            let newWithdraw = new transaction(moment(new Date(), "DD-MM-YYYY"), 0, amount, this.balance -= amount);
            this.transactionHistory.push(newWithdraw);
        };
        this.printStatement = (statement = StatementPrinter) => {
            return new statement().formatTransactions(this.transactionHistory);
        };
        this.balance = balance;
        this.transactionHistory = [];
    }
}
class StatementPrinter {
    constructor() {
        this.formatTransactions = (transactionHistory) => {
            const header = 'date || credit || debit || balance';
            const footer = transactionHistory.map(transaction => {
                return `${transaction.date}${transaction.credit} || ${transaction.debit} || ${transaction.balance}`;
            });
            return `${header}\n${footer}`;
        };
    }
}
