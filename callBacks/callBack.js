function openFile(callback){
      setTimeout(()=>{
            console.log('File Opened');
            callback();
      },3000);
      
}
function addSomething(){
      console.log('Something Added');
}
function removeSomething(){
      console.log('Something Removed');
}
openFile(removeSomething);
openFile(addSomething);

