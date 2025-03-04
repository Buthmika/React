function openFile(){
      setTimeout(()=>{
            console.log('File Opened');
      },3000);
      
}
function addSomething(){
      console.log('Something Added');
}
function removeSomething(){
      console.log('Something Removed');
}
openFile();
addSomething();
openFile();
removeSomething();
