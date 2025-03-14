// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add login logic here
            alert('Login functionality will be implemented here');
        });
    }

    // Custom Package Form
    const customPackageForm = document.getElementById('customPackageForm');
    if (customPackageForm) {
        customPackageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            calculatePackage();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe package cards
    document.querySelectorAll('.package-card').forEach(card => {
        observer.observe(card);
    });

    // Observe custom package form
    const customPackage = document.querySelector('.custom-package');
    if (customPackage) {
        observer.observe(customPackage);
    }
});

// Calculate package price based on selections
function calculatePackage() {
    const hotels = {
        'Luxury Resort Cairo': 200,
        'Nile View Hotel': 150,
        'Desert Oasis Resort': 180
    };

    const restaurants = {
        'Traditional Egyptian': 50,
        'International Cuisine': 70,
        'Luxury Dining': 100
    };

    const transport = {
        'Private Car': 80,
        'Luxury Van': 120,
        'Group Bus': 40
    };

    const flights = {
        'Economy': 300,
        'Business': 800,
        'First Class': 1500
    };

    // Get selected values
    const selectedHotel = document.querySelector('select:nth-of-type(1)').value;
    const selectedRestaurant = document.querySelector('select:nth-of-type(2)').value;
    const selectedTransport = document.querySelector('select:nth-of-type(3)').value;
    const selectedFlight = document.querySelector('select:nth-of-type(4)').value;

    // Calculate total
    let total = 0;
    total += hotels[selectedHotel] || 0;
    total += restaurants[selectedRestaurant] || 0;
    total += transport[selectedTransport] || 0;
    total += flights[selectedFlight] || 0;

    if (total > 0) {
        alert(`Estimated package price: $${total}\nPlease contact us to finalize your booking.`);
    } else {
        alert('Please select all options to calculate the package price.');
    }
}