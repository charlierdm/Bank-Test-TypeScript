import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { StatementPrinter } from './StatementPrinter'

jest.mock('./Transaction')
jest.mock('./StatementPrinter')

describe('Account', () => {
  it ('can make deposit transactions', () => {
    let account = new Account()
    const date = new Date("01 14 2023")
    const amount = 50
    account.deposit(amount, date)
    expect(Transaction).toHaveBeenCalledWith(date, amount, 0, amount)
  })

  it('can make withdraw transactions', () => {
    let account = new Account()
    const date = new Date("01 14 2023")
    const deposit = 75
    const withdraw = 50
    account.deposit(deposit, date)
    account.withdraw(withdraw, date)
    expect(Transaction).toHaveBeenCalledWith(date, 0, withdraw, deposit - withdraw)
  } )

  it('does not allow the user to withdraw more than is available in the balance', () => {
    let account = new Account()
    const amount = 20
    expect(() => {
      account.withdraw(amount)
    }).toThrowError('Not enough funds in your account')
  })

  it('does not allow more than 2 decimal places in the user inputted amount', () => {
    let account = new Account()
    const amount = 20.001
    expect(() => {
      account.deposit(amount)
    }).toThrowError('Only 2 decimal places permitted e.g £0.99')
  })
})