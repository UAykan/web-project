document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const profilesToShow = 6; // Aynı anda gösterilecek profil sayısı
    const profileSlide = document.querySelector('.profile-slide');
    const totalProfiles = document.querySelectorAll('.profile').length;
    const slideWidth = 100 / profilesToShow; // Her bir slayt genişliği

    function slideProfiles() {
        currentIndex++;
        if (currentIndex > totalProfiles - profilesToShow) {
            currentIndex = 0; // Son profile gelindiğinde başa dön
        }

        // Profil kaydırma animasyonu
        profileSlide.style.transform = 'translateX(' + (-currentIndex * slideWidth) + '%)';
    }

    // Her 3 saniyede bir slayt kaydır
    setInterval(slideProfiles, 3000);
});


// Slider için JavaScript kodu
let slideIndex = 0;
const slides = document.querySelector('.slider-1 .slides');

function showSlide(index) {
    const totalSlides = slides.children.length;

    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector('.slider-1 .next').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector('.slider-1 .prev').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

// Otomatik slayt değiştirme
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000); // Slayt değişimi 3 saniyede bir gerçekleşir

let slideIndex2 = 0;
const slides2 = document.querySelector('.slider-2 .slides2');

function showSlide2(index) {
    const totalSlides2 = slides2.children.length;

    if (index >= totalSlides2) slideIndex2 = 0;
    if (index < 0) slideIndex2 = totalSlides2 - 1;

    slides2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
}

document.querySelector('.slider-2 .next2').addEventListener('click', () => {
    slideIndex2++;
    showSlide2(slideIndex2);
});

document.querySelector('.slider-2 .prev2').addEventListener('click', () => {
    slideIndex2--;
    showSlide2(slideIndex2);
});

// Otomatik slayt değiştirme
setInterval(() => {
    slideIndex2++;
    showSlide2(slideIndex2);
}, 3000); // Slayt değişimi 3 saniyede bir gerçekleşir


let slideIndex3 = 0;
const slides3 = document.querySelector('.slides-3');
const totalSlides3 = document.querySelectorAll('.slide-3').length;

function showSlide3(index) {
    if (index >= totalSlides3) slideIndex3 = 0;
    if (index < 0) slideIndex3 = totalSlides3 - 1;
    
    slides3.style.transform = `translateX(-${slideIndex3 * 100}%)`;
}

document.querySelector('.next-3').addEventListener('click', () => {
    slideIndex3++;
    showSlide3(slideIndex3);
});

document.querySelector('.prev-3').addEventListener('click', () => {
    slideIndex3--;
    showSlide3(slideIndex3);
});

// Otomatik slayt değiştirme
setInterval(() => {
    slideIndex3++;
    showSlide3(slideIndex3);
}, 3000); // Slayt değişimi 3 saniyede bir gerçekleşir
