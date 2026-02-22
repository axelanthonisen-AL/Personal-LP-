document.addEventListener('DOMContentLoaded', () => {
    
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            
            // Toggle visibility
            const isOpen = !answer.classList.contains('hidden');
            
            // Close all other FAQs first (Optional)
            document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.faq-icon').forEach(el => el.textContent = '+');

            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.textContent = '-';
            }
        });
    });

    // Form submission animation (Optional)
    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
        const button = form.querySelector('button');
        button.textContent = "Sending...";
        button.style.opacity = "0.7";
    });
});
