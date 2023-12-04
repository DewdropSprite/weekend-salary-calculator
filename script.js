onReady();

function onReady() {
    console.log('Javascript is working!');
}

let totalMonthly = 0;
/** The addEmployee(event) function takes user input in the 
 * First Name, Last Name, User ID, Title, and Annual Salary fields and populates it
 * into the employee table when submit button is pushed.
 */
function addEmployee(event) {
    console.log("we're adding employees information");
    //assign variables that uses table elements connected to the input fields in html
    let firstNameInput = document.getElementById("firstNameInput").value;
    //console.log("First Name:", firstNameInput)
    let lastNameInput = document.getElementById("lastNameInput").value;
    //console.log("Last Name:", lastNameInput)
    let idInput = document.getElementById("idInput").value;
    //console.log("id Number:", idInput)
    let titleInput = document.getElementById("titleInput").value;
    //console.log("Job Title:", titleInput)
    let annualSalaryInput = document.getElementById("annualSalaryInput").value;
    //console.log("Annual Salary:", annualSalaryInput)

    //This is filling in the table with variables that were defined above
    tablePath = document.getElementById("employeeDataTable");

    tablePath.innerHTML += `<tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${annualSalaryInput}</td>
    <td><button onclick="deleteEmployee(event)">Delete</button></td>
    </tr>`;

    //This code is taking the annual salary in the table and getting a monthly total
    totalMonthly += Number(annualSalaryInput);
    let monthlySalary = totalMonthly / 12;

    let mathStuff = document.getElementById("monthlyCalculation");
    mathStuff.innerHTML = monthlySalary;

    //This code is identifying if the monthly budget is greater than $20,000 and creating
    //a message for the user that they are over budget. Colors change using css styling.
    let monthlySalaryPath = document.getElementById('over-budget');
    if (monthlySalary > 20000) {
        document.querySelector('footer').classList.add('over-budget');
        monthlySalaryPath.innerHTML = "oh no we're over budget!"
    }
    //This code clears the user input information after each employee is added
    document.getElementById("inputData").reset();
    //This code keeps the browser from refreshing when submit button is clicked
    event.preventDefault();
}

//This function deletes an employee when the delete button is clicked
function deleteEmployee(event) {
    event.target.parentNode.parentNode.remove();
    event.preventDefault();
}





