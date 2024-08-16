document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slide = document.querySelector('.carousel-slide');
    const totalProducts = document.querySelectorAll('.carousel-slide .product').length;
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        slide.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index === 0) ? totalProducts - 1 : index - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index === totalProducts - 1) ? 0 : index + 1;
        updateCarousel();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        nextButton.click();
    }, 5000);

    // "Add to Cart" button functionality
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.previousElementSibling.previousElementSibling.textContent;
            alert(`${productName} added to cart!`);
        });
    });

    // Sticky header functionality
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
