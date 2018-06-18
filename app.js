const harsha = {
    name: 'Harsha',
    age: 20,
} 
console.log(harsha);
console.log(harsha.age);





Person Constructor
function Person(){
    this.name = 'Harsha';
} 
const harsha = new Person();
//console.log(harsha);
//  




function Person(name,age){
    this.name = name;
    this.age = age;
    console.log(this);
}
const harsha = new Person ('Harsha',20);
const harshu = new Person ('Harshu',20);
console.log(harshu);




function Person(name,dob){
this.name = name;
this.birthday = new Date(dob);
this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
}    
}


const harshu = new Person('Harshu','09-12-1997');
console.log(harshu.calculateAge());


//string
const name1 = 'harsha';
const name2 = new String('Harsha');

//name2.foo = 'bar';
console.log(typeof name2);
if(name1 === 'harsha'){
    console.log('yes');
    
}else{
    console.log('no');
}
//number
const num1 = 5;
const num2 = new Number(5);

//boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(typeof bool2);

//function
const getSum1 = function(x,y){
    return x+y;
}
const getSum2 = new Function('x','y','return 1+1');

//Object 
const harsha = {
    name:"harsha"};
const harsha1 = 
    new Object({name: "harsha1"});
console.log(harsha1);

//array 
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4);

//Regular Expressions 
const re1 = /\w+/;
const re2 = new RegExp('\w+');
console.log(re2);

    





