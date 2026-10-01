
//learning stage 
new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log("this is a promise");
        resolve()
    }, 2000);
}).then(()=> {
    console.log("promise resolved");
})



//better way to initiate promises
new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("data resolved")
    },2000)
}).then((result)=> {
    console.log(result);
    
});