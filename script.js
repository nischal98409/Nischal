function showModal() {
    // Display the processing state initially
    document.getElementById('transactionModal').style.display = 'flex';
    document.getElementById('processingState').style.display = 'block';
    document.getElementById('confirmationState').style.display = 'none';

    // Simulate processing delay, then show the confirmation state
    setTimeout(() => {
        document.getElementById('processingState').style.display = 'none';
        document.getElementById('confirmationState').style.display = 'block';
    }, 1500); // 1.5 seconds delay
}

function closeModal() {
    document.getElementById('transactionModal').style.display = 'none';
}

function showProcessing() {
    alert('Searched Successfully!');
}

function transferPaypal() {
    alert('Searched Successfully!');
}

