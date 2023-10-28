// for (let index = 1; index <= 10; index++) {
//     for (let j=1; j<=10; j++){
//     // const element = index;
//     console.log(index*j);
//     }
// }

// let i =0
// while (i<=10){
//     console.log(`${i}`);
//     i++
// }

// const arr =[1,2,3,4]

// for (const num of arr) {
//     console.log(num);
    
// }
// const greeting = "hello"
// for (const greet of greeting) {
//     console.log(`each grerting ${greet}`);
    
// }

// Map

// const map = new Map()
// map.set('In',"India")
// map.set('cn',"china")
// map.set('rf',"russia")

// console.log(map);


// const myobject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',

// }
// for (const key in myobject) {
//    console.log(`${key} shortcut is for ${myobject[key]}`);
// }

const coding =["js", "ruby","java","python","cpp"]
// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item)=> {
//     console.log(item);
// })

// coding.forEach ((item,index,arr)=>{
//     console.log(item , index, arr);
// })

// const mycoding =[
//     {
//         languagename :"javascript",
//         languagefname:"js"
//     }
// ]
// mycoding.forEach((item)=>{
//     console.log(item.languagename);
// }
// )

const arr =[1,2,3,4]

// const newnums =arr.filter( (num) => {
//     return num >2
// })
// console.log(newnums);


const newnums = []
arr.forEach((num)=>{
    if(num>2){
        newnums.push(num)
    } 

})

console.log(newnums);








