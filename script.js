document.addEventListener('DOMContentLoaded', () => {
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('span');
            
            const isOpen = !answer.classList.contains('hidden');
            
            // Optional: Close other FAQs
            faqItems.forEach(other => {
                other.querySelector('.faq-answer').classList.add('hidden');
                other.querySelector('span').textContent = '+';
            });

            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.textContent = '-';
            }
        });
    });

    // Form Handling - Prevents refresh on submit for better UX
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const btn = form.querySelector('button');
        btn.textContent = "SENDING...";
        btn.style.opacity = "0.5";
    });
});
