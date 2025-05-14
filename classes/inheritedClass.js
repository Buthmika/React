class person{
      constructor(name,age){
            this.name=name;
            this.age=age;
            console.log("A new person created");
      }
}
class programmar extends person{
      constructor(name,age,language){
            super(name,age)
            this.name=name;
            this.age=age;
            this.language=language
      }
      code(){
            return`${this.name} is programmar and knows
            ${this.language}.`
      }
}     
const john=new person("Jhon",20);
const buthmika=new programmar("Buthmika",23,"JavaScript");
console.log(buthmika.code());