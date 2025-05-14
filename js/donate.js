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
    // Shows comformation 
    showConfirmation();
    // Clears the Input Field 
    document.getElementById ('noakhali-donation').value = '';
    initialNoakhaliBalance = initialNoakhaliBalance + donationAmont;
    // Adds to history
    const historyTab = document.getElementById ('history-tab');
    const historyItem =document.createElement('div');
    historyItem.classList.add ('m-4', 'p-4', 'bg-gray-100', 'rounded-lg');
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString();
    const donationTitel = getInnerTextByIdName ('noakhali-title');
    
    historyItem.innerHTML = `
    <h4 class="text-xl font-bold">Donation: ${donationAmont} BDT to ${donationTitel} </h4>
    <p> Date & Time: ${dateString}</p>
    `
    historyTab.appendChild(historyItem);
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
    // Shows comformation 
    showConfirmation();
    // Clears the Input Field 
    document.getElementById ('feni-donation').value = '';
    // Adds to history
    const historyTab = document.getElementById ('history-tab');
    const historyItem =document.createElement('div');
    historyItem.classList.add ('m-4', 'p-4', 'bg-gray-100', 'rounded-lg');
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString();
    const donationTitel = getInnerTextByIdName ('feni-title');
    
    historyItem.innerHTML = `
    <h4 class="text-xl font-bold">Donation: ${donationAmont} BDT to ${donationTitel} </h4>
    <p> Date & Time: ${dateString}</p>
    `
    historyTab.appendChild(historyItem);
    // // Update Balance 
    initialFeniBalance = initialFeniBalance + parseFloat(donationAmont);
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
    // Shows comformation 
    showConfirmation();
    // Adds to history
    const historyTab = document.getElementById ('history-tab');
    const historyItem =document.createElement('div');
    historyItem.classList.add ('m-4', 'p-4', 'bg-gray-100', 'rounded-lg');
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString();
    const donationTitel = getInnerTextByIdName ('quota-title');
    
    historyItem.innerHTML = `
    <h4 class="text-xl font-bold">Donation: ${donationAmont} BDT to ${donationTitel} </h4>
    <p> Date & Time: ${dateString}</p>
    `
    historyTab.appendChild(historyItem);
    // Clears the Input Field 
    document.getElementById ('quota-donation').value = '';
    initialQuotaBalance = initialQuotaBalance + donationAmont;
    // // Update Balance 
    document.getElementById ('quota-donation-balance').innerText = initialQuotaBalance + ' BDT';
    // Update Golbal Balance 
    initialGlobalBalance = initialGlobalBalance - donationAmont;
    document.getElementById ('balance-display').innerText = initialGlobalBalance + 'BDT';
});