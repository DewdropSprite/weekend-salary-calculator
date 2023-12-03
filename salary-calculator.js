onReady();

function onReady(){
    console.log('Javascript is working!');
}

function addEmployee(event){
    console.log("we're adding employees information");

    let firstName = ('firstName').value;
    let lastName = ('lastName').value;
    let iDNumber = ('idNumber').value;
    let jobTitle = ('jobTitle').value;
    let annualSalary = ('annualSalary').value;
    
    tablePath = document.getElementById('employeeDataTable');

    tablePath.innerHTML += `<tr><td>${firstName}</td><td>${lastName}</td><td>${iDNumber}</td><td>${jobTitle}</td><td>${annualSalary}</td></tr>`;

event.preventDefault();
}
