// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Trigger after scrolling 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Home Navbar
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll to the target element smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scroll to the top of the target element
                });
            }
        });
    });
});

// Typing effect for job title
document.addEventListener('DOMContentLoaded', function () {
    const words = ["Web Developer", "UI/UX Designer", "Software Developer"];
    let index = 0;
    let wordIndex = 0;
    let currentWord = '';
    let letter = '';
    const typingEffectElement = document.querySelector('.typing-effect');

    function type() {
        if (wordIndex < words[index].length) {
            currentWord = words[index];
            letter = currentWord.charAt(wordIndex);
            typingEffectElement.textContent += letter;
            wordIndex++;
            setTimeout(type, 150); // Typing speed
        } else {
            setTimeout(deleteText, 2000); // Pause before deleting
        }
    }

    function deleteText() {
        if (wordIndex > 0) {
            typingEffectElement.textContent = currentWord.slice(0, wordIndex - 1);
            wordIndex--;
            setTimeout(deleteText, 100); // Deleting speed
        } else {
            index = (index + 1) % words.length; // Move to the next word, loop back
            setTimeout(type, 500); // Pause before starting to type the next word
        }
    }

    // Start typing effect
    type();
});



// Particles.js configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ccff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ccff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3, // Adjust this speed to make particles appear to move
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            }
        }
    },
    retina_detect: true
});

// About Me skills, experience, and education effects
document.querySelectorAll('.bullet').forEach(item => {
    item.addEventListener('click', function () {
        // Hide all personal info sections
        document.querySelectorAll('.personal-info').forEach(info => {
            info.classList.remove('active');
        });

        // Get the corresponding info ID
        const infoId = this.getAttribute('data-info');
        // Show the corresponding section
        const infoSection = document.getElementById(`${infoId}-info`);
        if (infoSection) {
            infoSection.classList.add('active');
        }
    });
});
