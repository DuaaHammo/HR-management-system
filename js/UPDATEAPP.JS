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
function card(iMg, iNumber, naMe, jOb, lev, sa) {
                                                this.imgURL = iMg;
                                                this.employeeID = iNumber;
                                                this.fullName = naMe;
                                                this.Department = jOb;
                                                this.Level = lev;
                                                this.Salary = sa;}

                                                                                                
                                                let Ghazi = new card("./img/Ghazi.png"  , generateId(), 'Ghazi Samer', "Administration", "Senior", getRandomSalary("Senior"));
                                                let Lana = new card("./img/Lana.png"    , generateId(), 'Lana Ali', "Finance", "Senior",            getRandomSalary("Senior"));
                                                let Tamara = new card("./img/Tamara.png", generateId(), 'Tamara Ayoub', "Marketing", "Senior",      getRandomSalary("Senior"));
                                                let Safi = new card("./img/Safi.png",     generateId(), 'Safi Walid', "Administration", "Mid-Senior", getRandomSalary("Mid-Senior"));
                                                let Omar = new card("./img/Omar.png",     generateId(), 'Omar Zaid', "Development", "Senior",         getRandomSalary("Senior"));
                                                let Rana = new card("./img/Rana.png",     generateId(), 'Rana Saleh', "Development", "Junior",         getRandomSalary("Junior"));
                                                let Hadi = new card("./img/Hadi.png",     generateId(), 'Hadi Ahmad', "Finance", "Mid-Senior",          getRandomSalary("Mid-Senior"));

//const obj_______________________________________________
                                                console.table(Ghazi);
                                                console.table(Lana);
                                                console.table(Tamara);
                                                console.table(Safi);
                                                console.table(Omar);
                                                console.table(Rana);
                                                console.table(Hadi);


//properties method_________________________________________________

       card.prototype.render = function () {
                                                document.write('<div class="employee-card" id="card">');
                                                document.write(`<img src="${this.iMg}" alt="Employee Image" class="employee-image rounded-image" id="iMg">`);
                                                document.write(`<p><label>ID:</label><span class="ID" id="iNumber">${this.iNumber}</span></p>`);
                                                document.write(`<p><label>Full Name:</label><span class="Full Name" id="naMe">${this.naMe}</span></p>`);
                                                document.write(`<p><label>Department:</label><span class="Department" id="jOb">${this.jOb}</span></p>`);
                                                document.write(`<p><label>Level:</label><span class="Level" id="lev">${this.lev}</span></p>`);
                                                document.write(`<p><label>Salary:</label><span class="Salary" id="sa">${this.sa}</span></p>`);
                                                document.write('</div>');};
                                                                                    
                                                      Ghazi.render ();
                                                      Lana.render  ();
                                                      Tamara.render();
                                                      Safi.render  ();
                                                      Omar.render  ();
                                                      Rana.render  ();
                                                      Hadi.render  ();
//card rend ++_________________________________________________________________________________
                                 for (let i = 0; i < card.length; i++) {
                                                                        card[i].render();}