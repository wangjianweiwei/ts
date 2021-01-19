let num1: number = 10
let num2: number = 2

console.log(num1 % num2)

num1++
console.log(num1)

num2--
console.log(num2)

// 关系运算符

let num3 = 10
let num4 = 9

let res = num3 > num4

console.log(res)

console.log(num3 == num4)


// 逻辑运算符
let avg: number = 20
let percentage: number = 90

let res1: boolean = (avg > 50) && (percentage > 80)
console.log(res1) // false

let res2: boolean = (avg > 50) || (percentage > 80)
console.log(res2) // true

let res3: boolean = !((avg > 50) && (percentage > 80))
console.log(res3) // true


// 位运算符

// 赋值运算符

// 三元运算符

let num5: number = -2

let res4: string = num5 > 0 ? "大于0" : "小于0, 或者等于0"

console.log(res4)


// 类型运算符
let num6: number = 12
console.log(typeof num6)

