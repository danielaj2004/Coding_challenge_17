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

// Task 3 Create a VIP customer class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel; // VIP level customer
    }; // constructor for VIP customer class

    getTotalSpent() {
        const totalSpent = super.getTotalSpent(); // get total spent from parent class
        return totalSpent + (totalSpent * 0.10); // 10% loyalty bonus
    }
}
// Test VIPCustomer
const vipCustomer = new VIPCustomer("Catalina Cruz", "Catalinacruz@gmail.com", "Platinum");
vipCustomer.addPurchase(350);
vipCustomer.addPurchase(525);
console.log(`VIP customer: ${vipCustomer.name}, Total spent with bonus: $${vipCustomer.getTotalSpent()}`);