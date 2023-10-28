

// Object.create
const JsUser ={
    name:"Dinkar",
    age:18,
    location:"delhi",
    email:"heiw@iifji"
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// Object.freeze(JsUser)
// JsUser.email=" juhfuw@snj"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
}
JsUser.greeting2=function(){
    console.log(`hitesh,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());