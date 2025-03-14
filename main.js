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

// Add animation for package cards
const packageCards = document.querySelectorAll('.package-card');
packageCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});