// Example of client-side form validation
const signupForm = document.querySelector('.form');

signupForm.addEventListener('submit', function(event) {
    const username = signupForm.querySelector('input[type="text"]').value.trim();
    const email = signupForm.querySelector('input[type="email"]').value.trim();
    const password = signupForm.querySelector('input[type="password"]').value.trim();

    if (username === '' || email === '' || password === '') {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});
