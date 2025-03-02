class animal{
      constructor(){
            console.log("An animal is creted");

      }
      makeSound(){
            console.log("Animal generally make sounds")
      }
}
class dog extends animal{
      constructor(){
            super(); 
            console.log("Dog is created");
      }
      makeSound(){
            console.log("Dogs normally barking")
      }
}
class cat extends animal{
      constructor(){
            super();
            console.log("Cat is created");
      }
      makeSound(){
            console.log("Cats normally meaww");
      }
}
 const someAnimal=new animal;
 const dog1=new dog;
 const cat1=new cat;
 someAnimal.makeSound();
 dog1.makeSound();
 cat1.makeSound();
