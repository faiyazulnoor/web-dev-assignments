
let tasks=[];

const taskmanager={
       
     addTask(input){
        setTimeout(()=>{tasks.push({todo:input,currentstatus: false})
        console.log(`task ${input} added`)},3000)
     },

    listTask(){tasks.forEach(function(el){
               console.log(el);
               
                 }) 
            },
        
      completeTask(taskdone){
        
       let check=tasks.includes(taskdone)
        if(check===true){
           
            this.currentstatus=true,
        console.log(`this ${taskdone} is done ;)`)
        }
      },

      filterTask(){
          tasks.map(function(element){
          
            if(element.currentstatus==false){
              let undonetask=element
              console.log(`these tasks are incomplete:${undonetask}`) 
            } })
            
      }
         
          
    }

     console.log('you can add upto 2 tasks')
    for (let i=1;i<3;i++){
      let input=prompt(`add your task${i}`)
      taskmanager.addTask(input)

    }
   let id=setInterval(()=>{
    console.log( taskmanager.listTask()) },3000)
    setTimeout(() => {
      clearInterval(id)
    }, 9000);


    //taskmanager.addTask("learn")
    //taskmanager.addTask('write')
   // taskmanager.addTask("jog")
   // console.log(tasks)
   // console.log(tasks.includes("jog"))
   // console.log(tasks.includes('write'))


    //console.log(Object.entries(tasks))
   

//task1-------------------------
//console.log([10,5,1].sort())
//console.log(new Date(2016,5,1))
//console.log(0.1+0.2)



    

    




     

            

   


  


         

    
