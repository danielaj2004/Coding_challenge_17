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
