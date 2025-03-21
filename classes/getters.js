class square{
      constructor(width){
            this.width=width;
            this.height=width;
      }
      getArea(){
            return this.width*this.height;
      }
      get area(){
            return this.width*this.height;

      }
      set area(newArea){
           this.width=Math.sqrt(newArea);
           this.height=Math.sqrt(newArea); 
      }
}
const newSquare=new square(10);
console.log(newSquare.getArea());
console.log(newSquare.area)
newSquare.area=625;
console.log(newSquare.area)