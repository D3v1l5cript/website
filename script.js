function login() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var errorMessage = document.getElementById('errorMessage');
    
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    // Reset error message
    errorMessage.textContent = '';

    // Validate inputs
    if (username === '' || password === '') {
        errorMessage.textContent = 'bitch are you blind.';
        return;
    }

    // Simulate authentication (replace with actual backend call)
    if (username === 'darksatan' && password === 'satanic') {
        // Redirect to dashboard if login successful
        window.location.href = 'dashboard.html';
    } else {
        // Display error message for incorrect credentials
        errorMessage.textContent = 'you are not allowed **bitch**';
    }
}
