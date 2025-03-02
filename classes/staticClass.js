class square{
      constructor(width){
            this.width=width;
            this.height=width;
      }
      getArea(){
            return this.width*this.height;
      }
      static calArea(a,b){
            return a*b;
      }
}
const newSquare =new square(10);
console.log(newSquare.getArea());
console.log(square.calArea(5,6));