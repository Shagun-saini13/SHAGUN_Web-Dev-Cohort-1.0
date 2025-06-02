const cart = ["laptop", "charger", "Notebook"];

// Simulated API object with callback-based methods
const api = {
    createOrder: (cart, callback) => {
        console.log("Creating order for:", cart);
        // Simulate async behavior
        setTimeout(callback, 500);
    },
    payment: (callback) => {
        console.log("Processing payment...");
        setTimeout(callback, 500);
    },
    ShowSummary: (callback) => {
        console.log("Showing summary...");
        setTimeout(callback, 500);
    },
    ShowRemainingBalance: (callback) => {
        console.log("Calculating balance...");
        setTimeout(() => {
            callback();
        }, 500);
    }
};

// Call the API in a nested callback structure
api.createOrder(cart, function() {
    api.payment(function() {
        api.ShowSummary(function() {
            api.ShowRemainingBalance(() => {
                console.log("Order Complete");
            });
        });
    });
});
