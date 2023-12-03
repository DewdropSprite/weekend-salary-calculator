onReady();

function onReady() {
    console.log('Javascript is working!');
}

function addEmployee(event) {
    console.log("we're adding employees information");

    const firstName = ("firstNameInput").value;
    console.log("firstName", firstName)
    const lastName = ("lastNameInput").value;
    console.log("lastName", lastName)
    const iDNumber = ("idInput").value;
    console.log("iDNumber", iDNumber)
    const jobTitle = ("titleInput").value;
    console.log("jobTitle", jobTitle)
    const annualSalary = ("annualSalaryInput").value;
    console.log("annualSalary", annualSalary)

    const employeeTable = document.querySelector("employeeDataTable");

    employeeTable.innerHTML += `<tr><td>${firstName}</td><td>${lastName}</td><td>${iDNumber}</td><td>${jobTitle}</td><td>${annualSalary}</td></tr>`;

    event.preventDefault();
}
