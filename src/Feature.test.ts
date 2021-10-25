import { Account } from './Account'

describe("Account", () => {
  it("initializes with a balance of zero", () => {
    let account = new Account();
    expect(account.balance).toEqual(0);
  });

  it("can make deposit transactions that update the balance", () => {
    let account = new Account();
    account.deposit(25);
    expect(account.balance).toEqual(25);
  });

  it("can withdraw money and deduct it from the total balance", () => {
    let account = new Account();
    account.deposit(25);
    account.withdraw(10);
    expect(account.balance).toEqual(15);
  });

  it("adds a Transaction object with transaction details to the Transaction history upon deposit and withdraw", () => {
    let account = new Account();
    account.deposit(30);
    account.withdraw(20);
    expect(account.transactionHistory.length).toEqual(2)
  });

  it("contains the credit, debit and balance information for each transaction", () => {
    let account = new Account();
    account.deposit(30);
    account.withdraw(20);
    expect(account.transactionHistory[0].credit).toEqual(30)
    expect(account.transactionHistory[1].debit).toEqual(20)
    expect(account.transactionHistory[1].balance).toEqual(10)
  });

  it('Prints out the users bank statement in the format specified in the acceptance criteria', () => {
    let account = new Account();
    account.deposit(1000, new Date("01 10 2023"))
    account.deposit(2000, new Date("01 13 2023"))
    account.withdraw(500, new Date("01 14 2023"))
    expect(account.printStatement()).toEqual("date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00")
  })
});
