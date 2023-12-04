onReady();

function onReady() {
    console.log('Javascript is working!');
}

let monthlyTotal = 0;

function addEmployee(event) {
    console.log("we're adding employees information");

    let firstNameInput = document.getElementById("firstNameInput").value;
    //console.log("firstName", firstNameInput)
    let lastNameInput = document.getElementById("lastNameInput").value;
    //console.log("lastName", lastNameInput)
    let idInput = document.getElementById("idInput").value;
    //console.log("iDNumber", idInput)
    let titleInput = document.getElementById("titleInput").value;
    //console.log("jobTitle", titleInput)
    let annualSalaryInput = document.getElementById("annualSalaryInput").value;
    //console.log("annualSalary", annualSalaryInput)

    tablePath = document.getElementById("employeeDataTable");
    tablePath.innerHTML += `<tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${annualSalaryInput}</td>
    <td><button onclick="deleteEmployee(event)">Delete</button></td>
    </tr>`;

    monthlyTotal += Number(annualSalaryInput);
    let monthlySalary = monthlyTotal / 12;
    
    let mathStuff = document.getElementById("monthlyCalculation");
    mathStuff.innerHTML = monthlySalary;



    document.getElementById("inputData").reset();
    event.preventDefault();
}

function deleteEmployee(event) {
    event.target.parentNode.parentNode.remove();
    event.preventDefault();
}


/*
✕ Updates the total monthly salary value when a single employee is added (9 ms)
✕ Updates the total monthly salary value when multiple employees are added (10 ms)
✕ Applies the 'over-budget' CSS class to the footer when the total monthly salary exceeds $20,000 (13 ms)
*/
