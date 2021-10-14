//1.Sum of n numbers

function sum() {
  var n = prompt("Enter a number:");
  var sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  document.write(sum);
}
sum();

// Sum of multiples of 3 and 5

function multi() {
  var n = prompt("Enter a number:");
  var sum = 0;
  for (i = 0; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  document.write(sum);
}
multi();

//3. Even and Odd

function oddEven() {
  var n = prompt("Enter a number:");
  if (n % 2 == 0) {
    document.write("Even");
  } else {
    document.write("Odd");
  }
}
oddEven();

//4. Number of flips

function flipz() {
  var flips = prompt("Enter number of Flips:");
  var heads = prompt("Enter number of heads:");
  document.write(heads / flips);
}
flipz();

//5.Next 20 leap years

function leapYear() {
  var currentYear = 2021;
  var l = 0;
  while (l <= 20) {
    if (
      (currentYear % 4 == 0 && currentYear % 100 != 0) ||
      currentYear % 400 == 0
    ) {
      document.write(currentYear + "<br>");
      l++;
    }
    currentYear++;
  }
}
leapYear();

//6.Hello world string rectangular

function frame() {
  var str = prompt("Enter your string:");
  var strSplit = str.split(" ");
  for (i = 0; i < strSplit.length + 4; i++) {
    document.write("*");
  }
  document.write("<br>");
  for (i = 0; i < strSplit.length; i++) {
    document.write("* " + strSplit[i] + " * <br>");
  }
  for (i = 0; i < strSplit.length + 4; i++) {
    document.write("*");
  }
}
frame();

//7.Currency value

function currenci() {
  var n = prompt("Enter your Currency:");
  document.write(
    n * 74.28 + " INR <br>",
    n * 109.14 + " Yen <br>",
    n * 0.84 + " Euro <br>",
    n * 0.72 + " Pound <br>"
  );
}
currenci();

//8.Concatenate two arrays

function concatz() {
  var arr1 = ["a", "b", "c"];
  var arr2 = [1, 2, 3];
  document.write(arr1.concat(arr2));
}
concatz();

//9. Alternate Concat

function alter() {
  var str1 = ["a", "b", "c"];
  var str2 = [1, 2, 3];
  var newStr = [];
  var j = 0,
    k = 0;
  for (i = 0; i < str1.length + str2.length; i++) {
    if (i % 2 == 0) {
      newStr[i] = str1[j];
      j++;
    } else {
      newStr[i] = str2[k];
      k++;
    }
  }
  document.write(newStr);
}
alter();

//10.Fibonaci series

function fibo() {
  var a = 1,
    b = 1,
    c;
  for (i = 0; i < 100; i++) {
    document.write(a + "<br>");
    c = a + b;
    a = b;
    b = c;
  }
}
fibo();

//11. Reverse an Array

function rev() {
  var arr = [5, 15, 16, 20, 23, 26];
  var temp,
    n = arr.length;
  for (i = 0; i < n / 2; i++) {
    temp = arr[n - i];
    arr[n - i] = arr[i];
    arr[i] = temp;
  }
  document.write(arr);
}
rev();

//13 Sum of numbers using loop

function loops() {
  var a = [9, 10, 11, 15, 20, 25];
  var s1 = 0,
    s2 = 0,
    s3 = 0,
    n = a.length;
  for (i = 0; i < n; i++) {
    s1 += a[i];
  }
  i = 0;
  while (i < n) {
    s2 += a[i];
    i++;
  }
  i = 0;
  do {
    s3 += a[i];
    i++;
  } while (i < n);
  document.write(
    "For loop:" +
      s1 +
      "<br>" +
      "while loop:" +
      s2 +
      "<br>" +
      "do while loop:" +
      s3 +
      "<br>"
  );
}
loops();

//14. Random 100 numbers array

function randomArray() {
  var a = [5, 15, 17, 65, 100, 46, 1, 24, -95, 201, -5];
  var max = Math.max(...a);
  var min = Math.min(...a);
  var ev,
    od,
    avg,
    sum = 0;
  for (i = 0; i < a.length; i++) {
    sum += a[i];
    if (a[i] % 2 == 0) ev++;
    else od++;
  }

  document.write(
    "maximum=" +
      max +
      " <br>minimum=" +
      min +
      "<br>sum=" +
      sum +
      "<br>average=" +
      sum / a.length +
      "<br>"
  );
  if (ev > od) document.write("Even");
  else document.write("Odd");
}
randomArray();

// 15. Sorting

function sortng() {
  var a = [
    32, 50, 62, 57, 96, 47, 38, 54, 84, 37, 46, 35, 22, 41, 8, 18, 94, 54, 70,
    10,
  ];
  var temp,
    n = a.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        temp = a[j + 1];
        a[j + 1] = a[j];
        a[j] = temp;
      }
    }
  }
  for (i = 0; i < n; i++) {
    document.write(a[i] + " ");
  }
}
sortng();

//Q19 simple calculator

function cal() {
  var op = prompt("ENter the operator");
  var num1 = prompt("ENter the num1");
  var num2 = prompt("ENter the num2");
  if (op == "+") {
    result = num1 + num2;
  } else if (op == "-") {
    result = num1 - num2;
  } else if (op == "*") {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }
  document.write(result);
}
cal();
