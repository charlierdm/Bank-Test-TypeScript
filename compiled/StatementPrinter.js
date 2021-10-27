export class StatementPrinter {
    formatNumbers(numbers) {
        return numbers === 0 ? ' ' : ` ${Math.round(numbers).toFixed(2)} `;
    }
    formatDate(date) {
        return new Date(date).toLocaleString().split(',')[0];
    }
    formatTransactions(transactionHistory) {
        const transactions = transactionHistory.map(t => {
            return `${this.formatDate(t.date)} ||${this.formatNumbers(t.credit)}||${this.formatNumbers(t.debit)}||${this.formatNumbers(t.balance).trimEnd()}`;
        });
        return `date || credit || debit || balance\n${transactions.reverse().join('\n')}`;
    }
}
