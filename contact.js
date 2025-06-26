// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    fetch('send-email.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
    .then(response => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;

        if (response === "success") {
            contactForm.reset();
            showNotification("Message sent successfully!", "success");
        } else {
            showNotification("Error sending message. Try again later.", "error");
        }
    }).catch(error => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        showNotification("Failed to send. Check your internet or try again.", "error");
    });
});

    }
    
    // Newsletter subscription in footer
    const footerForm = document.querySelector('.footer-form');
    
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = footerForm.querySelector('input[type="email"]');
            
            if (!emailInput.value) {
                showNotification('Please enter your email address', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate subscription
            console.log('Newsletter subscription:', emailInput.value);
            footerForm.reset();
            showNotification('Thanks for subscribing!', 'success');
        });
    }
    
    // Function to show notifications
    function showNotification(message, type) {
        // Create notification element if it doesn't exist
        let notification = document.querySelector('.notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'notification';
            document.body.appendChild(notification);
            
            // Add styles if not in stylesheet
            notification.style.position = 'fixed';
            notification.style.bottom = '20px';
            notification.style.right = '20px';
            notification.style.padding = '15px 25px';
            notification.style.borderRadius = '5px';
            notification.style.color = 'white';
            notification.style.fontWeight = '500';
            notification.style.zIndex = '1000';
            notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            notification.style.transform = 'translateY(20px)';
            notification.style.opacity = '0';
            notification.style.transition = 'all 0.3s ease-in-out';
        }
        
        // Set type-specific styles
        if (type === 'success') {
            notification.style.backgroundColor = 'var(--secondary, #10b981)';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#ef4444';
        } else {
            notification.style.backgroundColor = 'var(--primary, #2563eb)';
        }
        
        // Set message
        notification.textContent = message;
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 10);
        
        // Auto remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateY(20px)';
            notification.style.opacity = '0';
            
            // Remove from DOM after animation
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
});