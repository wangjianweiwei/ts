var message: string = "Hello World"
console.log(message)

class Site {
    get_name(): void {
        console.log("name call")
    }
}

var obj = new Site()
obj.get_name()

// 基础数据类型
// 数字类型

// 任意类型
let a: any

// 数字
let binary: number = 0b1010
let octal: number = 0o744
let dec: number = 6
let hex: number = 0xf00d

// 字符串
let name1: string = "张三"
let age: number = 18
let words: string = `${name1}今年${age}`

// 布尔
let flag: boolean = false

// 数组
let arr1: number[] = [1, 2, 3, 4, 5]
// 或者使用数组泛型
let arr2: Array<number> = [1, 2, 3, 4]

// 元祖
// 元祖类型用来表示已知元素数量和类型的数组, 各元素的类型不必相同, 对应位置的类型需要相同
let x: [string, number]
x = ["zhangsan", 1]
// x = [1, "zhangsan"] 这个会报错
console.log(x[0])


// 枚举
// 枚举类型用于定义数值集合
enum Color {Red, Green, Blue}

let c: Color = Color.Blue
console.log(c) // 输出2

// void
// 用于表示返回值的类型, 表示该方法没有返回值
function hello(): void {
    alert("Hello World")
}

// null
// 表示对象缺失
let d = null

// undefined
// 用于初始化变量为一个未定义的值

// never
// never是其他类型(包括null和undefined)的子类型, 代表从不会出现的值


let y: any = 4
y.ifItExists()
y.toFixed()

// 定义存储各种类型的数组
let anyArray: any[] = [1, "12", true, {name: "Jake"}]


let str = "1"

let str2: number = <number><any>str

// 变量作用域
/*
全局作用域
类作用域
局部作用域
 */

let globalNum = 12

class Numbers {
    numVal = 13
    static sval = 10

    storeNum(): void {
        let localNum = 14
    }
}

console.log("全局变量: ", globalNum)
console.log("静态变量: ", Numbers.sval)
let obj1 = new Numbers()
console.log('实例变量: ', obj1.numVal)
