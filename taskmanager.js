
let tasks=[];

const taskmanager={
       
     addTask(input){
        setTimeout(()=>{tasks.push({todo:input,currentstatus: false})
        console.log(`task ${input} added`)},3000)
     },

    listTask(){tasks.forEach(function(el){
               console.log(el) ;
               
                 }) 
            },
        
      completeTask(taskdone){
        
       //let check=tasks.includes(taskdone)
       tasks.forEach (function(check){

        if (check.todo===taskdone){
          check.currentstatus=true,
      console.log(` ${taskdone} is done ;)`)
              }
          } )
                    
      },

      filterTask(){


          const undonetask=tasks.filter(tasks=>{
            return tasks.currentstatus==false}).map(t=>t.todo);
                 console.log(`these tasks are incomplete: ${undonetask}`) 

              
            } 
            
      
         
          
    }

    console.log('you can add upto 3 tasks')
    
    for (let i=1;i<=3;i++){
       let input=prompt(`add your task ${i}`)
      taskmanager.addTask(input)
      //taskmanager.listTask();
      

   }
   setTimeout(()=>{
      let userdid=prompt('task done')
   taskmanager.completeTask(userdid)},8000);

      let id=setInterval(()=>{
    console.log(taskmanager.filterTask())},5000)
   setTimeout(() => {
     clearInterval(id)
    }, 10000);

console.log(taskmanager.listTask());//not working???

   


    
   

//task1-------------------------
//console.log([10,5,1].sort())
//console.log(new Date(2016,5,1))
//console.log(0.1+0.2)



    

    




     

            

   


  


         

    
