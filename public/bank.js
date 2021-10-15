class Transaction {
    constructor(credit, debit, balance) {
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }
}
export class Account {
    constructor(balance = 0) {
        this.deposit = (amount, transaction = Transaction) => {
            let newDeposit = new transaction(amount, 0, this.balance += amount);
            this.transactionHistory.push(newDeposit);
        };
        this.withdraw = (amount, transaction = Transaction) => {
            let newWithdraw = new transaction(0, amount, this.balance -= amount);
            this.transactionHistory.push(newWithdraw);
        };
        this.balance = balance;
        this.transactionHistory = [];
    }
}
