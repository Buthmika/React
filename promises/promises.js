

function test1(callback){
      setTimeout(()=>{
            console.log("This is function_1")
            callback();

      },3000)
      
}

function test2(callback){
      setTimeout(()=>{
            console.log("This is function_1")
            callback();
      },3000)
      
}

function test3(callback){
      setTimeout(()=>{
            console.log("This is function_3")
            callback();
      },3000)
      
}

function test4(callback){
      setTimeout(()=>{
            console.log("This is function_4")
            callback();
      },3000)
      
}

function test5(callback){
      setTimeout(()=>{
            console.log("This is function_5")
            callback();
      },10000)
      
}
test1(()=>{
      test2(()=>{
            test3(()=>{
                  test4(()=>{
                        test5(()=>{
                              console.log("All Done")
                        })
                  })
            })
      })
})