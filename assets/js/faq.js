// FAQ page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ accordion
    initFAQAccordion();
    
    // Initialize FAQ search
    initFAQSearch();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize FAQ categories
    initFAQCategories();
});

// Initialize FAQ accordion functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        // Set initial state
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        
        question.addEventListener('click', function() {
            toggleFAQItem(item, answer, icon);
        });
    });
}

// Toggle individual FAQ item
function toggleFAQItem(item, answer, icon) {
    const isOpen = item.classList.contains('active');
    
    if (isOpen) {
        // Close the item
        answer.style.maxHeight = '0';
        answer.style.padding = '0';
        item.classList.remove('active');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other items (optional - remove if you want multiple items open)
        closeAllFAQItems();
        
        // Open the item
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.padding = '1rem 0';
        item.classList.add('active');
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Close all FAQ items
function closeAllFAQItems() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        answer.style.maxHeight = '0';
        answer.style.padding = '0';
        item.classList.remove('active');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    });
}

// Initialize FAQ search functionality
function initFAQSearch() {
    // Create search container if it doesn't exist
    const existingSearch = document.querySelector('.faq-search');
    if (!existingSearch) {
        const faqContent = document.querySelector('.faq-content');
        if (faqContent) {
            const searchContainer = document.createElement('div');
            searchContainer.className = 'faq-search';
            searchContainer.innerHTML = `
                <div class="search-container">
                    <input type="text" id="faq-search-input" placeholder="Search FAQs..." class="faq-search-input">
                    <button class="faq-search-btn" id="faq-search-btn">Search</button>
                    <button class="faq-clear-btn" id="faq-clear-btn" style="display: none;">Clear</button>
                </div>
                <div class="search-results" id="faq-search-results"></div>
            `;
            faqContent.insertBefore(searchContainer, faqContent.firstChild);
        }
    }
    
    const searchInput = document.getElementById('faq-search-input');
    const searchBtn = document.getElementById('faq-search-btn');
    const clearBtn = document.getElementById('faq-clear-btn');
    
    if (searchInput) {
        // Real-time search
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            performFAQSearch(query);
            
            // Show/hide clear button
            if (clearBtn) {
                clearBtn.style.display = query ? 'inline-block' : 'none';
            }
        });
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.toLowerCase().trim();
                performFAQSearch(query);
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.toLowerCase().trim();
            performFAQSearch(query);
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            clearFAQSearch();
        });
    }
}

// Perform FAQ search
function performFAQSearch(query) {
    const faqItems = document.querySelectorAll('.faq-item');
    const resultsContainer = document.getElementById('faq-search-results');
    let matchCount = 0;
    
    if (!query) {
        clearFAQSearch();
        return;
    }
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        const matches = question.includes(query) || answer.includes(query);
        
        if (matches) {
            item.style.display = 'block';
            highlightSearchTerms(item, query);
            matchCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show search results message
    if (resultsContainer) {
        resultsContainer.innerHTML = `<p>Found ${matchCount} result${matchCount !== 1 ? 's' : ''} for "${query}"</p>`;
        resultsContainer.style.display = 'block';
    }
    
    // Auto-expand first matching item
    const firstVisibleItem = document.querySelector('.faq-item[style*="block"]');
    if (firstVisibleItem && matchCount > 0) {
        const answer = firstVisibleItem.querySelector('.faq-answer');
        const icon = firstVisibleItem.querySelector('.faq-icon');
        toggleFAQItem(firstVisibleItem, answer, icon);
    }
}

// Clear FAQ search
function clearFAQSearch() {
    const faqItems = document.querySelectorAll('.faq-item');
    const resultsContainer = document.getElementById('faq-search-results');
    
    faqItems.forEach(item => {
        item.style.display = 'block';
        removeHighlight(item);
    });
    
    if (resultsContainer) {
        resultsContainer.style.display = 'none';
    }
}

// Highlight search terms
function highlightSearchTerms(item, query) {
    const question = item.querySelector('.faq-question h3');
    const answer = item.querySelector('.faq-answer');
    
    // Remove existing highlights
    removeHighlight(item);
    
    // Add highlights
    if (question.textContent.toLowerCase().includes(query)) {
        question.innerHTML = question.textContent.replace(
            new RegExp(query, 'gi'),
            match => `<mark>${match}</mark>`
        );
    }
    
    if (answer.textContent.toLowerCase().includes(query)) {
        answer.innerHTML = answer.textContent.replace(
            new RegExp(query, 'gi'),
            match => `<mark>${match}</mark>`
        );
    }
}

// Remove highlight
function removeHighlight(item) {
    const question = item.querySelector('.faq-question h3');
    const answer = item.querySelector('.faq-answer');
    
    // Remove mark tags
    question.innerHTML = question.textContent;
    answer.innerHTML = answer.innerHTML.replace(/<mark>(.*?)<\/mark>/gi, '$1');
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize FAQ categories
function initFAQCategories() {
    const categories = document.querySelectorAll('.faq-category');
    
    categories.forEach((category, index) => {
        // Add animation delay for staggered appearance
        category.style.animationDelay = `${index * 0.1}s`;
        
        // Add click-to-expand functionality for category titles
        const title = category.querySelector('.category-title');
        if (title) {
            title.style.cursor = 'pointer';
            title.addEventListener('click', function() {
                toggleCategory(category);
            });
        }
    });
}

// Toggle entire category
function toggleCategory(category) {
    const faqItems = category.querySelectorAll('.faq-item');
    const isExpanded = category.classList.contains('category-expanded');
    
    if (isExpanded) {
        // Collapse all items in category
        faqItems.forEach(item => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            answer.style.maxHeight = '0';
            answer.style.padding = '0';
            item.classList.remove('active');
            icon.textContent = '+';
            icon.style.transform = 'rotate(0deg)';
        });
        category.classList.remove('category-expanded');
    } else {
        // Expand all items in category
        faqItems.forEach(item => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '1rem 0';
            item.classList.add('active');
            icon.textContent = '−';
            icon.style.transform = 'rotate(180deg)';
        });
        category.classList.add('category-expanded');
    }
}

// Add CSS for FAQ page
const faqStyle = document.createElement('style');
faqStyle.textContent = `
    /* FAQ Page Styles */
    .faq-content {
        padding: 120px 0 80px;
        min-height: 100vh;
    }
    
    .page-header {
        text-align: center;
        padding: 60px 0;
        background: linear-gradient(135deg, #0f0f23 0%, #1a1a3a 100%);
        margin-bottom: 0;
    }
    
    .page-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        background: linear-gradient(135deg, #ffffff 0%, #c7d2fe 50%, #a78bfa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .page-subtitle {
        font-size: 1.25rem;
        color: var(--text-muted);
        max-width: 600px;
        margin: 0 auto;
    }
    
    .faq-search {
        margin-bottom: 3rem;
        text-align: center;
    }
    
    .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    .faq-search-input {
        padding: 1rem 1.5rem;
        border: 1px solid var(--border);
        border-radius: 12px;
        background: var(--surface);
        color: var(--text);
        font-size: 1rem;
        width: 100%;
        max-width: 400px;
        backdrop-filter: blur(20px);
        transition: all 0.3s ease;
    }
    
    .faq-search-input:focus {
        outline: none;
        border-color: #6366f1;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }
    
    .faq-search-btn, .faq-clear-btn {
        padding: 1rem 1.5rem;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .faq-search-btn {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
    }
    
    .faq-clear-btn {
        background: var(--surface);
        color: var(--text);
        border: 1px solid var(--border);
    }
    
    .faq-search-btn:hover, .faq-clear-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    
    .search-results {
        color: var(--text-muted);
        font-style: italic;
        margin-top: 1rem;
        display: none;
    }
    
    .faq-grid {
        display: grid;
        gap: 3rem;
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .faq-category {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .category-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: var(--text);
        cursor: pointer;
        transition: color 0.3s ease;
    }
    
    .category-title:hover {
        color: #6366f1;
    }
    
    .faq-item {
        background: var(--surface);
        backdrop-filter: blur(20px);
        border: 1px solid var(--border);
        border-radius: 12px;
        margin-bottom: 1rem;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .faq-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    
    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .faq-question:hover {
        background: rgba(99, 102, 241, 0.1);
    }
    
    .faq-question h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--text);
        margin: 0;
        flex: 1;
    }
    
    .faq-icon {
        font-size: 1.5rem;
        font-weight: bold;
        color: #6366f1;
        transition: transform 0.3s ease;
        min-width: 24px;
        text-align: center;
    }
    
    .faq-answer {
        padding: 0;
        transition: max-height 0.3s ease, padding 0.3s ease;
    }
    
    .faq-answer p {
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .faq-answer ul {
        list-style: none;
        padding-left: 0;
        margin-bottom: 1rem;
    }
    
    .faq-answer li {
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;
    }
    
    .faq-answer li::before {
        content: '•';
        color: #6366f1;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .faq-answer strong {
        color: var(--text);
        font-weight: 600;
    }
    
    mark {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        padding: 0.125rem 0.25rem;
        border-radius: 4px;
        font-weight: 600;
    }
    
    .faq-contact {
        margin-top: 4rem;
        text-align: center;
    }
    
    .contact-card {
        padding: 3rem;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
    
    .contact-title {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--text);
    }
    
    .contact-description {
        color: var(--text-muted);
        font-size: 1.125rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }
    
    .contact-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
        .page-title {
            font-size: 2.5rem;
        }
        
        .search-container {
            flex-direction: column;
            align-items: stretch;
        }
        
        .faq-search-input {
            max-width: none;
        }
        
        .faq-question {
            padding: 1rem;
        }
        
        .faq-question h3 {
            font-size: 1rem;
        }
        
        .contact-card {
            padding: 2rem;
        }
        
        .contact-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .contact-buttons .btn {
            width: 100%;
            max-width: 250px;
        }
    }
    
    @media (max-width: 480px) {
        .page-title {
            font-size: 2rem;
        }
        
        .category-title {
            font-size: 1.25rem;
        }
        
        .contact-title {
            font-size: 1.5rem;
        }
        
        .contact-description {
            font-size: 1rem;
        }
    }
`;
document.head.appendChild(faqStyle);