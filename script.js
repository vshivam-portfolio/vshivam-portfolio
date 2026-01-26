// Add interaction for the navigation background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black/95', 'shadow-lg');
    } else {
        nav.classList.remove('bg-black/95', 'shadow-lg');
    }
});

// Simple Form Validation & Submit handling
const contactForm = document.querySelector('form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const originalText = btn.innerText;
        
        // Visual feedback
        btn.innerText = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerText = 'Message Sent!';
            btn.classList.replace('bg-orange-600', 'bg-green-600');
            this.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.replace('bg-green-600', 'bg-orange-600');
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Portfolio filter logic (placeholder)
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('bg-orange-600'));
        btn.classList.add('bg-orange-600');
        // Add filtering logic here if you have specific gallery items
    });
});
