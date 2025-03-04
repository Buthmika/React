function takeShower(){
      return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  console.log("You take shower");
                  resolve("You take shower");
            },3000);
      })
}
function doHomeWork(){
      return new Promise((resolve, reject) => {
           setTimeout(()=>{
                  console.log("You do your homework");
                  resolve("You did it completed your homework");
           },1000) ;
      })
}
function play(){

}