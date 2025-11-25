// Main JavaScript functionality for InspirationPrompt.com

// DOM Elements (with null checks to prevent errors)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const copyButtons = document.querySelectorAll('.copy-btn');

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.style.background = theme === 'dark' ? '#2D2D2D' : '#949494';
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    if (!hamburger || !navMenu) return;
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu when clicking outside
function closeMobileMenu(event) {
    if (!hamburger || !navMenu) return;
    
    if (!event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Theme toggle
function toggleTheme() {
    if (!themeToggle) return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Copy prompt to clipboard
async function copyPrompt(button) {
    if (!button) return;
    
    const prompt = button.getAttribute('data-prompt');
    if (!prompt) return;
    
    try {
        await navigator.clipboard.writeText(prompt);
        
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        
        // Reset after 1.5 seconds
        setTimeout(() => {
            button.textContent = originalText;
        }, 1500);
        
    } catch (err) {
        console.error('Failed to copy prompt:', err);
        
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = prompt;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 1500);
    }
}



// Smooth scrolling for anchor links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// Add loading animation to images
function addImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.6';
            this.style.display = 'block'; // Show even if broken
        });
        
        // Only set opacity transition if image is not already loaded
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.2s ease';
        }
    });
}


// Initialize search functionality (for explore page)
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            filterPrompts(query);
        });
    }
}

// Filter prompts based on search query
function filterPrompts(query) {
    const cards = document.querySelectorAll('.prompt-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const tags = card.getAttribute('data-tags')?.toLowerCase() || '';
        const description = card.querySelector('.card-description')?.textContent.toLowerCase() || '';
        
        const matches = title.includes(query) || tags.includes(query) || description.includes(query);
        
        if (matches || query === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize filter functionality (for explore page)
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            filterByTag(filter);
        });
    });
}

// Filter cards by tag
function filterByTag(tag) {
    const cards = document.querySelectorAll('.prompt-card');
    
    cards.forEach(card => {
        const tags = card.getAttribute('data-tags')?.toLowerCase() || '';
        
        if (tag === 'all' || tags.includes(tag.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}



// Add intersection observer for animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements
    const elements = document.querySelectorAll('.prompt-card, .section-header');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(el);
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize theme
        initTheme();
        
        // Add event listeners
        if (hamburger) {
            hamburger.addEventListener('click', toggleMobileMenu);
        }
        
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Add copy functionality to buttons
        copyButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                copyPrompt(this);
            });
        });
        
        // Add smooth scrolling
        smoothScroll();
        
        // Add image loading effects
        addImageLoading();
        
        // Add card hover effects
        addCardEffects();
        
    } catch (error) {
        console.error('Error initializing page:', error);
        // Ensure page remains visible even if there are errors
        document.body.style.opacity = '1';
    }
    
    // Initialize search and filters (if on explore page)
    initSearch();
    initFilters();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Add loading animation with timeout fallback
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100); // Small delay to ensure DOM is ready
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .filter-btn.active {
        background: var(--primary-pink);
        color: var(--text);
    }
`;
document.head.appendChild(style);

// Load More Images Functionality
const loadMoreBtn = document.getElementById('load-more-btn');
const featuredGrid = document.querySelector('.featured-grid');
let currentImageIndex = 9; // Start after the initial 9 images
let isLoading = false;

// Available images from assets/images folder (using the ones we haven't used yet)
const availableImages = [
    '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg',
    '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg',
    '30.jpg', '31.jpg', '32.jpg', '33.jpg'
];

// Sample data for new cards
const samplePrompts = [
    {
        category: "Aesthetic",
        model: "Nano Banana Gemini 2.5",
        likes: 56,
        tags: "nature waterfall forest sunlight"
    },
    {
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        likes: 43,
        tags: "urban cityscape twilight architecture"
    },
    {
        category: "Urban",
        model: "Nano Banana Gemini 2.5",
        likes: 68,
        tags: "portrait natural lighting emotion"
    },
    {
        category: "Atmosphere",
        model: "Stable Diffusion XL",
        likes: 37,
        tags: "abstract colorful dynamic flowing"
    },
    {
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        likes: 52,
        tags: "black and white, dramatic lighting, high contrast, portrait, studio, emotional, introspective"
    },
    {
        category: "Portrait",
        model: "Nano Banana Gemini 2.5",
        likes: 57,
        tags: "fantasy magical mystical enchanted",
        premium: true
    }
];

function createPromptCard(imageSrc, promptData, index) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.setAttribute('data-tags', promptData.tags);
    
    // Use the actual image filename as the ID (e.g., "10.png", "11.png", etc.)
    const promptId = imageSrc; // This will be something like "10.png"
    
    card.innerHTML = `
        <div class="card-image-wrapper">
            <a href="prompt-detail.html?id=${promptId}" class="card-image-link">
                <img src="assets/images/${imageSrc}" alt="${promptData.category} Image" loading="lazy">
            </a>
        </div>
        <div class="card-info">
            <div class="card-header">
                <span class="card-category">${promptData.category}</span>
                <span class="card-likes">♥ ${promptData.likes}</span>
            </div>
        </div>
    `;
    
    return card;
}

function loadMoreImages() {
    if (isLoading || currentImageIndex >= availableImages.length) return;
    
    isLoading = true;
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    
    // Simulate loading delay
    setTimeout(() => {
        const fragment = document.createDocumentFragment();
        const imagesToLoad = Math.min(6, availableImages.length - currentImageIndex);
        
        for (let i = 0; i < imagesToLoad; i++) {
            const imageIndex = currentImageIndex + i;
            const imageName = availableImages[imageIndex];
            
            // Get the actual prompt data for this image
            const promptData = window.promptData && window.promptData[imageName] ? window.promptData[imageName] : null;
            
            // Use actual prompt data if available, otherwise use sample data
            const cardData = promptData || samplePrompts[i % samplePrompts.length];
            
            const card = createPromptCard(
                imageName,
                cardData,
                imageIndex
            );
            fragment.appendChild(card);
        }
        
        featuredGrid.appendChild(fragment);
        currentImageIndex += imagesToLoad;
        
        // Reinitialize scroll animations for new cards
        addScrollAnimations();
        
        isLoading = false;
        
        if (currentImageIndex >= availableImages.length) {
            loadMoreBtn.textContent = 'No More Images';
            loadMoreBtn.disabled = true;
        } else {
            loadMoreBtn.textContent = 'Load More';
            loadMoreBtn.disabled = false;
        }
    }, 800);
}

// Add load more event listener
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMoreImages);
}