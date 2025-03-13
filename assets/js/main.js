/**
 * Camelus33 Tech Blog
 * Main JavaScript file
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  initMobileMenu();
  
  // Initialize code blocks
  initCodeBlocks();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
  
  // Initialize table of contents
  initTableOfContents();
  
  // Initialize theme toggle
  initThemeToggle();
  
  // Initialize search
  initSearch();
});

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (navLinks.classList.contains('active') && 
          !event.target.closest('.nav-links') && 
          !event.target.closest('.mobile-menu-toggle')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
}

/**
 * Code blocks initialization with copy button
 */
function initCodeBlocks() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(function(codeBlock) {
    // Create code block container
    const container = document.createElement('div');
    container.className = 'code-block-container';
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.title = 'Copy code';
    
    // Copy button click event
    copyButton.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.add('copied');
        
        setTimeout(function() {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.classList.remove('copied');
        }, 2000);
      }).catch(function(error) {
        console.error('Copy failed:', error);
      });
    });
    
    // Wrap code block
    const parent = codeBlock.parentNode;
    parent.parentNode.insertBefore(container, parent);
    container.appendChild(parent);
    container.appendChild(copyButton);
  });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Consider header height
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Table of contents functionality
 */
function initTableOfContents() {
  const tocContainer = document.getElementById('toc');
  const postContent = document.querySelector('.post-content');
  
  if (tocContainer && postContent) {
    const headings = postContent.querySelectorAll('h2, h3, h4');
    
    if (headings.length > 0) {
      const toc = document.createElement('ul');
      toc.className = 'toc-list';
      
      headings.forEach((heading, index) => {
        // Add ID to heading if missing
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
        
        // Create table of contents item
        const listItem = document.createElement('li');
        listItem.className = `toc-item toc-${heading.tagName.toLowerCase()}`;
        
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        
        listItem.appendChild(link);
        toc.appendChild(listItem);
        
        // Highlight current section
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('active');
          });
          
          listItem.classList.add('active');
          
          window.scrollTo({
            top: heading.offsetTop - 100,
            behavior: 'smooth'
          });
        });
      });
      
      tocContainer.appendChild(toc);
      
      // Highlight current section
      window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        headings.forEach((heading, index) => {
          const tocItem = document.querySelector(`.toc-item:nth-child(${index + 1})`);
          
          if (tocItem) {
            const nextHeading = headings[index + 1];
            
            if (
              scrollPosition >= heading.offsetTop - 120 &&
              (!nextHeading || scrollPosition < nextHeading.offsetTop - 120)
            ) {
              document.querySelectorAll('.toc-item').forEach(item => {
                item.classList.remove('active');
              });
              
              tocItem.classList.add('active');
            }
          }
        });
      });
    } else {
      tocContainer.innerHTML = '<p>Table of contents not found.</p>';
    }
  }
}

/**
 * Theme toggle functionality
 */
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (themeToggle) {
    // Load saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.classList.add('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.classList.remove('dark');
    }
    
    // Theme toggle click event
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      if (newTheme === 'dark') {
        themeToggle.classList.add('dark');
      } else {
        themeToggle.classList.remove('dark');
      }
    });
  }
}

/**
 * Search functionality
 */
function initSearch() {
  const searchToggle = document.querySelector('.search-toggle');
  const searchOverlay = document.getElementById('search');
  const searchClose = document.querySelector('.search-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchToggle && searchOverlay && searchClose && searchInput && searchResults) {
    // Open search overlay
    searchToggle.addEventListener('click', function(e) {
      e.preventDefault();
      searchOverlay.classList.add('active');
      document.body.classList.add('search-open');
      setTimeout(() => {
        searchInput.focus();
      }, 100);
    });
    
    // Close search overlay
    searchClose.addEventListener('click', function() {
      searchOverlay.classList.remove('active');
      document.body.classList.remove('search-open');
    });
    
    // Close search overlay with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
        document.body.classList.remove('search-open');
      }
    });
    
    // Close search overlay when clicking outside
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        document.body.classList.remove('search-open');
      }
    });
    
    // Search form submission event
    document.querySelector('.search-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      
      if (query.length > 0) {
        // Implement actual search logic here
        // Example: fetch('/search.json') etc. to get search data
        searchResults.innerHTML = '<p>Searching...</p>';
        
        // Temporary search results (should be replaced with actual AJAX request)
        setTimeout(() => {
          searchResults.innerHTML = `
            <p class="search-summary">"${query}"에 대한 검색 결과</p>
            <div class="search-results-list">
              <p>Search functionality is still under development. It will be available soon.</p>
            </div>
          `;
        }, 500);
      }
    });
  }
}

/**
 * Add intersection observer for animated elements
 */
function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', initAnimations); 