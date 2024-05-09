function login(event) {
            event.preventDefault(); // Prevent form submission
            
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            
            // Check if username and password are correct
            if (username === 'darksatan' && password === 'satanic') {
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Display error message
                alert('You are not allowed, bitch!');
            }
        }
