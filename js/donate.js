// Getting the input field value 
let newBalance = 0;
let initialBalance = getInnerTextByIdName ('balance-display');
initialBalance = parseFloat(initialBalance);
document.getElementById('btn-noakhali-donation').addEventListener('click', function () {
    // Get the vlaue from the input field 
    const donationAmont = getValueByIdName('noakhali-donation');
    // console.log(donationAmont);
    // Clear the Input Field 
    document.getElementById ('noakhali-donation').value = '';
    newBalance = parseFloat(newBalance) + parseFloat(donationAmont);
    // let donationBalance = document.getElementById ('noakhali-donation-balance').value = newBalance;
    // // Update Balance 
    // console.log(donationBalance);
    document.getElementById ('noakhali-donation-balance').innerText = newBalance + ' BDT';
    document.getElementById ('balance-display').innerText = initialBalance - newBalance + 'BDT';
});