import formData from './formData';

const form = document.getElementById('form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.message = document.getElementById('message').value;

    const success = document.getElementById('success');

    success.style.display = 'block';
    
    console.log(formData);
}