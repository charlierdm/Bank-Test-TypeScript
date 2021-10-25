import { Transaction } from "./Transaction"

export class StatementPrinter {
  formatNumbers = (numbers: number) => {
    return numbers === 0 ? ' ' : ` ${Math.round(numbers).toFixed(2)} `;
  }

  formatDate = (date: Date) => {
    return new Date(date).toLocaleString().split(',')[0];
  }

  formatTransactions = (transactionHistory: Transaction[]) => {
    const transactions: string[] = transactionHistory.map(t => {
      return `${this.formatDate(t.date)} ||${this.formatNumbers(t.credit)}||${this.formatNumbers(t.debit)}||${this.formatNumbers(t.balance).trimEnd()}`;
    })
    return `date || credit || debit || balance\n${transactions.reverse().join('\n')}`;
  }
}