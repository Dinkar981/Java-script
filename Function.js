// console.log("d");
// console.log("i");
// console.log("n");
// console.log("k");
// console.log("a");
// console.log("r");

// function Myname(){
// console.log("d");
// console.log("i");
// console.log("n");
// console.log("k");
// console.log("a");
// console.log("r");
// }
// Myname()

// function addtwonumber(num1 , num2){
//     console.log(num1+num2);
// }
// addtwonumber(2,7)


// function addtwonumber(num1 , num2){
//     return num1+num2
// }
// result =addtwonumber(3,4)
// console.log(result);

function loginusermessege(username){
    if (username=== undefined){
        console.log("please enter username");
        return 
    }
    return `${username} just logged in`

}

// console.log(loginusermessege("djwh"));
console.log(loginusermessege());


function calculatecartprice(  ...num1){
    return num1
    
}

console.log(calculatecartprice(200,400,500,2000));


const user ={
    username : "dinkar",
    price : 233

}
function handleobject(anyobject){
    console.log(`usernsme is ${anyobject.username}and price is ${anyobject.price}`);
}
//  you can pass object directly to handle object
handleobject({
    username : "dk",
    price : 888
}
)

const muNewArray = [200,400,600]

function returnsecondValue(getArray){
    return getArray[1]
}
console.log(returnsecondValue(muNewArray));

