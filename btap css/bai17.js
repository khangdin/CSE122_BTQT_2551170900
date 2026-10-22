function validateForm() {
    let nameValue = document.getElementById('text-name').value.trim();
    let emailValue = document.getElementById('text-email').value.trim();
    let passValue = document.getElementById('text-password').value;
    let confirmValue = document.getElementById('text-confirm-password').value;

    let nameInput = document.getElementById('text-name');
    let emailInput = document.getElementById('text-email');
    let passInput = document.getElementById('text-password');
    let confirmInput = document.getElementById('text-confirm-password');

    let nameError = document.getElementById('name-error');
    let nameSuccess = document.getElementById('name-success');
    let emailError = document.getElementById('email-error');
    let emailSuccess = document.getElementById('email-success');
    let passError = document.getElementById('pass-error');
    let passSuccess = document.getElementById('pass-success');
    let confirmError = document.getElementById('confirm-error');
    let confirmSuccess = document.getElementById('confirm-success');

    let isValid = true;

    if (nameValue === "") {
        nameInput.classList.add('input-error');
        nameInput.classList.remove('input-success');
        nameError.innerText = "Họ và tên không được để trống";
        nameError.style.display = "block";
        nameSuccess.style.display = "none";
        isValid = false;
    } else {
        nameInput.classList.remove('input-error');
        nameInput.classList.add('input-success');
        nameError.style.display = "none";
        nameSuccess.style.display = "block";
    }

    if (emailValue === "") {
        emailInput.classList.add('input-error');
        emailInput.classList.remove('input-success');
        emailError.innerText = "Email không được để trống";
        emailError.style.display = "block";
        emailSuccess.style.display = "none";
        isValid = false;
    } else if (!emailValue.includes('@')) {
        emailInput.classList.add('input-error');
        emailInput.classList.remove('input-success');
        emailError.innerText = "Email không hợp lệ (thiếu ký tự @)";
        emailError.style.display = "block";
        emailSuccess.style.display = "none";
        isValid = false;
    } else {
        emailInput.classList.remove('input-error');
        emailInput.classList.add('input-success');
        emailError.style.display = "none";
        emailSuccess.style.display = "block";
    }

    if (passValue.length < 6) {
        passInput.classList.add('input-error');
        passInput.classList.remove('input-success');
        passError.innerText = "Mật khẩu phải có ít nhất 6 ký tự";
        passError.style.display = "block";
        passSuccess.style.display = "none";
        isValid = false;
    } else {
        passInput.classList.remove('input-error');
        passInput.classList.add('input-success');
        passError.style.display = "none";
        passSuccess.style.display = "block";
    }

    if (confirmValue === "") {
        confirmInput.classList.add('input-error');
        confirmInput.classList.remove('input-success');
        confirmError.innerText = "Xác nhận mật khẩu không được để trống";
        confirmError.style.display = "block";
        confirmSuccess.style.display = "none";
        isValid = false;
    } else if (confirmValue !== passValue) {
        confirmInput.classList.add('input-error');
        confirmInput.classList.remove('input-success');
        confirmError.innerText = "Xác nhận mật khẩu không khớp";
        confirmError.style.display = "block";
        confirmSuccess.style.display = "none";
        isValid = false;
    } else {
        confirmInput.classList.remove('input-error');
        confirmInput.classList.add('input-success');
        confirmError.style.display = "none";
        confirmSuccess.style.display = "block";
    }

    return isValid;
}