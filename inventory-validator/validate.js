const data = require('./data.json');

function validateItem(item) {
    let errors = [];

    if (!item.name || item.name.trim() === "") {
        errors.push("Missing product name");
    }

    if (item.price == null || item.price <= 0) {
        errors.push("Invalid price");
    }

    if (item.quantity == null || item.quantity < 0) {
        errors.push("Invalid quantity");
    }

    return errors;
}

function runValidation() {
    console.log("Running Inventory Validation...\n");

    data.forEach(item => {
        const errors = validateItem(item);

        if (errors.length > 0) {
            console.log(`Item ID ${item.id} has issues:`);
            errors.forEach(err => console.log(" - " + err));
            console.log("");
        }
    });

    console.log("Validation complete.");
}

runValidation();