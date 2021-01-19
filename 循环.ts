// for循环

let arr1: number[] = [1, 2, 3, 4, 5, 6]

for (let n in arr1) {
    console.log("-", arr1[n])
}

arr1.forEach((val, idx, array) => {
    console.log(val, idx, arr1)
})

for (let i of arr1) {
    console.log(i, "=")
}
