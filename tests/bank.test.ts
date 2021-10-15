import { Account } from "../src/bank";

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

});
