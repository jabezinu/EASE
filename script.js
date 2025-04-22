document.addEventListener('DOMContentLoaded', () => {
    // Create animated background elements
    createBackgroundElements();
    
    // Add scroll reveal animations
    initScrollReveal();
    
    // Add phone button effect
    const phoneButton = document.querySelector('.phone-button');
    if (phoneButton) {
        phoneButton.addEventListener('click', () => {
            phoneButton.classList.add('pulse');
            setTimeout(() => {
                phoneButton.classList.remove('pulse');
            }, 1000);
        });
    }
});

function createBackgroundElements() {
    const container = document.querySelector('.container');
    const bg = document.createElement('div');
    bg.classList.add('background-elements');
    
    // Create 5 floating elements
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Randomly assign education-related emoji
        const emojis = ['📚', '🎓', '✏️', '🔍', '📝', '🧠', '🎯', '🌟'];
        element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random position and animation delay
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        
        bg.appendChild(element);
    }
    
    // Insert before the container's first child
    document.body.insertBefore(bg, container);
    
    // Add floating element styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .background-elements {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }
        .floating-element {
            position: absolute;
            font-size: 2rem;
            opacity: 0.15;
            animation: float-around 15s infinite linear;
        }
        @keyframes float-around {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(100px, 50px) rotate(90deg);
            }
            50% {
                transform: translate(50px, 100px) rotate(180deg);
            }
            75% {
                transform: translate(-50px, 50px) rotate(270deg);
            }
        }
    `;
    document.head.appendChild(style);
}

function initScrollReveal() {
    const sections = document.querySelectorAll('section');
    
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe each section
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });
    
    // Add scroll reveal styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scroll-reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .pulse {
            animation: button-pulse 1s ease;
        }
        @keyframes button-pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
} 