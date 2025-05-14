// Nowakhali Donation Code
let initialNoakhaliBalance = getInnerTextByIdName ('noakhali-donation-balance'); //Gets inital balance
initialNoakhaliBalance = parseFloat (initialNoakhaliBalance); //Converts that into number
let initialGlobalBalance = getInnerTextByIdName ('balance-display'); //Gets global balance
initialGlobalBalance = parseFloat(initialGlobalBalance); //Converts that into number
// Adds event listener on Noakhali Btn
document.getElementById('btn-noakhali-donation').addEventListener('click', function () {
    // Get the vlaue from the input field 
    const donationAmont = parseFloat(getValueByIdName('noakhali-donation'));
    // Validate the Donation amount
    if (!validateDonationAmount(donationAmont)) {
        alert  ("Please enter a valid amount greater than 0.")
        // Clears the Input Field 
        document.getElementById ('noakhali-donation').value = '';
        return 0;
    }
    else if (donationAmont > initialGlobalBalance) {
        alert ("Insufficient balance.");
        // Clears the Input Field 
        document.getElementById ('noakhali-donation').value = '';
        return 0;        
    }
    // Clears the Input Field 
    document.getElementById ('noakhali-donation').value = '';
    initialNoakhaliBalance = initialNoakhaliBalance + donationAmont;
    // // Update Balance 
    document.getElementById ('noakhali-donation-balance').innerText = initialNoakhaliBalance + ' BDT';
    // Update Golbal Balance 
    initialGlobalBalance = initialGlobalBalance - donationAmont;
    document.getElementById ('balance-display').innerText = initialGlobalBalance + 'BDT';
});

// Feni Donation Code
let initialFeniBalance = getInnerTextByIdName ('feni-donation-balance'); //Gets inital balance
initialFeniBalance = parseFloat (initialFeniBalance); //Converts that into number
// Adds event listener on Feni Btn
document.getElementById('btn-feni-donation').addEventListener('click', function () {
    // Get the vlaue from the input field 
    const donationAmont = parseFloat(getValueByIdName('feni-donation'));
    // Validate the Donation amount
    if (!validateDonationAmount(donationAmont)) {
        alert  ("Please enter a valid amount greater than 0.")
        // Clears the Input Field 
        document.getElementById ('feni-donation').value = '';
        return 0;
    }
    else if (donationAmont > initialGlobalBalance) {
        alert ("Insufficient balance.");
        // Clears the Input Field 
        document.getElementById ('feni-donation').value = '';
        return 0;        
    }
    // Clears the Input Field 
    document.getElementById ('feni-donation').value = '';
    initialFeniBalance = initialFeniBalance + parseFloat(donationAmont);
    // // Update Balance 
    document.getElementById ('feni-donation-balance').innerText = initialFeniBalance + ' BDT';
    // Update Golbal Balance 
    initialGlobalBalance = initialGlobalBalance - donationAmont;
    document.getElementById ('balance-display').innerText = initialGlobalBalance + 'BDT';
});

// Quota Donation Code 
let initialQuotaBalance = getInnerTextByIdName ('quota-donation-balance');
initialQuotaBalance = parseFloat (initialQuotaBalance); //Converts that into number
// Adds event listener on Feni Btn
document.getElementById('btn-quota-donation').addEventListener('click', function () {
    // Get the vlaue from the input field 
    const donationAmont = parseFloat(getValueByIdName('quota-donation'));
    // Validate the Donation amount
    if (!validateDonationAmount(donationAmont)) {
        alert  ("Please enter a valid amount greater than 0.")
        // Clears the Input Field 
        document.getElementById ('quota-donation').value = '';
        return 0;
    }
    else if (donationAmont > initialGlobalBalance) {
        alert ("Insufficient balance.");
        // Clears the Input Field 
        document.getElementById ('quota-donation').value = '';
        return 0;        
    }
    // Clears the Input Field 
    document.getElementById ('quota-donation').value = '';
    initialQuotaBalance = initialQuotaBalance + donationAmont;
    // // Update Balance 
    document.getElementById ('quota-donation-balance').innerText = initialQuotaBalance + ' BDT';
    // Update Golbal Balance 
    initialGlobalBalance = initialGlobalBalance - donationAmont;
    document.getElementById ('balance-display').innerText = initialGlobalBalance + 'BDT';
});