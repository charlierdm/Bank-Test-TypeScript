import { StatementPrinter } from "./StatementPrinter";
import { Transaction } from "./Transaction"

jest.mock('./Transaction')

const date = new Date("01 14 2023")
const amount = 50
let transaction = new Transaction(date, amount, 0, amount)

describe('StatementPrinter', () => {
  it('formats the users transactions and prints them out as per the specs', () => {
    let statement = new StatementPrinter()
    statement.formatTransactions([transaction])
    expect(Transaction).toHaveBeenCalledTimes(1)
  })
})