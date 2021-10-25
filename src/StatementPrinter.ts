import { Transaction } from "./Transaction"

export class StatementPrinter {
  formatNumbers = (numbers: number) => {
    return numbers === 0 ? ' ' : ` ${Math.round(numbers).toFixed(2)} `;
  }

  formatDate = (date: Date) => {
    return new Date(date).toLocaleString().split(',')[0];
  }

  formatTransactions = (transactionHistory: Transaction[]) => {
    const header = 'date || credit || debit || balance'
    const footer: string[] = transactionHistory.map(transaction => {
      return `${this.formatDate(transaction.date)} ||${this.formatNumbers(transaction.credit)}||${this.formatNumbers(transaction.debit)}||${this.formatNumbers(transaction.balance).trimEnd()}`;
    })
    return `${header}\n${footer.reverse().join('\n')}`;
  }
}