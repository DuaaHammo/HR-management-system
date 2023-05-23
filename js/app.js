"use strict";

var id = 999;

function generateId() {
  return ++id;
}

//
function getRandomSalary(level) {
  let min, max;

  switch (level) {
    case 'Senior':
      min = 1500;
      max = 2000;
      break;
    case 'Mid-Senior':
      min = 1000;
      max = 1500;
      break;
    case 'Junior':
      min = 500;
      max = 1000;
      break;
  }

  return getRandomInt(min, max);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let salary = Math.floor(Math.random() * (max - min) + min);
  return calculateNetSalary(salary);
}

//Q4 (min*max) salary-(salary*7.5%):_
function calculateNetSalary(salary) {
  const taxPercent = 7.5;
  const taxAmount = (salary * taxPercent) / 100;
  const netSalary = salary - taxAmount;
  return Math.round(netSalary);
}

    // Q1 Create an object:
    const employees = [
      {
        imageURL: "./img/Ghazi.png",
        ID: generateId(),
        FullName: 'Ghazi Samer',
        Department: "Administration",
        Level: "Senior",
        Salary: getRandomSalary("Senior"),
      },
      {
        imageURL: "./img/Lana.png",
        ID: generateId(),
        FullName: 'Lana Ali',
        Department: "Finance",
        Level: "Senior",
        Salary: getRandomSalary("Senior"),
      },
      {
        imageURL: "./img/Tamara.png",
        ID: generateId(),
        FullName: 'Tamara Ayoub',
        Department: "Marketing",
        Level: "Senior",
        Salary: getRandomSalary("Senior"),
      },
      {
        imageURL: "./img/Safi.png",
        ID: generateId(),
        FullName: 'Safi Walid',
        Department: "Administration",
        Level: "Mid-Senior",
        Salary: getRandomSalary("Mid-Senior"),
      },
      {
        imageURL: "./img/Omar.png",
        ID: generateId(),
        FullName: 'Omar Zaid',
        Department: "Development",
        Level: "Senior",
        Salary: getRandomSalary("Senior"),
      },
      {
        imageURL: "./img/Rana.png",
        ID: generateId(),
        FullName: 'Rana Saleh',
        Department: "Development",
        Level: "Junior",
        Salary: getRandomSalary("Junior"),
      },
      {
        imageURL: "./img/Hadi.png",
        ID: generateId(),
        FullName: 'Hadi Ahmad',
        Department: "Finance",
        Level: "Mid-Senior",
        Salary: getRandomSalary("Mid-Senior"),
      },
    ];

    // Q5 Print employee details:
    employees.forEach(function (employee) {
      console.log("Employee ID: " + employee.ID);
      console.log("imageURL: " + employee.imageURL);
      console.log("Full Name: " + employee.FullName);
      console.log("Department: " + employee.Department);
      console.log("Level: " + employee.Level);
      console.log("Salary: " + employee.Salary);
    });

    // Function to display employee details
    function displayEmployees(employees) {
      const employeeList = document.getElementById('employee-list');

      employees.forEach(function (employee) {
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employee-card');

        const employeeImage = document.createElement('div');
        employeeImage.classList.add('employee-image');

        const imageElement = document.createElement('img');
        imageElement.src = employee.imageURL;
        imageElement.alt = 'Employee Image';
        imageElement.classList.add('imageURL');

        employeeImage.appendChild(imageElement);

        const employeeDetails = document.createElement('div');
        employeeDetails.classList.add('employee-details');

        const heading = document.createElement('h2');
        heading.textContent = 'Employee Information';

        const idParagraph = document.createElement('p');
        idParagraph.innerHTML = `<label>Employee ID:</label> <span class="ID">${employee.ID}</span>`;

        const fullNameParagraph = document.createElement('p');
        fullNameParagraph.innerHTML = `<label>Full Name:</label> <span class="Full Name">${employee.FullName}</span>`;

        const departmentParagraph = document.createElement('p');
        departmentParagraph.innerHTML = `<label>Department:</label> <span class="department">${employee.Department}</span>`;

        const levelParagraph = document.createElement('p');
        levelParagraph.innerHTML = `<label>Level:</label> <span class="level">${employee.Level}</span>`;

        const salaryParagraph = document.createElement('p');
        salaryParagraph.innerHTML = `<label>Salary:</label> <span class="salary">${employee.Salary}</span>`;

        employeeDetails.appendChild(heading);
        employeeDetails.appendChild(idParagraph);
        employeeDetails.appendChild(fullNameParagraph);
        employeeDetails.appendChild(departmentParagraph);
        employeeDetails.appendChild(levelParagraph);
        employeeDetails.appendChild(salaryParagraph);

        employeeCard.appendChild(employeeImage);
        employeeCard.appendChild(employeeDetails);

        employeeList.appendChild(employeeCard);
      });
    }

    // Call the function to display employee details
    displayEmployees(employees);

    class Employee {
      constructor(imageURL, ID, FullName, Department, Level, Salary) {
        this.imageURL = imageURL;
        this.ID = ID;
        this.FullName = FullName;
        this.Department = Department;
        this.Level = Level;
        this.Salary = Salary;
      }

      render() {
        const divEl = document.createElement('div');
        mainEl[0].appendChild(divEl);

        const imgEl = document.createElement('img');
        imgEl.src = this.imageURL;
        imgEl.alt = this.FullName;

        divEl.appendChild(imgEl);
        const pEl = document.createElement('p');
        divEl.appendChild(pEl);

        pEl.textContent = `Full Name : ${this.FullName} - ID : ${this.ID} Department : ${this.Department} - Level : ${this.Level} ${this.Salary}`;
      }
    }

    const allEmployees = [
      new Employee('./img/Ghazi.png', generateId(), 'Ghazi Samer', 'Administration', 'Senior', getRandomSalary('Senior')),
      new Employee('./img/Lana.png', generateId(), 'Lana Ali', 'Finance', 'Senior', getRandomSalary('Senior')),
      new Employee('./img/Tamara.png', generateId(), 'Tamara Ayoub', 'Marketing', 'Senior', getRandomSalary('Senior')),
      new Employee('./img/Safi.png', generateId(), 'Safi Walid', 'Administration', 'Mid-Senior', getRandomSalary('Mid-Senior')),
      new Employee('./img/Omar.png', generateId(), 'Omar Zaid', 'Development', 'Senior', getRandomSalary('Senior')),
      new Employee('./img/Rana.png', generateId(), 'Rana Saleh', 'Development', 'Junior', getRandomSalary('Junior')),
      new Employee('./img/Hadi.png', generateId(), 'Hadi Ahmad', 'Finance', 'Mid-Senior', getRandomSalary('Mid-Senior')),
    ];

    const mainEl = document.getElementsByClassName('main-content');

    allEmployees.forEach((employee) => {
      employee.render();
    });

    const employeeResults = document.getElementById('employee-results');
    employeeResults.appendChild(employeeCard);
