
function BankAccount(ac_no, name, type, bal) {
          this.accountNumber = ac_no;
          this.name = name
          this.type = type
          this.balance = bal
          this.active = true
}


BankAccount.prototype.deposit = function (amount) {
          this.balance += amount;
          console.log(`After Deposit New balance: ${this.balance}`);
};

BankAccount.prototype.withdraw = function (withdraw) {

          if (this.balance >= 1000) {

                    this.balance -= withdraw
                    console.log(`After Withdraw New balance: ${this.balance}`)
          }
          else {
                    console.log(`please maintain sufficient balence in your: ${this.balance}`);
          }
}

BankAccount.prototype.checkBalance = function () {
          console.log(`Available Balence is : ${this.balance}`)
}

BankAccount.prototype.isActive = function () {
          if (this.balance >= 1000) {

                    console.log(`account is active: ${this.active}`)
          }
          else {
                    this.active = false
                    console.log(`account is active: ${this.active}`)
          }
}


const person1 = new BankAccount(88996621, 'Rushi', 'Saving', 2000);
const person2 = new BankAccount(77910620, 'Elon', 'Saving', 5000);
const person3 = new BankAccount(79360610, 'Mark Zuckerberg', 'Saving', 4000);

person1.deposit(1000);
person1.withdraw(3000);
person1.checkBalance()
person1.isActive()

person2.deposit(5000);
person2.withdraw(5000);
person2.checkBalance()
person2.isActive()

person3.deposit(5000);
person3.withdraw(5000);
person3.checkBalance()
person3.isActive()

console.log(person1)
console.log(person2)
console.log(person3)

let add = 0

function getTotalBalance() {
          if (person1.active == true) {
                    add += person1.balance
                    console.log(add)
          }
          if (person2.active == true) {
                    add += person2.balance

          }
          if (person3.active == true) {
                    add += person3.balance

          }
          console.log("total balence available in active account :", add)
}
getTotalBalance()
