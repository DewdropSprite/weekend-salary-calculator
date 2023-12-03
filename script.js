onReady();

function onReady() {
    console.log('Javascript is working!');
}

function addEmployee(event) {
    console.log("we're adding employees information");

    let firstNameInput = document.getElementById("firstNameInput").value;
    console.log("firstName", firstNameInput)
    let lastNameInput = document.getElementById("lastNameInput").value;
    console.log("lastName", lastNameInput)
    let idInput = document.getElementById("idInput").value;
    console.log("iDNumber", idInput)
    let titleInput = document.getElementById("titleInput").value;
    console.log("jobTitle", titleInput)
    let annualSalaryInput = document.getElementById("annualSalaryInput").value;
    console.log("annualSalary", annualSalaryInput)

    //const firstNameValue = firstName.value;
    //const lastNameValue = lastName.value;
    //const iDNumberValue = iDNumber.value;
    //const jobTitleValue = jobTitle.value;
    //const annualSalaryValue = annualSalary.value;


    tablePath = document.getElementById("employeeDataTable");

    tablePath.innerHTML +=`<tr>
    <td>${firstNameInput}</td>
    <td>${lastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${annualSalaryInput}</td>
    <td><button onclick="deleteEmployee(event)">Delete</button></td>
    </tr>`;

    event.preventDefault();
}

function deleteEmployee(event) {
    event.target.parentNode.parentNode.remove();
    event.preventDefault();
}
