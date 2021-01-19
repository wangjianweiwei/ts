var message = "Hello World";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.get_name = function () {
        console.log("name call");
    };
    return Site;
}());
var obj = new Site();
obj.get_name();
// 基础数据类型
// 数字类型
// 任意类型
var a;
// 数字
var binary = 10;
var octal = 484;
var dec = 6;
var hex = 0xf00d;
// 字符串
var name1 = "张三";
var age = 18;
var words = name1 + "\u4ECA\u5E74" + age;
// 布尔
var flag = false;
// 数组
var arr1 = [1, 2, 3, 4, 5];
// 或者使用数组泛型
var arr2 = [1, 2, 3, 4];
// 元祖
// 元祖类型用来表示已知元素数量和类型的数组, 各元素的类型不必相同, 对应位置的类型需要相同
var x;
x = ["zhangsan", 1];
// x = [1, "zhangsan"] 这个会报错
console.log(x[0]);
// 枚举
// 枚举类型用于定义数值集合
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c); // 输出2
// void
// 用于表示返回值的类型, 表示该方法没有返回值
function hello() {
    alert("Hello World");
}
// null
// 表示对象缺失
var d = null;
// undefined
// 用于初始化变量为一个未定义的值
// never
// never是其他类型(包括null和undefined)的子类型, 代表从不会出现的值
var y = 4;
y.ifItExists();
y.toFixed();
// 定义存储各种类型的数组
var anyArray = [1, "12", true, { name: "Jake" }];
var str = "1";
var str2 = str;
// 变量作用域
/*
全局作用域
类作用域
局部作用域
 */
var globalNum = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.numVal = 13;
    }
    Numbers.prototype.storeNum = function () {
        var localNum = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("全局变量: ", globalNum);
console.log("静态变量: ", Numbers.sval);
var obj1 = new Numbers();
console.log('实例变量: ', obj1.numVal);
