import { Transaction } from "./Transaction"

export class StatementPrinter {
  formatNumbers = (numbers: number) => {
    return numbers === 0 ? ' ' : ` ${Math.round(numbers).toFixed(2)} `;
  }
  formatTransactions = (transactionHistory: Transaction[]) => {
    const header: string = 'date || credit || debit || balance'
    const footer: string[] = transactionHistory.map(transaction => {
      return `${transaction.date} ||${this.formatNumbers(transaction.credit)}||${this.formatNumbers(transaction.debit)}||${this.formatNumbers(transaction.balance).trimEnd()}`;
    })
    return `${header}\n${footer.reverse().join('\n')}`;
  }
}