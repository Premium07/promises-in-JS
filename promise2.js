// let prm = new Promise(function(res, rej){

// })

let prm = new Promise((resolve, reject) => {
    if(false){
        return resolve()
    }else{
        return reject()
    }
})

prm.then(function(){
    console.log("this is resolve");
}).catch(function(){
    console.log("this is reject");
})
