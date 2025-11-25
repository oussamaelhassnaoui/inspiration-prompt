// Explore page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize search functionality
    initSearch();
    
    // Initialize filter functionality
    initFilters();
    
    // Initialize load more functionality
    initLoadMore();
    
    // Initialize advanced filtering
    initAdvancedFilters();
});

// Enhanced search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput) {
        // Real-time search
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            performSearch(query);
        });
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.toLowerCase().trim();
                performSearch(query);
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.toLowerCase().trim();
            performSearch(query);
        });
    }
}

// Perform search across all prompt data
function performSearch(query) {
    const cards = document.querySelectorAll('.prompt-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const tags = card.getAttribute('data-tags').toLowerCase();
        const model = card.querySelector('.card-model').textContent.toLowerCase();
        const prompt = card.querySelector('.copy-btn').getAttribute('data-prompt').toLowerCase();
        
        const matches = title.includes(query) || 
                       tags.includes(query) || 
                       model.includes(query) || 
                       prompt.includes(query);
        
        if (matches || query === '') {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show search results message
    updateSearchResults(visibleCount, query);
}

// Update search results message
function updateSearchResults(count, query) {
    // Remove existing message
    const existingMessage = document.querySelector('.search-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (query && count === 0) {
        const message = document.createElement('div');
        message.className = 'search-results-message';
        message.innerHTML = `
            <div class="glass" style="padding: 2rem; text-align: center; margin: 2rem 0;">
                <h3>No results found for "${query}"</h3>
                <p>Try different keywords or browse all prompts below.</p>
                <button class="btn btn-primary" onclick="clearSearch()">Clear Search</button>
            </div>
        `;
        
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.parentNode.insertBefore(message, galleryGrid);
    }
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
        performSearch('');
    }
    
    // Remove search results message
    const message = document.querySelector('.search-results-message');
    if (message) {
        message.remove();
    }
}

// Enhanced filter functionality
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.parentElement.classList.contains('filter-buttons') ? 
                             this.parentElement.previousElementSibling.textContent.toLowerCase() : 'category';
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            const siblingButtons = this.parentElement.querySelectorAll('.filter-btn');
            siblingButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Apply filter
            applyFilter(filterType, filter);
        });
    });
}

// Apply filter based on type
function applyFilter(filterType, filter) {
    const cards = document.querySelectorAll('.prompt-card');
    
    cards.forEach(card => {
        let matches = false;
        
        if (filterType.includes('model')) {
            const model = card.querySelector('.card-model').textContent.toLowerCase();
            matches = filter === 'all' || model.includes(filter);
        } else if (filterType.includes('category')) {
            const tags = card.getAttribute('data-tags').toLowerCase();
            matches = filter === 'all' || tags.includes(filter);
        }
        
        if (matches) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update filter results
    updateFilterResults(filter);
}

// Update filter results message
function updateFilterResults(filter) {
    // Remove existing message
    const existingMessage = document.querySelector('.filter-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (filter !== 'all') {
        const visibleCards = document.querySelectorAll('.prompt-card[style*="block"], .prompt-card:not([style*="none"])');
        const message = document.createElement('div');
        message.className = 'filter-results-message';
        message.innerHTML = `
            <div class="glass" style="padding: 1rem; text-align: center; margin: 1rem 0;">
                <p>Showing ${visibleCards.length} prompts for "${filter}"</p>
            </div>
        `;
        
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.parentNode.insertBefore(message, galleryGrid);
    }
}

// Advanced filtering with multiple criteria
function initAdvancedFilters() {
    // Combine search and filters
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            applyCombinedFilters();
        });
    }
}

// Apply combined search and filter criteria
function applyCombinedFilters() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
    const activeModelFilter = document.querySelector('.filter-group:first-child .filter-btn.active').getAttribute('data-filter');
    const activeCategoryFilter = document.querySelector('.filter-group:last-child .filter-btn.active').getAttribute('data-filter');
    
    const cards = document.querySelectorAll('.prompt-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const tags = card.getAttribute('data-tags').toLowerCase();
        const model = card.querySelector('.card-model').textContent.toLowerCase();
        const prompt = card.querySelector('.copy-btn').getAttribute('data-prompt').toLowerCase();
        
        // Search criteria
        const searchMatches = searchQuery === '' || 
                            title.includes(searchQuery) || 
                            tags.includes(searchQuery) || 
                            model.includes(searchQuery) || 
                            prompt.includes(searchQuery);
        
        // Model filter criteria
        const modelMatches = activeModelFilter === 'all' || model.includes(activeModelFilter);
        
        // Category filter criteria
        const categoryMatches = activeCategoryFilter === 'all' || tags.includes(activeCategoryFilter);
        
        // Combined criteria
        const matches = searchMatches && modelMatches && categoryMatches;
        
        if (matches) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update results message
    updateCombinedResults(visibleCount, searchQuery, activeModelFilter, activeCategoryFilter);
}

// Update combined results message
function updateCombinedResults(count, searchQuery, modelFilter, categoryFilter) {
    // Remove existing message
    const existingMessage = document.querySelector('.combined-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (count === 0 && (searchQuery || modelFilter !== 'all' || categoryFilter !== 'all')) {
        const message = document.createElement('div');
        message.className = 'combined-results-message';
        
        let filterText = '';
        if (searchQuery) filterText += `"${searchQuery}" `;
        if (modelFilter !== 'all') filterText += `${modelFilter} `;
        if (categoryFilter !== 'all') filterText += `${categoryFilter} `;
        
        message.innerHTML = `
            <div class="glass" style="padding: 2rem; text-align: center; margin: 2rem 0;">
                <h3>No results found</h3>
                <p>No prompts match your criteria: ${filterText}</p>
                <button class="btn btn-primary" onclick="clearAllFilters()">Clear All Filters</button>
            </div>
        `;
        
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.parentNode.insertBefore(message, galleryGrid);
    }
}

// Clear all filters
function clearAllFilters() {
    // Clear search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset filters to "All"
    const allButtons = document.querySelectorAll('.filter-btn[data-filter="all"]');
    allButtons.forEach(btn => {
        const siblingButtons = btn.parentElement.querySelectorAll('.filter-btn');
        siblingButtons.forEach(sibling => sibling.classList.remove('active'));
        btn.classList.add('active');
    });
    
    // Apply combined filters
    applyCombinedFilters();
}

// Load more functionality
function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    let currentPage = 1;
    const itemsPerPage = 12;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            loadMorePrompts(currentPage + 1, itemsPerPage);
            currentPage++;
        });
    }
}

// Load more prompts (simulated)
function loadMorePrompts(page, itemsPerPage) {
    const galleryGrid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more');
    
    // Simulate loading
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    
    setTimeout(() => {
        // Create new prompt cards
        const newPrompts = generatePrompts(page, itemsPerPage);
        
        newPrompts.forEach(prompt => {
            const card = createPromptCard(prompt);
            galleryGrid.appendChild(card);
        });
        
        // Reset button
        loadMoreBtn.textContent = 'Load More Prompts';
        loadMoreBtn.disabled = false;
        
        // Re-initialize copy buttons
        initializeCopyButtons();
        
        // Show success message
        showToast(`Loaded ${itemsPerPage} more prompts!`, 'success');
        
    }, 1000);
}

// Generate sample prompts
function generatePrompts(page, count) {
    const prompts = [
        {
            title: "Cosmic Nebula",
            model: "Stable Diffusion XL",
            tags: ["space", "abstract", "sci-fi"],
            prompt: "Vibrant cosmic nebula with swirling galaxies and bright stars, space photography style, deep space exploration theme"
        },
        {
            title: "Medieval Knight",
            model: "Midjourney V6",
            tags: ["character", "fantasy", "medieval"],
            prompt: "Medieval knight in shining armor with detailed engravings, fantasy character design, heroic pose with sword"
        },
        {
            title: "Modern Kitchen",
            model: "DALL-E 3",
            tags: ["interior", "modern", "kitchen"],
            prompt: "Modern kitchen interior with sleek appliances and marble countertops, minimalist design, bright lighting"
        },
        {
            title: "Dragon's Lair",
            model: "Leonardo AI",
            tags: ["fantasy", "creature", "environment"],
            prompt: "Dragon's lair with treasure hoard and mystical atmosphere, fantasy cave environment, dramatic lighting"
        }
    ];
    
    const newPrompts = [];
    for (let i = 0; i < count; i++) {
        const prompt = prompts[i % prompts.length];
        newPrompts.push({
            ...prompt,
            title: `${prompt.title} ${page}-${i + 1}`,
            imageUrl: `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt.prompt)}&image_size=square`
        });
    }
    
    return newPrompts;
}

// Create prompt card element
function createPromptCard(prompt) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.setAttribute('data-tags', prompt.tags.join(' '));
    
    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${prompt.imageUrl}" alt="${prompt.title}" loading="lazy">
            <div class="card-overlay">
                <button class="copy-btn" data-prompt="${prompt.prompt}">Copy Prompt</button>
            </div>
        </div>
        <div class="card-info">
            <h3 class="card-title">${prompt.title}</h3>
            <p class="card-model">${prompt.model}</p>
            <div class="card-tags">
                ${prompt.tags.map(tag => `<span class="tag">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Initialize copy buttons for new cards
function initializeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn:not([data-initialized])');
    copyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            copyPrompt(this);
        });
        button.setAttribute('data-initialized', 'true');
    });
}

// Copy prompt function (enhanced)
async function copyPrompt(button) {
    const prompt = button.getAttribute('data-prompt');
    
    try {
        await navigator.clipboard.writeText(prompt);
        
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
        }, 2000);
        
        // Show toast notification
        showToast('Prompt copied to clipboard!', 'success');
        
    } catch (err) {
        console.error('Failed to copy prompt:', err);
        showToast('Failed to copy prompt', 'error');
    }
}