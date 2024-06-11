
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
        
       //let check=tasks.includes(taskdone)
       for (let check =0;check<tasks.length;check++)
        {
          
          if (tasks[check]===taskdone){
            tasks[check].currentstatus=true,
        console.log(`this ${taskdone} is done ;)`)
           } 
        }

         
      },

      filterTask(){
         setInterval(()=>{

          const undonetask=tasks.filter(tasks=>{
            return tasks.currentstatus==false}).map(t=>t.todo);
                 console.log(`these tasks are incomplete:${undonetask}`) 

         },8000)   
      
            } 
            
      
         
          
    }

    console.log('you can add upto 2 tasks')
    for (let i=1;i<3;i++){
      let input=prompt(`add your task${i}`)
      taskmanager.addTask(input)

   }
   // prompt(`view${}`)

  // let id=setInterval(()=>{
   // console.log( taskmanager.listTask()) },3000)
   // setTimeout(() => {
   //   clearInterval(id)
   // }, 9000);


   // taskmanager.addTask("learn")
   //setTimeout(()=>{console.log( taskmanager.completeTask("learn"))
    //console.log(taskmanager.listTask())
  //console.log(taskmanager.filterTask())
 // },4000)
 //let a= ['learn']
 // console.log( a[0]=='learn')

    //taskmanager.addTask('write')
   // taskmanager.addTask("jog")
   // console.log(tasks)
   // console.log(tasks.includes('write'))


    //console.log(Object.entries(tasks))
   

//task1-------------------------
//console.log([10,5,1].sort())
//console.log(new Date(2016,5,1))
//console.log(0.1+0.2)



    

    




     

            

   


  


         

    
