// JavaScript for tab switching with stronger text color enforcement
    document.getElementById('donationTabBtn').addEventListener('click', function () {
        this.classList.add('tab-active', 'custom-background');

        const historyBtn = document.getElementById('historyTabBtn');
        historyBtn.classList.remove('tab-active', 'custom-background');
    });

    document.getElementById('historyTabBtn').addEventListener('click', function () {
        this.classList.add('tab-active', 'custom-background');

        const donationBtn = document.getElementById('donationTabBtn');
        donationBtn.classList.remove('tab-active', 'custom-background');
    });