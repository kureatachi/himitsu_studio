// Simple script to hide scroll indicator
document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        setTimeout(() => {
            scrollIndicator.classList.add('hidden');
        }, 3000);
    }
});
