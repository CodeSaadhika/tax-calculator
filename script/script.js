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
        var age = determineAgeGroup(parseInt(ageInput.value)); // Determine age group
        var totalIncome = income + extraIncome - deductions;

        var tax = calculateTax(totalIncome, age);

        document.getElementById('result').innerText = "Your tax is: " + tax.toFixed(2);
    }
});


function calculateTax(income, ageGroup) {
    var tax = 0;

    if (ageGroup === "Less than 60") {
        if (income <= 300000) {
            tax = 0;
        } else if (income > 300000 && income <= 600000) {
            tax = (income - 300000) * 0.05;
        } else if (income > 600000 && income <= 900000) {
            tax = 15000 + (income - 600000) * 0.1;
        } else if (income > 900000 && income <= 1200000) {
            tax = 45000 + (income - 900000) * 0.15;
        } else if (income > 1200000 && income <= 1500000) {
            tax = 90000 + (income - 1200000) * 0.2;
        } else {
            tax = 150000 + (income - 1500000) * 0.3;
        }
    } else if (ageGroup === "60-80 yrs") {
        if (income <= 300000) {
            tax = 0;
        } else if (income > 300000 && income <= 600000) {
            tax = (income - 300000) * 0.05;
        } else if (income > 600000 && income <= 900000) {
            tax = 15000 + (income - 600000) * 0.1;
        } else if (income > 900000 && income <= 1200000) {
            tax = 45000 + (income - 900000) * 0.15;
        } else if (income > 1200000 && income <= 1500000) {
            tax = 90000 + (income - 1200000) * 0.2;
        } else {
            tax = 150000 + (income - 1500000) * 0.3;
        }
    } else if (ageGroup === "Above 80 yrs") {
        if (income <= 300000) {
            tax = 0;
        } else if (income > 300000 && income <= 600000) {
            tax = (income - 300000) * 0.05;
        } else if (income > 600000 && income <= 900000) {
            tax = 15000 + (income - 600000) * 0.1;
        } else if (income > 900000 && income <= 1200000) {
            tax = 45000 + (income - 900000) * 0.15;
        } else if (income > 1200000 && income <= 1500000) {
            tax = 90000 + (income - 1200000) * 0.2;
        } else {
            tax = 150000 + (income - 1500000) * 0.3;
        }
    }

    return tax;
}


function showError(input) {
    input.parentElement.classList.add('input-error');
}

function hideError(input) {
    input.parentElement.classList.remove('input-error');
}

function determineAgeGroup(age) {
    if (age < 60) {
        return "Less than 60";
    } else if (age >= 60 && age < 80) {
        return "60-80 yrs";
    } else {
        return "Above 80 yrs";
    }
}