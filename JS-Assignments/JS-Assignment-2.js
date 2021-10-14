//Q1.

// var n = prompt("Enter the value:");
// function composedValue(f1, f2, n) {
//   var value = f1(f2(n));
//   document.write(value);
// }
// function square(n) {
//   return n * n;
// }
// function double(n) {
//   return n * 2;
// }
// composedValue(square, double, n);

//Q2

// var n = prompt("Enter the value:");
// function square(n) {
//     return n * n;
//   }
//   function double(n) {
//     return n * 2;
//   }
// function compose(f1, f2) {
//   function newfun(n) {
//     return f1(f2(n));
//   }
//   var value = newfun(n);
//   document.write(value);
// }
// compose(square, double, n);

//Q3

// var a = [1, 3, 5, 4, 2];
// function find(a, test) {
//   for (i = 0; i < a.length; i++) {
//     if (test(a[i]) == true) {
//       document.write(a[i]);
//       break;
//     }
//   }
// }
// function test(n) {
//   if (n % 2 == 0) return true;
//   else return false;
// }
// find(a, test);

//Q4

// var a = [1, 2, 3, 4, 5];
// function square(n) {
//   return n * n;
// }
// function map(a, f1) {
//   var b = [];
//   for (i = 0; i < a.length; i++) b.push(f1(a[i]));
//   document.write(b);
// }
// map(a, square);

//Q5

// i = 0;
// function test(n) {
//   if (n % 2 == 0) return true;
//   else return false;
// }
// function find() {
//   if (test(a[i]) == true) {
//     document.write(a[i]);
//     return;
//   } else {
//     i++;
//     find();
//   }
// }
// find();

//Q6

// i = 0;
// f1 = square;
// function map() {
//   if (i == a.length) return;
//   else {
//     document.write(f1(a[i]));
//     i++;
//     map();
//   }
// }
// console.log(map());
