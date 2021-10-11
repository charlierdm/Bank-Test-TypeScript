"use strict";
let transaction = require('./transaction');
class Account {
    constructor(balance = 0) {
        this.deposit = (amount, transaction = Transaction) => {
            let newTransaction = new transaction(amount, 0, this.balance += amount);
            this.transactionHistory.push(newTransaction);
        };
        this.balance = balance;
        this.transactionHistory = [];
    }
}
