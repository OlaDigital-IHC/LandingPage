document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.nextElementSibling.style.display = 'none';
                }
            });

            item.classList.toggle('active');
            item.nextElementSibling.style.display = (item.classList.contains('active')) ? 'block' : 'none';
        });
    });
});
    

const carousel = document.getElementById('carousel');
let currentIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(${-index * 100}%)`;
    currentIndex = index;
}

function nextSlide() {
    if (currentIndex < carousel.children.length - 1) {
        showSlide(currentIndex + 1);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        showSlide(currentIndex - 1);
    }
}