var Account = /** @class */ (function () {
    function Account(balance) {
        if (balance === void 0) { balance = 0; }
        this.balance = balance;
        this.transactionHistory = [];
    }
    return Account;
}());
module.exports = Account;
