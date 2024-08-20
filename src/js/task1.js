import formData from './formData';

const form = document.getElementById('form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const element = e.target;

    formData.name = element.name.value;
    formData.email = element.email.value;
    formData.message = element.message.value;
    
    console.log('form data', formData);
    
    const success = document.getElementById('success');

    success.style.display = 'block';
}
