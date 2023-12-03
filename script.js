onReady();

function onReady() {
    console.log('Javascript is working!');
}

function addEmployee(event) {
    console.log("we're adding employees information");

    let firstNameInput = document.getElementById("firstNameInput").value;
    //console.log("firstName", firstName)
    let lastNameInput = document.getElementById("lastNameInput").value;
    //console.log("lastName", lastName)
    let idInput = document.getElementById("idInput").value;
   // console.log("iDNumber", iDNumber)
    let titleInput = document.getElementById("titleInput").value;
    //console.log("jobTitle", jobTitle)
    let annualSalaryInput = document.getElementById("annualSalaryInput").value;
    //console.log("annualSalary", annualSalary)

    //const firstNameValue = firstName.value;
    //const lastNameValue = lastName.value;
    //const iDNumberValue = iDNumber.value;
    //const jobTitleValue = jobTitle.value;
    //const annualSalaryValue = annualSalary.value;


    tablePath = document.getElementById("employeeDataTable");

    tablePath.innerHTML += 
    `<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${iDNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button onclick="deleteEmployee(event)">Delete</button></td>
    </tr>`;

    event.preventDefault();
}

function deleteEmployee(event){
    event.target.parentNode.parentNode.remove();
    event.preventDefault();
}
