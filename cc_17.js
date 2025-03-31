// Task 1 Create a Customer Class
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }; // constructor for customer class
    addPurchase(amount) {
        this.purchaseHistory.push(amount); // add purchase to purchase history
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0); // calculating total spent by customer
    }
}
// Test Customer
const customer1 = new Customer("Jane Smith", "Janesmith@gmail.com");
customer1.addPurchase(150);
customer1.addPurchase(300);
console.log(`New customer: ${customer1.name}, Total spent: $${customer1.getTotalSpent()}`);

// Task 2 Create a SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }; // constructor for sales rep class
    addClient(customer) {
        this.clients.push(customer); // adding clients to sales rep
    }
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name); // find client by name
        return client ? client.getTotalSpent() : 0; // return total spent by client
    }
}
// Test Sales Rep
const salesRep1 = new SalesRep("Robert John");
salesRep1.addClient(customer1);

console.log(`Sales rep: ${salesRep1.name}, Client: ${customer1.name}, Total spent: $${salesRep1.getClientTotal("Jane Smith")}`);