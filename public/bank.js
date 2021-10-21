class Transaction {
    constructor(date, credit, debit, balance) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }
}
export class Account {
    constructor(balance = 0) {
        this.deposit = (amount, transaction = Transaction) => {
            let newDeposit = new transaction(new Date(), amount, 0, this.balance += amount);
            this.transactionHistory.push(newDeposit);
        };
        this.withdraw = (amount, transaction = Transaction) => {
            let newWithdraw = new transaction(new Date(), 0, amount, this.balance -= amount);
            this.transactionHistory.push(newWithdraw);
        };
        this.balance = balance;
        this.transactionHistory = [];
    }
}
