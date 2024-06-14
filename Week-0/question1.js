let salarySheet=[12,45.00,-20,30.50,-15];
let sheet1=["1","-2.00","-8.45","abc"];

let temp=[];

for(let j=0;j<sheet1.length;j++){

    temp[j]= parseFloat(sheet1[j]);
    console.log(temp);

}



console.log(expensecal(temp));



function expensecal(sheet){
let expenseCount=0;
let expensesum=0;

for(let i=0;i<sheet.length;i++){
    
    if (sheet[i]<0){
        expenseCount++;
       expensesum= expensesum+sheet[i];
    }
   
}
console.log( `expense-count :${expenseCount} ,expense-sum:${Math.abs(expensesum)}`);
}