class Account {
  balance: number;
  transactionHistory: number[];

  constructor(balance = 0) {
    this.balance = balance;
    this.transactionHistory = [];
  }
}

module.exports = Account;
