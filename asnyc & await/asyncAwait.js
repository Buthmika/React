function takeShower(){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  const shower=true;
                  if(shower){
                        console.log("You take shower");
                        resolve("You take shower");
                  }
                  else{
                        reject("You didnt shower")
                  }
                  
            },1000);
      })
}
function doHomeWork(){
      return new Promise((resolve, reject) => {
           setTimeout(()=>{
                  const work=true;
                  if(work){
                        console.log("You do your homework");
                        resolve("You did it completed your homework");
                  }
                  else{
                        reject("Didnt homework")
                  }
                  
           },3000) ;
      })
}
function play(){
      return new Promise((resolve, reject) => {
            setTimeout(()=>{
                  const sport=true;
                  if(sport){
                        console.log("What is play");
                        resolve("You played what you like");
                  }
                  else{
                        reject("Didint Play");
                  }
                  
            })
      },3000)
}