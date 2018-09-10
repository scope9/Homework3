const employeeList = [

  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const commandList = ['print, verify, lookup, contains, update, add, delete '];

const user = prompt ("Enter a command");

for (let i = 0; i < commandList.length; i++) {

if( user === `print` ) {

  for (let j = 0; j < employeeList.length; j++) {
 render(employeeList[j].name);
 render(employeeList[j].officeNum);
 render(employeeList[j].phoneNum);



}

}

 if(user === 'verify') {

   employeeName = prompt('What is the employee name?');
  // render(employeeName); 
 

  for (let m = 0; m < employeeList.length; m++) {
    // render(employeeList[j].name);
    // const true = ("true");
  

 if(employeeName === employeeList[m].name) {

  // const true = ("true");
let condition = ("true");
  
render(condition);
  // document.write("true"); }

 } else{ 
  // document.write("false");

 let condition = ("false");
  
 render(condition);


 }
 if (condition === "true") {
   render("true"); }
   else {
     render("false");
   }
  }
}
 

  



 else if(user === 'lookup') {
   specificName = prompt('What is the employee name?');


 

    for (let b = 0; b < employeeList.length; b++) {
   
      if( specificName === employeeList[b].name ) { 
 
   render(employeeList[b].name);
   render(employeeList[b].officeNum);
   render(employeeList[b].phoneNum);
// logic
    }
  }

}

// else if(user === 'contains') {
//   addName = prompt('What is the employee name?');
  


  
// }

else if (user === 'contains'){
  const containsName = prompt('enter a partial name:');
  for (let a = 0; a < employeeList.length; a++){
      if (employeeList[a].containsName){
        
      }
      render (employeeList[a].name);
      // render (employeeList[a].officeNum);
      // render (employeeList[a].phoneNum);
  }
}


else if(user === 'update') {
  updateName = prompt('What is the employee name?');
  updateField = prompt('What field would you like to update?');
  updateValue = prompt('What is value?');

  

}





// else if(user === 'add') {
  //  nameName = newEmployee;
    // newEmployee = prompt('What is the name?');

 
  //  employeeList.push(newEmployee);

//  render(employeeList.name)

//  const input = prompt('Enter Class');

// const input = prompt('New Class');
//     const input = classList[i];

// employeeList.push(newEmployee); 



  // officeName = prompt('What is the office number?');
  // telephoneName = prompt('What is the telephone number?');
 
  // addName = prompt('What is the name?');


// for (let q = 0; q < employeeList.length; q++){
  // nameName = prompt('What is the name?');

  // employeeList.push(newEmployee); 

  // employeeList.push(newEmployee);

  // newEmployee = prompt('What is the name?');
    
    // employeeList.push(newEmployee); 

    // newEmployee = employeeList
    
  //  render(employeeList[q].name);
   
   
  else if ( user === 'add') {
   const employeeNames = prompt('Give me an employee name?');
   const employeeOffices = prompt('Give me their office number');
   const employeeTelephones = prompt('Give me their telephone number');
   var newEmployee = {
    name: employeeNames,
    officeNum: employeeOffices,
    phoneNum: employeeTelephones
   }
   employeeList.push(newEmployee);
   for (let v = 0; v < employeeList.length; v++) {
    render(employeeList[v].name);
    render(employeeList[v].officeNum);
    render(employeeList[v].phoneNum);
   }
  }
  
// }

// }


  // employeeList.push(addName);

  // for (let i = 0; i < taskList.length; i++){
  //   render(taskList[i]);
  // }
  

  // for (let q = 0; q < employeeList.length; q++){
  //    student = employeeList[q];
  //  render(student);
  // }
  



else if(user === 'delete') {
  deleteName = prompt('What name would you like to delete');
 
  // deleteName === []

  // employeeList.splice(1,1)

  if (deleteName === 'Jan')
  employeeList.splice(0,1);

  if (deleteName === 'Juan')
  employeeList.splice(1,1);

  if (deleteName === 'Margie')
  employeeList.splice(2,2);

  if (deleteName === 'Sara')
  employeeList.splice(3,3);

  if (deleteName === 'Tyrell')
  employeeList.splice(4,4);

    if (deleteName === 'Tasha')
  employeeList.splice(5,5);

  if (deleteName === 'Ty')
  employeeList.splice(6,6);
  
  if (deleteName === 'Sarah')
  employeeList.splice(7,7);

}

for (let z = 0; z < employeeList.length; z++) {
  render(employeeList[z].name);
}



}





// console.log('true'); }

//else  console.log('false'); 

//}
 // alert("something");
 // document.write("something");




