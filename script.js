document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            const name = document.getElementById('name').value;

            // Simulate a form submission
            setTimeout(() => {
                responseMessage.classList.remove('d-none', 'alert-danger');
                responseMessage.classList.add('alert-success');
                responseMessage.textContent = 'Form berhasil dikirim';
                form.reset();
            }, 1000);
        } else {
            responseMessage.classList.remove('d-none', 'alert-success');
            responseMessage.classList.add('alert-danger');
            responseMessage.textContent = 'Isi kan sesuai format yang sesuai.';
        }

        form.classList.add('was-validated');
    }, false);
});


