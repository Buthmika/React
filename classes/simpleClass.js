class rectangle{
      constructor(width,height,color){
            this.width=width;
            this.height=height;
            this.color=color;
            console.log("A new rectangle created");
      }
      getArea(){
           return this.width*this.height; 
      }
      aboutMe(){
           return `I am rectangle and my width is ${this.width}.
           My height is ${this.height} and color is ${this.color}` 
      }
}
const newRectangle=new rectangle(10,8,"red");
console.log(newRectangle.getArea())
console.log(newRectangle.aboutMe());