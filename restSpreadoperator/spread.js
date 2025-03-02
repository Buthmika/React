const arr1=[1,2,3];
const arr2=["x","y","z"];
console.log(arr1,arr2);
function sum(a,b,c){
      console.log(a+b+c);
}
sum(arr1[0],arr1[1],arr1[2]);
/*spread*/
sum(...arr1);

// combine array

const num1=[3,4,5,6];
const num2=[10,11,12];
const num3=[...num1,...num2];
console.log(num3);

// combine object
 const obj1={first:10,second:20};
 const obj2={third:30,fourth:40};
 const obj3={...obj1,...obj2}
 console.log(obj3)

//  arguments pass
function sum2(a,b,c){
      console.log(a+b+c)
}
const arr=[1,2,4];
const obj={
      one:10,
      two:20

};
sum2(...arr);
sum2(...Object.values(obj));

 
