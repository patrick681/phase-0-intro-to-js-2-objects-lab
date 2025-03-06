// Write your solution in this file!
const employee = {
    name: "Jane Doe",
    streetAddress: "456 Elm St, Metropolis"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,  // Spread operator to copy existing properties
        [key]: value  // Add or update the specified key with the new value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modifies the original object
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Clone the original object
    delete newEmployee[key]; // Remove the key from the new object
    return newEmployee; // Return the modified copy
}

// Destructive function (modifies the original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly modifies the original object
    return employee; // Return modified object
}

