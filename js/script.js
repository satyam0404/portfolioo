/* Copy into js/script.js */
document.addEventListener('DOMContentLoaded', () => {
    // set year
    const y = new Date().getFullYear();
    document.getElementById('year').textContent = y;

    // mobile nav
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');
    menuBtn.addEventListener('click', () => nav.classList.toggle('show'));

    // contact form (fake submit)
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        status.textContent = 'Sending...';
        // simulate send (replace with fetch to your backend/email service)
        setTimeout(() => {
            status.textContent = 'Thanks! I got your message — I\'ll reply soon.';
            form.reset();
        }, 800);
    });
});