// const user = {
//     username : "Dinkar ",
//     price: 999,
//     welcomeMessege: function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this);

//     }
// }

// user.welcomeMessege()
// user.username ="sam"
// user.welcomeMessege()
// console.log(this);


// function chai(params) {
//     console.log(this);
    
// }
// chai()

// const chai = function (){
//     let username = "Dinkar"
//     console.log(this.username);
// }
// chai()

const chai =() => {
    let username ="dinkar"
    console.log(this.username);
}

chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// const addtwo =(num1,num2)=> num1+num2
// const addtwo =(num1 ,num2) =>({username: "dinkar"})
// console.log(addtwo(2,3));


// const myArray = []
