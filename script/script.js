document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var incomeInput = document.getElementById('income');
    var extraIncomeInput = document.getElementById('extraIncome');
    var deductionsInput = document.getElementById('deductions');
    var ageInput = document.getElementById('age');

    // Check for errors
    var errors = false;

    if (!incomeInput.value.trim()) {
        showError(incomeInput);
        errors = true;
    } else {
        hideError(incomeInput);
    }

    if (!extraIncomeInput.value.trim()) {
        showError(extraIncomeInput);
        errors = true;
    } else {
        hideError(extraIncomeInput);
    }

    if (!deductionsInput.value.trim()) {
        showError(deductionsInput);
        errors = true;
    } else {
        hideError(deductionsInput);
    }

    if (ageInput.value === "") {
        showError(ageInput);
        errors = true;
    } else {
        hideError(ageInput);
    }

    if (!errors) {
        var income = parseFloat(incomeInput.value);
        var extraIncome = parseFloat(extraIncomeInput.value);
        var deductions = parseFloat(deductionsInput.value);
        var age = ageInput.value;

        var totalIncome = income + extraIncome - deductions;

        var tax = calculateTax(totalIncome, age);

        document.getElementById('result').innerText = "Your tax is: " + tax.toFixed(2);
    }
});

function calculateTax(income, age) {
    var tax = 0;

    // If income is less than or equal to 8 lakhs, no tax
    if (income <= 800000) {
        return tax;
    }

    // Tax calculation for income over 8 lakhs
    var taxableIncome = income - 800000; // Calculate income over 8 lakhs

    // Determine tax rate based on age
    var taxRate;
    if (age === "<40") {
        taxRate = 0.3; // 30% tax rate for age < 40
    } else if (age === ">=40&<60") {
        taxRate = 0.4; // 40% tax rate for age ≥ 40 but < 60
    } else {
        taxRate = 0.1; // 10% tax rate for age ≥ 60
    }

    // Calculate tax amount
    tax = taxableIncome * taxRate;

    return tax;
}

function showError(input) {
    input.parentElement.classList.add('input-error');
}

function hideError(input) {
    input.parentElement.classList.remove('input-error');
}
