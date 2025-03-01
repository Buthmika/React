function greet(name){
      return 'Hello'+' ' +name+' ' +'!'
}
console.log(greet("Buthmika"))

//arrowFunction
const greet2=(name)=>{
      return 'Hello'+' '+name+' '+'!'
}
console.log(greet2("Menushan"));

/////////////////////////////////////////
function add(a,b){
      return a+b;
}
console.log(add(10,5));

//////////////////////////////////////////
const add2=(a,b)=>a+b;
console.log(add2(10,20));

/////////////////////////////////////////////
function add3(a,b,c){
      return arguments;
}
console.log(add3(10,20,30));

const add4=(a,b,c)=>{
      return arguments;
}
console.log(add4(10,20,30));