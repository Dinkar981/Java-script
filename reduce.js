const myNums = [1,2,3]

// const myTotal =myNums.reduce(function (acc , currentval) {
//     console.log(`acc: ${acc} and current value: ${currentval}`);
//     return acc+ currentval
// } , 3)

const myTotal = myNums.reduce((acc,cur) => acc+cur, 3)
console.log((myTotal));


