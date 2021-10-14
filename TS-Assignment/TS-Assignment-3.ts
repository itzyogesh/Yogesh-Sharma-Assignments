//Q1

// var x: number, y: number;
// var pro1 = new Promise(function (res, rej) {
//   if (1 > 0) res((x = 15));
//   else rej(4);
// });
// var pro2 = new Promise(function (res, rej) {
//   if (1 > 0) res((y = 10));
//   else rej(8);
// });
// Promise.all([pro1, pro2]).then((values) => {
//   console.log(x + y);
// });

//Q2

// class Account {
//   constructor(id, name, balance) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }
// }
// class SavingsAccount extends Account {
//   constructor(id, name, balance, interest) {
//     super(id, name, balance);
//     this.interest = interest;
//   }
//   totalBalance = () => {
//     this.balance += this.interest;
//     console.log(this.balance);
//   };
// }

// class CurrentAccount extends Account {
//   constructor(id, name, balance, cashCredit) {
//     super(id, name, balance);
//     this.cashCredit = cashCredit;
//   }
//   totalBalance = () => {
//     this.balance += this.cashCredit;
//     console.log(this.balance);
//   };
// }

// let S1 = new SavingsAccount(1111, "Yogesh", 70000, 6000);
// let S2 = new CurrentAccount(2222, "Sahil", 80000, 4800);
// S1.totalBalance();
// S2.totalBalance();

//Q3

// interface Printable {
//   fname?: string;
//   id?: number;
//   area?: Number;
// }
// let circle: Printable = {
//   area: 720,
// };
// let employee: Printable = {
//   fname: "Yogesh",
//   id: 101,
// };
// function printAll(circle, employee) {
//   console.log(circle);
//   console.log(employee);
// }
// printAll(circle, employee);
