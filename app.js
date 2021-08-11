'use strict';

let container = document.getElementById('salesRecord');
let tableEl = document.createElement('table');
container.appendChild(tableEl);


let branches = [];
let totals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let workHours= ['6:00am', '7:00am', '8:00am','9:00am', '10:00am', '11:00am','12:00pm', '1:00pm', '2:00pm','3:00pm', '4:00pm', '5:00pm','6:00pm', '7:00pm'];



function Branch(branchName, minCust, maxCust, avgSale) {
    this.branchName = branchName;
    this.totalCookie = 0;
    this.cust= 0;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.custPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.sales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    branches.push(this);
}
    
    
    
    Branch.prototype.getCust = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        for (let i = 0; i < this.custPerHour.length; i++) {
            this.custPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min); 
            this.sales[i] = this.custPerHour[i] * this.avgSale;
            this.totalCookie = this.totalCookie + this.sales[i];
            
        }
            
        
    }

    Branch.prototype.render = function () {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEl1 = document.createElement('td');
        trEl.appendChild(tdEl1);
        tdEl1.textContent = this.branchName;
    
        for (let index = 1; index <= this.sales.length; index++) {
            let tdEl1 = document.createElement('td');
            trEl.appendChild(tdEl1);
            tdEl1.textContent = Math.floor(this.sales[index-1]);
            
        }

        let tdEl15 = document.createElement('td');
        trEl.appendChild(tdEl15);
        tdEl15.textContent = Math.floor(this.totalCookie);

        
    }
    
    function createTableHeader() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let thEl0 = document.createElement('th');
        trEl.appendChild(thEl0);
        thEl0.textContent = '';
    
        for (let index = 1; index <= workHours.length; index++) {
            let thEl0 = document.createElement('th');
            trEl.appendChild(thEl0);
            thEl0.textContent = workHours[index-1];
            
        }
    
        let thEl15 = document.createElement('th');
        trEl.appendChild(thEl15);
        thEl15.textContent = 'Daily Location Total';
    }


    

    createTableHeader();

    let Seattle = new Branch('Seattle',23,65,6.3);
    Seattle.getCust(23,65);

    let Tokyo = new Branch('Tokyo',3,24,1.2);
    Tokyo.getCust(3,24);

    let Dubai = new Branch('Dubai',11,38,3.7);
    Dubai.getCust(11,38);

    let Paris = new Branch('Paris',20,38,2.3);
    Paris.getCust(20,38);

    let Lima = new Branch('Lima',2,16,4.6);
    Lima.getCust(2,16);

    for (let i = 0; i < branches.length; i++) {
        branches[i].render();
    }

    for (let i = 0; i < totals.length; i++) {
        totals[i] =  Seattle.sales[i]  + Tokyo.sales[i]  + Dubai.sales[i] + Paris.sales[i]  + Lima.sales[i];
        Math.floor(totals[i]);
    }


function createTablegfooter() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tfEl0 = document.createElement('td');
    trEl.appendChild(tfEl0);
    tfEl0.textContent = 'totals';

    let index = 1;

    for ( index = 1; index <= totals.length; index++) {
        let tfEl1 = document.createElement('td');
        trEl.appendChild(tfEl1);
        tfEl1.textContent = Math.floor(totals[index-1]);
        
    } if (index == 15) {
        let tfEl1 = document.createElement('td');
        trEl.appendChild(tfEl1);
        tfEl1.textContent = Math.floor(fullRec);
    }

    

    
    
}

let fullRec = Seattle.totalCookie + Tokyo.totalCookie + Dubai.totalCookie + Paris.totalCookie + Lima.totalCookie;

createTablegfooter();


let myform = document.getElementById('myForm');
    myform.addEventListener('submit', addbranch);
    function addbranch(event) {
        event.preventDefault();
        let branchName = event.target.name.value;
        let minCust = event.target.minCust.value;
        let maxCust = event.target.maxCust.value;
        let avgSale = event.target.avgSale.value;
        let newBranch = new Branch(branchName, minCust, maxCust, avgSale);



        newBranch.getCust(minCust, maxCust);

        tableEl.deleteRow(-1);

        newBranch.render();
        createTablegfooter();
    }

