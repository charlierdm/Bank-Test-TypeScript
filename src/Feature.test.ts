import { Account } from './Account'

describe("Feature Test", () => {
  it('Prints out the users bank statement in the format specified in the acceptance criteria', () => {
    let account = new Account();
    account.deposit(1000, new Date("01 10 2023"))
    account.deposit(2000, new Date("01 13 2023"))
    account.withdraw(500, new Date("01 14 2023"))
    expect(account.printStatement()).toEqual("date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00")
  })
});
