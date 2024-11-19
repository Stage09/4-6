// 1-misol

// let arr = [55, 3, 2, 11, 3, 4, 6, 7, 12]
// let space = []
// arr.forEach((num) => {
//     let index = space.findIndex((val) => val > num)
//     if (index === -1) space.push(num)
//     else space.splice(index, 0, num)
// })
// console.log(space)


// 2-misol

// let arr = [1, 6, 9, 5, 8, 10, 15]
// const spaceSum = (arr) => (start) =>(end) =>{
//     let sum = 0;
//     arr.forEach((num, index) =>{
//         if (index >= start && index < end) sum += num
//     })
//     return sum
// }
// let getSum = spaceSum(arr)
// console.log(getSum(2)(5))

// 3-misol

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let space = []
// arr.forEach((num) =>{
//     if (!space.includes(num))space.push(num)
// });
// console.log(space)

// 4-misol   

// let arr4 = [2, 7, 3, 9, 5]

// let max = arr4[0]
// let min = arr4[0]

// arr4.map((num) =>{
//     if (num > max) max = num
//     if (num < min) min = num
// })
// console.log({ max, min })


// 6-misol

// let arr = [1, 2, 3, 4, 5]
// let reversedArr = []
// arr.forEach((value ,index) =>{
//     reversedArr.unshift(arr[index])
// })
// console.log(reversedArr)


// 7-misol

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1]
// let space = 0
// arr.forEach((num) =>{
//     if (num % 2 !== 0){
//         console.log(num)
//         space++
//     }
// })
// console.log("Toq : ", space)


// 8-misol

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1]

// let oddArr = []
// arr.forEach((num , index) =>{
//     if (index % 2 !==0 ) oddArr.push(num)      
// })
// console.log(oddArr)

// 9-misol

// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1]
// let oddArr = []
// arr.forEach((num , index) =>{
//     if (index % 2 !==0 ) oddArr.push(num)  
// })
// console.log(Math.max(...oddArr))

// 10-misol

// let arr = [3, 5, 2, 6, 9, 7, 1];

// let maxIndex = arr.indexOf(Math.max(...arr))
// let minIndex = arr.indexOf(Math.min(...arr))
// let start = Math.min(maxIndex, minI)
// let end = Math.max(maxIndex, minI)
// arr.forEach((_, i) =>{
//     if (index > start && i < end) arr[i] = 0
// })
// console.log(arr)


// 11-misol

// let n = 5
// let oddNumbers = []
// let num = 1

// [...Array(n)].forEach(() => {
//     if (num % 2 !== 0) oddNumbers.push(num)
//     num++
// })
// console.log(oddNumbers)



// 12-misol

// let arr = [22, 3, 5, 6, 3, 2, 3]
// let reversedArr = [];
// arr.forEach((_, index) =>{
//     reversedArr.unshift(arr[index])
// })
// console.log(reversedArr)


// 13-misol

// let arr = [3, 5, 6, 3, 2, 3]
// let newArr = []

// arr.forEach((num) =>{
//     if (!newArr.includes(num)) newArr.push(num);
// })
// newArr.sort((a, b) => a - b)
// console.log(newArr) 


// 14-misol

// let arr = [5, 4, 2, 7, 8, 3, 10, 9, 6, 1]
// let space = []
// arr.forEach((num , i) => {
//     if (i % 2 === 0 ) space.push(num)  
// })
// console.log(Math.min(...space))