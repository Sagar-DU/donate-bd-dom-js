// Show Tab 
function showTab (tabName) {
    document.getElementById ('donation-tab').classList.add ('hidden');
    document.getElementById ('history-tab').classList.add ('hidden');

    return document.getElementById(tabName).classList.remove('hidden');
}
// Inital Tab onload 
window.onload = function() {
    showTab('donation-tab');
}

// JavaScript for tab switching with stronger text color enforcement
document.getElementById('donationTabBtn').addEventListener('click', function () {
    this.classList.add('tab-active', 'custom-background');
    
    const historyBtn = document.getElementById('historyTabBtn');
    historyBtn.classList.remove('tab-active', 'custom-background');
    // shows clicked tab 
    showTab ('donation-tab')
});

document.getElementById('historyTabBtn').addEventListener('click', function () {
    this.classList.add('tab-active', 'custom-background');
    
    const donationBtn = document.getElementById('donationTabBtn');
    donationBtn.classList.remove('tab-active', 'custom-background');
    // shows clicked tab 
    showTab ('history-tab')
});


// Show modal function
function showConfirmation() {
    document.getElementById('successModal').classList.remove('hidden');  // Remove 'hidden' class
    document.getElementById('successModal').classList.add('modal-open');  // Add 'modal-open' to display it
}

// Close modal function
function closeModal() {
    document.getElementById('successModal').classList.remove('modal-open'); // Remove 'modal-open' class
    document.getElementById('successModal').classList.add('hidden'); // Add 'hidden' to hide it
}
