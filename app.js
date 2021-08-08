'use strict';

let container = document.getElementById('salesRecord');

let Seattle = {
    branchName : 'Seattle',
    totalCookie : 0,
    cust: 0,
    minCust : 23,
    maxCust : 65,
    avgSale : 6.3,
    workHours: ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm','6pm', '7pm'],
    custPerHour : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    sales : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
    
    
    getCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        for (let i = 0; i < this.custPerHour.length; i++) {
            this.custPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min); 
            this.sales[i] = this.custPerHour[i] * this.avgSale;
            this.totalCookie = this.totalCookie + this.sales[i];
            
        }
            
        
    },
    render: function () {
        let articleEl = document.createElement('salesRecord');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.branchName;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        this.getCust(this.minCust, this.maxCust);
        for (let i = 0; i < this.custPerHour.length; i++) {
            if (i < 13){
                let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            //liEl.textContent = this.custPerHour[i];
            //this.getCust(this.minCust, this.maxCust);
            liEl.textContent = `${this.workHours[i]} : ${Math.floor(this.sales[i])}`;
        } else {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `total cookies sales is :  ${Math.floor(this.totalCookie)}`;
        }
        
    }
}

}
//Seattle.getTotal(Seattle.sales);
Seattle.render();

let Tokyo = {
    branchName : 'Tokyo',
    totalCookie : 0,
    cust: 0,
    minCust : 3,
    maxCust : 24,
    avgSale : 1.2,
    workHours: ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm','6pm', '7pm'],
    custPerHour : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    sales : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
    
    
    getCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        for (let i = 0; i < this.custPerHour.length; i++) {
            this.custPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min); 
            this.sales[i] = this.custPerHour[i] * this.avgSale;
            this.totalCookie = this.totalCookie + this.sales[i];
            
        }
            
        
    },
    render: function () {
        let articleEl = document.createElement('salesRecord');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.branchName;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        this.getCust(this.minCust, this.maxCust);
        for (let i = 0; i < this.custPerHour.length; i++) {
            if (i < 13){
                let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            //liEl.textContent = this.custPerHour[i];
            //this.getCust(this.minCust, this.maxCust);
            liEl.textContent = `${this.workHours[i]} : ${Math.floor(this.sales[i])}`;
        } else {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `total cookies sales is :  ${Math.floor(this.totalCookie)}`;
    }
}
    }
}

Tokyo.render();

let Dubai = {
    branchName : 'Dubai',
    totalCookie : 0,
    cust: 0,
    minCust : 11,
    maxCust : 38,
    avgSale : 3.7,
    workHours: ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm','6pm', '7pm'],
    custPerHour : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    sales : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
    
    
    getCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        for (let i = 0; i < this.custPerHour.length; i++) {
            this.custPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min); 
            this.sales[i] = this.custPerHour[i] * this.avgSale;
            this.totalCookie = this.totalCookie + this.sales[i];
            
        }
            
        
    },
    render: function () {
        let articleEl = document.createElement('salesRecord');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.branchName;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        this.getCust(this.minCust, this.maxCust);
        for (let i = 0; i < this.custPerHour.length; i++) {
            if (i < 13){
                let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            //liEl.textContent = this.custPerHour[i];
            //this.getCust(this.minCust, this.maxCust);
            liEl.textContent = `${this.workHours[i]} : ${Math.floor(this.sales[i])}`;
        } else {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `total cookies sales is :  ${Math.floor(this.totalCookie)}`;
    }
}
    }
}

Dubai.render();

let Paris = {
    branchName : 'Paris',
    totalCookie : 0,
    cust: 0,
    minCust : 20,
    maxCust : 38,
    avgSale : 2.3,
    workHours: ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm','6pm', '7pm'],
    custPerHour : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    sales : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
    
    
    getCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        for (let i = 0; i < this.custPerHour.length; i++) {
            this.custPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min); 
            this.sales[i] = this.custPerHour[i] * this.avgSale;
            this.totalCookie = this.totalCookie + this.sales[i];
            
        }
            
        
    },
    render: function () {
        let articleEl = document.createElement('salesRecord');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.branchName;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        this.getCust(this.minCust, this.maxCust);
        for (let i = 0; i < this.custPerHour.length; i++) {
            if (i < 13){
                let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            //liEl.textContent = this.custPerHour[i];
            //this.getCust(this.minCust, this.maxCust);
            liEl.textContent = `${this.workHours[i]} : ${Math.floor(this.sales[i])}`;
        } else {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `total cookies sales is :  ${Math.floor(this.totalCookie)}`;
    }
}
    }
}

Paris.render();

let Lima = {
    branchName : 'Lima',
    totalCookie : 0,
    cust: 0,
    minCust : 2,
    maxCust : 16,
    avgSale : 4.6,
    workHours: ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm','6pm', '7pm'],
    custPerHour : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    sales : [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
    
    
    getCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        for (let i = 0; i < this.custPerHour.length; i++) {
            this.custPerHour[i] = Math.floor(Math.random() * (max - min + 1) + min); 
            this.sales[i] = this.custPerHour[i] * this.avgSale;
            this.totalCookie = this.totalCookie + this.sales[i];
            
        }
            
        
    },
    render: function () {
        let articleEl = document.createElement('salesRecord');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.branchName;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        this.getCust(this.minCust, this.maxCust);
        for (let i = 0; i < this.custPerHour.length; i++) {
            if (i < 13){
                let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            //liEl.textContent = this.custPerHour[i];
            //this.getCust(this.minCust, this.maxCust);
            liEl.textContent = `${this.workHours[i]} : ${Math.floor(this.sales[i])}`;
        } else {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `total cookies sales is :  ${Math.floor(this.totalCookie)}`;
    }
}

}}

Lima.render();