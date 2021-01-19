var num1 = 10;
var num2 = 2;
console.log(num1 % num2);
num1++;
console.log(num1);
num2--;
console.log(num2);
// 关系运算符
var num3 = 10;
var num4 = 9;
var res = num3 > num4;
console.log(res);
console.log(num3 == num4);
// 逻辑运算符
var avg = 20;
var percentage = 90;
var res1 = (avg > 50) && (percentage > 80);
console.log(res1); // false
var res2 = (avg > 50) || (percentage > 80);
console.log(res2); // true
var res3 = !((avg > 50) && (percentage > 80));
console.log(res3); // true
// 位运算符
// 赋值运算符
// 三元运算符
var num5 = -2;
var res4 = num5 > 0 ? "大于0" : "小于0, 或者等于0";
console.log(res4);
// 类型运算符
var num6 = 12;
console.log(typeof num6);
// for循环
var arr1 = [1, 2, 3, 4, 5, 6];
for (var n in arr1) {
    console.log("-", arr1[n]);
}
arr1.forEach(function (val, idx, array) {
    console.log(val, idx, arr1);
});
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var i = arr1_1[_i];
    console.log(i, "=");
}
