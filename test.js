var VendingMachine = function () {
    this.balance = 0;
    const nickel = 5;
    const dime = 10;
    const quarter = 25;
    const dollar = 100;
};

VendingMachine.prototype.getBalance = function () {
    return this.balance;
};

VendingMachine.prototype.insertCoin = function(coin) {
  this.balance += coin;
};

VendingMachine.prototype.returnCoins = function() {
  const money = this.balance;
  this.balance = 0;
  return money;
};

let assert = require('assert');

describe('Vending Machine', function () {

    describe('Balance of money inserted', function () {
        it('Is zero when initially powered up', function () {
            machine = new VendingMachine();
            assert.strictEqual(0, machine.getBalance())
        });
        it('Is adds money when a coin is inserted', function() {
            const quarter = 25;
            machine = new VendingMachine();
            machine.insertCoin(quarter);
            assert.strictEqual(25, machine.getBalance());
        });
        it('Returns all money when user presses coint return', function() {
          const nickel = 5;
          const dime = 10;
          machine = new VendingMachine();
          machine.insertCoin(nickel);
          machine.insertCoin(dime);
          assert.strictEqual(15, machine.returnCoins());
          assert.strictEqual(0, machine.getBalance());
        });
    });


});
