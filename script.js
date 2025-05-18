document.addEventListener("DOMContentLoaded", function() {
    // Initialize variables
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const populationDetailsBtn = document.getElementById('population-details');
    const rentalDetailsBtn = document.getElementById('rental-details');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Smooth scrolling for navigation links
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            
            // Only apply smooth scroll for internal links
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetSection = document.querySelector(targetId);
                
                // Scroll to the target section with smooth behavior
                if (targetSection) {
                    const headerOffset = 70; // Adjust based on your header height
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close the mobile menu if it's open
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                }
            }
        });
    });
    
    // Add active class to nav items when scrolling
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Project Details Modal Functions
    function openProjectModal(title, content) {
        // Get the modal elements
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('projectModalLabel');
        const modalBody = document.getElementById('projectModalBody');
        
        // Set the modal content
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        
        // Open the modal using Bootstrap's modal method
        const projectModal = new bootstrap.Modal(modal);
        projectModal.show();
    }
    
    // Project Details Button Click Events
    if (populationDetailsBtn) {
        populationDetailsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectContent = `
                <div class="project-detail">
                    <img src="futureprediction.jpg" alt="Future Population Prediction" class="img-fluid mb-4">
                    <h4>Project Overview</h4>
                    <p>This data science project focuses on predicting future population trends based on historical demographic data and various socio-economic indicators. The aim was to create a robust model that can help in informed decision-making for urban planning, resource allocation, and policy development.</p>
                    
                    <h4>Key Features</h4>
                    <ul>
                        <li>Comprehensive data collection from multiple demographic sources</li>
                        <li>Advanced data cleaning and preprocessing techniques</li>
                        <li>Feature engineering to incorporate socio-economic factors</li>
                        <li>Machine learning model development and validation</li>
                        <li>Interactive visualization of prediction results</li>
                    </ul>
                    
                    <h4>Technologies Used</h4>
                    <p>Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn</p>
                    
                    <h4>Challenges and Solutions</h4>
                    <p>One of the main challenges was handling inconsistent historical data across different regions. To address this, we implemented a robust data normalization process and used ensemble modeling techniques to improve prediction accuracy.</p>
                    
                    <h4>Results</h4>
                    <p>The final model achieved a prediction accuracy of 92% when tested against known population changes, providing valuable insights for future planning initiatives.</p>
                </div>
            `;
            
            openProjectModal('Future Population Prediction - Details', projectContent);
        });
    }
    
    if (rentalDetailsBtn) {
        rentalDetailsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectContent = `
                <div class="project-detail">
                    <img src="house rental.jpg" alt="House Rental Management" class="img-fluid mb-4">
                    <h4>Project Overview</h4>
                    <p>The House Rental Management System is a comprehensive web application designed to streamline the rental process for both property owners and tenants. It provides an intuitive platform for property listings, tenant management, rent collection, and maintenance request handling.</p>
                    
                    <h4>Key Features</h4>
                    <ul>
                        <li>User-friendly property listing and search functionality</li>
                        <li>Secure user authentication and role-based access control</li>
                        <li>Automated rent reminder and payment tracking system</li>
                        <li>Maintenance request submission and tracking</li>
                        <li>Document management for lease agreements and receipts</li>
                        <li>Communication portal between owners and tenants</li>
                    </ul>
                    
                    <h4>Technologies Used</h4>
                    <p>HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL</p>
                    
                    <h4>Challenges and Solutions</h4>
                    <p>Creating a system that balanced the needs of both property owners and tenants was challenging. We conducted extensive user research and implemented an intuitive interface with separate dashboards for different user roles.</p>
                    
                    <h4>Results</h4>
                    <p>The application successfully reduced administrative overhead by 40% for property owners and improved communication efficiency between parties by providing a centralized platform for all rental-related activities.</p>
                </div>
            `;
            
            openProjectModal('House Rental Management - Details', projectContent);
        });
    }
    
    // Form validation and submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // FormSubmit will handle the actual submission
            // This is just for basic front-end validation and user feedback
            
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const subjectInput = this.querySelector('input[name="subject"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            
            let isValid = true;
            
            // Simple validation
            if (nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('is-invalid');
            } else {
                nameInput.classList.remove('is-invalid');
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                isValid = false;
                emailInput.classList.add('is-invalid');
            } else {
                emailInput.classList.remove('is-invalid');
            }
            
            if (subjectInput.value.trim() === '') {
                isValid = false;
                subjectInput.classList.add('is-invalid');
            } else {
                subjectInput.classList.remove('is-invalid');
            }
            
            if (messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('is-invalid');
            } else {
                messageInput.classList.remove('is-invalid');
            }
            
            // If not valid, prevent form submission
            if (!isValid) {
                e.preventDefault();
                formMessage.innerHTML = '<div class="alert alert-danger">Please fill in all required fields correctly.</div>';
                
                // Remove the message after 3 seconds
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 3000);
            } else {
                // Show a success message (this will show briefly before the form redirects)
                formMessage.innerHTML = '<div class="alert alert-success">Your message has been sent. Thank you!</div>';
            }
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Scroll to top button functionality
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.classList.add('scroll-top-btn');
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when the button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add animation to skill bars
    const skillSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    if (skillSection && progressBars.length > 0) {
        const animateSkills = function() {
            const sectionPos = skillSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            
            if (sectionPos < screenPos) {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('aria-valuenow') + '%';
                    bar.style.width = width;
                });
                // Remove the event listener after animation
                window.removeEventListener('scroll', animateSkills);
            }
        };
        
        // Initialize skill bars to 0% width
        progressBars.forEach(bar => {
            bar.style.width = '0%';
        });
        
        // Add scroll event listener for skill animation
        window.addEventListener('scroll', animateSkills);
        // Check initial position in case the skills section is already visible
        animateSkills();
    }
    
    // Add animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item, .experience-item');
    
    const animateOnScroll = function() {
        timelineItems.forEach(item => {
            const itemPos = item.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.2;
            
            if (itemPos < screenPos) {
                item.classList.add('animate');
            }
        });
    };
    
    // Add scroll event listener for timeline animation
    window.addEventListener('scroll', animateOnScroll);
    // Check initial position
    animateOnScroll();
    
    // Typewriter effect for hero section
    const heroTitle = document.querySelector('.hero-content h1');
    
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start the typewriter effect
        typeWriter();
    }
});