// 函数
function test(): void {
    console.log("test")
}

test()

// 函数返回值

function test1(): string {
    return "test"
}

console.log(test1())

/*
return_type 是返回值的类型。
return 关键词后跟着要返回的结果。
一个函数只能有一个 return 语句。
返回值的类型需要与函数定义的返回类型(return_type)一致。
 */

// 带参数的函数
function test2(x: number, y: number): number {
    return x + y
}

console.log(test2(10, 20))


// 可选参数
// 可选参数必须跟在必需参数后面
function test3(first: string, last?: string) {
    console.log(first, last)
    // 123 undefined
}

test3("123")

// 默认参数
function test4(price: number, reta: number = 0.50) {
    let discount = price * reta
    console.log(discount)
}

test4(100, 0.7)
test4(100)

// 剩余参数
function test5(first: string, ...rest: string[]): string {
    return first + "|" + rest.join(" ")
}

console.log(test5("1", "2", "3", "4"))
