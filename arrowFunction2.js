this.name='Amoda';
const obj1={
      name:'Jhon',
      normalFunction:function(){
            console.log(this.name);
      },
      arrowFunction:()=>{
            console.log(this.name);
      }
}
obj1.arrowFunction();
obj1.normalFunction();