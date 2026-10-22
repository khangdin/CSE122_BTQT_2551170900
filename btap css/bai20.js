const rowImage = document.getElementById('row-image');
const buttons = document.querySelectorAll('.nav-buttons button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        let effectClass = this.getAttribute('data-effect');
        rowImage.className = '';
        rowImage.classList.add(effectClass);
    });
});