const arr1=[5,5,5,5,5,100];
function sum(...args){
      let sum =0;
      for(const arg of args){
            sum+=arg;
      }
      console.log(sum)
}
sum(...arr1);

// array destructing

const arr2=[1,2,3,4,5];
/*let a=arr2[0];
let b=arr2[1];
console.log(a,b);*/
const[first,second,...rest_arguments]=arr2;
console.log(first);
console.log(second);
console.log(rest_arguments);
const obj1={
      one:10,
      two:20,
      three:30,
      four:40,
      five:50
};
const{one,two,...rest_obj1}=obj1;
console.log(one);
console.log(two);
console.log(rest_obj1);

