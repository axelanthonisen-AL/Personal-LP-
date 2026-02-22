document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('span');
            
            const isOpen = !answer.classList.contains('hidden');
            
            // Reset others
            faqItems.forEach(i => {
                i.querySelector('.faq-answer').classList.add('hidden');
                i.querySelector('span').textContent = '+';
            });

            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.textContent = '-';
            }
        });
    });
});
