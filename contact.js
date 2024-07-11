const form = document.getElementById('form');
const name = document.getElementById('name');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');

document.getElementById('openModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
};

const isValidPhone = phone => {
    const phoneRegex = /^\+94\d{9}$/;
    return phoneRegex.test(phone);
};

const validateInputs = () => {
    const nameValue = name.value.trim();
    const addressValue = address.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if(addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    if(phoneValue === '') {
        setError(phone, 'invalid phone number, it should start with +94 and be followed by exactly 9 digits (+94xxxxxxxxx)');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'invalid phone number, it should start with +94 and be followed by exactly 9 digits (+94xxxxxxxxx)');
    } else {
        setSuccess(phone);
    }

    if(emailValue === '') {
        setError(email, 'invalid Email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'invalid Email');
    } else {
        setSuccess(email);
    }

    if(messageValue === '') {
        setError(message, 'Message must be at least 10 characters long');
    } else if (messageValue.length < 10) {
        setError(message, 'Message must be at least 10 characters long');
    } else {
        setSuccess(message);
    }


    localStorage.setItem('contactData', JSON.stringify({ nameValue, address, phone, email, message }));
        alert('Form submitted successfully!');
        contactModal.style.display = 'none';

};
