// Prompt Detail Page JavaScript

// Get prompt data from the imported data
function getPromptDataFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const promptId = urlParams.get('id');
    
    if (!promptId) {
        console.error('No prompt ID provided in URL');
        return null;
    }
    
    // Access the global promptData from prompt-data.js
    if (typeof promptData === 'undefined') {
        console.error('promptData not found. Make sure prompt-data.js is loaded first.');
        return null;
    }
    
    // Look up by filename (e.g., "1.png") instead of numeric ID
    const prompt = promptData[promptId];
    return prompt;
}

// Update page content with prompt data
function updatePageContent() {
    const prompt = getPromptDataFromURL();
    
    if (!prompt) {
        console.error('Prompt not found');
        // Show error or redirect to home
        document.title = 'Prompt Not Found - Inspiration Prompt';
        return;
    }
    
    // Update page title
    document.title = `${prompt.title} - Inspiration Prompt`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = prompt.description;
    }
    
    // Update image
    const detailImage = document.querySelector('.detail-image');
    if (detailImage) {
        detailImage.src = prompt.image;
        detailImage.alt = prompt.title;
    }
    
    // Update title
    const detailTitle = document.querySelector('.detail-title');
    if (detailTitle) {
        detailTitle.textContent = prompt.title;
    }

    // Update date
    const detailDate = document.querySelector('.detail-date');
    if (detailDate) {
        detailDate.textContent = `Posted on ${prompt.date || 'September 30, 2025'}`;
    }
    
    // Update prompt description
    const promptDescription = document.querySelector('.prompt-card-description');
    if (promptDescription) {
        promptDescription.textContent = prompt.prompt;
    }
    
    // Update likes count
    const likesCount = document.querySelector('.likes-count');
    if (likesCount) {
        likesCount.textContent = prompt.likes;
    }
}

// Copy prompt functionality
function copyPrompt() {
    const promptText = document.querySelector('.prompt-card-description').textContent;
    
    // Create temporary textarea to copy text
    const textarea = document.createElement('textarea');
    textarea.value = promptText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Show feedback
    const copyBtn = document.querySelector('.copy-prompt-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<span class="copy-icon">✓</span> Copied!';
    copyBtn.style.background = '#10b981';
    
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.background = '#000000';
    }, 2000);
}

// Try prompt functionality
function tryPrompt() {
    // Redirect to generation page or show generation interface
    alert('Redirecting to image generation with this prompt...');
    // In a real implementation, this would redirect to a generation page
    // window.location.href = '/generate?prompt=' + encodeURIComponent(promptText);
}

// Add click event to detail image for fullscreen view
document.addEventListener('DOMContentLoaded', function() {
    // Update page content with prompt data
    updatePageContent();
    
    const detailImage = document.querySelector('.detail-image');
    if (detailImage) {
        detailImage.addEventListener('click', function() {
            // Create fullscreen overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                cursor: pointer;
            `;
            
            const fullscreenImg = document.createElement('img');
            fullscreenImg.src = this.src;
            fullscreenImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 8px;
            `;
            
            overlay.appendChild(fullscreenImg);
            document.body.appendChild(overlay);
            
            // Remove overlay on click
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            // Remove overlay on ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            });
        });
    }
});

// Smooth scroll behavior for internal links
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