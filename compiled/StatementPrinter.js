export class StatementPrinter {
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
