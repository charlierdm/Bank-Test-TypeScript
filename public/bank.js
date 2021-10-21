class Account {
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

class Transaction {
    constructor(date, credit, debit, balance) {
        this.date = date;
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }
}

class StatementPrinter {
    constructor() {
        this.formatNumbers = (numbers) => {
            return numbers === 0 ? ' ' : ` ${Math.round(numbers).toFixed(2)} `;
        };
        this.formatTransactions = (transactionHistory) => {
            const header = 'date || credit || debit || balance';
            const footer = transactionHistory.map(transaction => {
                return `${transaction.date} ||${this.formatNumbers(transaction.credit)}||${this.formatNumbers(transaction.debit)}||${this.formatNumbers(transaction.balance).trimEnd()}`;
            });
            return `${header}\n${footer.reverse().join('\n')}`;
        };
    }
}

