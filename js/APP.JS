"use strict";
//IDNUMBER________________________________________
var id = 999;

function generateId() {
    return ++id;
}

//Salary____________________________________________
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

//Q4 (min*max) salary-(salary*7.5%):______________________________
function calculateNetSalary(salary) {
    const taxPercent = 7.5;
    const taxAmount = (salary * taxPercent) / 100;
    const netSalary = salary - taxAmount;
    return Math.round(netSalary);
}

// constructor function___________________________________________
function Employee(imgURL, fullName, department, level) {
    this.imgURL = imgURL;
    this.employeeID = generateId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = getRandomSalary(level);
}



let Ghazi = new Employee("./assets/Ghazi.png", 'Ghazi Samer', "Administration", "Senior");
let Lana = new Employee("./assets/Lana.png", 'Lana Ali', "Finance", "Senior");
let Tamara = new Employee("./assets/Tamara.png", 'Tamara Ayoub', "Marketing", "Senior");
let Safi = new Employee("./assets/Safi.png", 'Safi Walid', "Administration", "Mid-Senior");
let Omar = new Employee("./assets/Omar.png", 'Omar Zaid', "Development", "Senior");
let Rana = new Employee("./assets/Rana.png", 'Rana Saleh', "Development", "Junior");
let Hadi = new Employee("./assets/Hadi.png", 'Hadi Ahmad', "Finance", "Mid-Senior");


//const obj_______________________________________________
console.table(Ghazi);
console.table(Lana);
console.table(Tamara);
console.table(Safi);
console.table(Omar);
console.table(Rana);
console.table(Hadi);


//properties method_________________________________________________
const mainEl = document.getElementsByTagName("main");

Employee.prototype.render = function () {
    const divParentEl = document.createElement("div")
    divParentEl.className = "card"
    mainEl[0].appendChild(divParentEl)

    const divEl = document.createElement("div")
    divEl.className = "imgURL"
    divParentEl.appendChild(divEl)


    //RENDER CARD FINALLY

    //imgURL
    let imgEl = document.createElement("img");
    var image = document.querySelector('.img');
    imgEl.src = this.imgURL;
    imgEl.alt = this.imgURL;
    divEl.appendChild(imgEl)
    imgEl.style.borderRadius = "50%";
    imgEl.style.width = '50%';
    imgEl.style.height = '50%';

    //fullName
    let hEl = document.createElement("h2");
    hEl.id = "employee-name";
    hEl.textContent = `${this.fullName}`;
    divEl.appendChild(hEl)

    //employeeID
    let pEl = document.createElement("p");
    pEl.textContent = `Employee ID: ${this.employeeID}\n\n`;
    divEl.appendChild(pEl);

    //department
    pEl = document.createElement("p");
    pEl.textContent = `Department: ${this.department}\n\n`;
    divEl.appendChild(pEl);

    //level
    pEl = document.createElement("p");
    pEl.textContent = `Level: ${this.level}\n\n`;
    divEl.appendChild(pEl);

    //salary
    pEl = document.createElement("p");
    pEl.textContent = `Salary: ${this.salary}`;
    divEl.appendChild(pEl);

    // let pEl= document.createElement("p")
    // pEl.textContent=`Employee ID: ${this.employeeID} \n \n  Department: ${this.department} \n \n  Level: ${this.level} \n \n  Salary: ${this.salary} `;
    // divEl.appendChild(pEl)   

    //employeeID________________________________________________________________________________________________
    // let parentElement = document.getElementById("employeeID"[0]);
    // parentElement.appendChild(employeeID);


    //fullName_____________________________________________
    // let fullName = document.createElement("spin"[1]);
    // fullName.textContent = `Full Name: ${this.fullName}`;
    // fullName.appendChild(fullName);

    //department_____________________________________________
    // let department = document.createElement("spin"[2]);
    // department.textContent = `Department: ${this.department}`;
    // department.appendChild(department);
    //level___________________________________________________
    // let level = document.createElement("spin"[3]);
    // level.textContent = `Level: ${this.level}`;
    // level.appendChild(level);
    //salary___________________________________________________
    // let salary = document.createElement("spin"[4]);
    // salary.textContent = `Salary: ${this.salary}`;
    // salary.appendChild(salary);







    // document.write(`<img src="${this.imgURL}" alt="Employee Image" class="rounded-image" id="imgURL">`);
    // document.write(`<p><label>ID:</label><span class="ID" id="employeeID">${this.employeeID}</span></p>`);
    // document.write(`<p><label>Full Name:</label><span class="Full Name" id="fullName">${this.fullName}</span></p>`);
    // document.write(`<p><label>Department:</label><span class="Department" id="department">${this.department}</span></p>`);
    // document.write(`<p><label>Level:</label><span class="Level" id="level">${this.level}</span></p>`);
    // document.write(`<p><label>Salary:</label><span class="Salary" id="salary">${this.salary}</span></p>`);
};


//render ++_________________________________________________________________________________
Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();


