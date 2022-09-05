const prompt = require('prompt-sync')()

 let somatoria = 0
 for(i=1; i <=500; i++)
 {
     if(i%3==0 && i%2==1){
         somatoria += i
         console.log(i)
     }
 }
 console.log(somatoria)