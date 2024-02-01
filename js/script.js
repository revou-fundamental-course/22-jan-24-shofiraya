const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputSelect = document.getElementById('selects');

const button = document.getElementById('submit');

button.addEventListener('click', function() {
    let nama = inputName.value;
    let email = inputEmail.value;
    let selects = inputSelect.value;

    if (!nama) {
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "Nama harus diisi!"
    }

    if (!email) {
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = "Email harus diisi!";
    }

    if (!selects) {
        alert('Pilihan opsi harus diisi!');
    }
});

// Deklarasi variabel control autoslide
let currentIndex = 0;

const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides')

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function updateSlide() {
    slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 2000);