import Account from "../public/account"
import Transaction from "../public/transaction"

let account

beforeEach(() => {
  account = new Account();
})


it('can deposit money into the account', () => {
  account.deposit(25, Transaction);
  expect(account.balance).toEqual(25)
})



