function takeShower(){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  console.log("You take shower");
                  resolve("You take shower");
            },1000);
      })
}
function doHomeWork(){
      return new Promise((resolve, reject) => {
           setTimeout(()=>{
                  console.log("You do your homework");
                  resolve("You did it completed your homework");
           },3000) ;
      })
}
function play(){
      return new Promise((resolve, reject) => {
            setTimeout(()=>{
                  console.log("What is play");
                  resolve("You played what you like");
            })
      },3000)
}
takeShower()
.then((result)=>{
      console.log(result);
      return doHomeWork()
})
.then((result=>{
      console.log(result);
      return play()
}))
.then((result)=>{
      console.log(result)
      console.log("All Done");
})

