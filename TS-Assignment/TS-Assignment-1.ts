//Q1

// function prob() {
//   const value = 5;
//   value = 10; // gives error
// }
// prob();

//Q2

// function prob2() {
//   if (6 > 2) {
//     var b = 50;
//   }
//   console.log(b); //gives error
// }
// prob2();

//Q3

// let Order = {
//   id: 100,
//   title: "Chole bhature",
//   price: 250,
//   printOrder() {
//     console.log(this.id);
//   },
//   getPrice() {
//     console.log(this.price);
//   },
// };
// const copyobj = Object.assign({}, Order);
// console.log(copyobj);

//Q4

// let arr = ["hello", "how", "was", "your", "sunday", "had fun?"];
// let newArr = arr.map((item) => {
//   return {
//     name: item,
//     length: item.length,
//   };
// });
// console.log(newArr);

//Q5 A

// let add = function (value = 10) {
//   return value;
// };
// console.log(add());

//Q5 B

// let userFriends = function (username, ...userfriends) {
//   console.log("username : " + username);
//   for (let i in userfriends) console.log(userfriends[i]);
// };
// let username = "Yogesh";
// let userfriends = ["sahil", "komal", "summi"];
// userFriends(username, userfriends);

//Q5 C

// let printCapitalNames = function (...names) {
//   for (let i in names) console.log(names[i].toUpperCase());
// };
// let nameArray = ["Yogesh", "sahil", "komal", "summi", "Naidu"];
// printCapitalNames(...nameArray);

//Q6

// let name = "Yogesh Sharma";
// let laptopmodel = "Elitebook RRNI425";
// let deskno = 254858785;

// console.log(
//   `Dear Sysnet, I am facing an issue with my pc I kindly request you to look into it. My details are as follows: Name : ${name}, LaptopModel: ${laptopmodel}, Deskno: ${deskno} `
// );

//Q7A

// let food = ["Pav Bhaji", "Dosa", "Chilly Paneer", "Pasta"];
// let [item1, item2, item3, item4] = food;
// console.log(item3);

//Q7B

// let org ={name:'Marvel',address:{city:'Universe',pincode:122001}};
// let {name,address.city,address.pincode}= org;
// console.log(address.pincode);

//Q8

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

// let S1 = new SavingsAccount(1111, "Yogesh", 50000, 8000);
// let S2 = new CurrentAccount(2222, "Sahil", 90000, 7800);
// S1.totalBalance();
// S2.totalBalance();
