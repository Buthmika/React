

function test1(callback){
      setTimeout(()=>{

      },3000)
      console.log("This is function_1")
      callback();
}

function test2(callback){
      setTimeout(()=>{

      },3000)
      console.log("This is function_1")
      callback();
}

function test3(callback){
      setTimeout(()=>{

      },3000)
      console.log("This is function_3")
      callback();
}

function test4(callback){
      setTimeout(()=>{

      },3000)
      console.log("This is function_4")
      callback();
}

function test5(callback){
      setTimeout(()=>{

      },10000)
      console.log("This is function_5")
      callback();
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