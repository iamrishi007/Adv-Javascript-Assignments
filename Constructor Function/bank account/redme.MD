// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true; // Assume all accounts are active by default
}

// Methods added to the BankAccount prototype
BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
};

BankAccount.prototype.withdraw = function(amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
  } else {
    console.log(`Insufficient funds in ${this.name}'s account.`);
  }
};

BankAccount.prototype.checkBalance = function() {
  console.log(`${this.name}'s account balance: ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
  return this.active;
};

// Creating BankAccount objects
const account1 = new BankAccount(123456, 'Alice', 'Savings', 1000);
const account2 = new BankAccount(789012, 'Bob', 'Checking', 500);

// Testing operations on accounts
account1.deposit(500);
account1.checkBalance();
account1.withdraw(200);
account1.checkBalance();
``
account2.deposit(1000);
account2.checkBalance();
account2.withdraw(700);
account2.checkBalance();

// Function to calculate total balance of all active accounts
function getTotalBalance(accounts) {
  return accounts.reduce((total, account) => {
    if (account.isActive()) {
      return total + account.balance;
    }
    return total;
  }, 0);
}

// Testing getTotalBalance function
const allAccounts = [account1, account2];
const totalBalance = getTotalBalance(allAccounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);
