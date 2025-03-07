document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu && navMenu.classList.contains('active') && !event.target.closest('.site-nav')) {
      navMenu.classList.remove('active');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      e.preventDefault();
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update URL
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Add active class to nav items based on scroll position
  function setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
      
      if (navItem && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-menu a').forEach(item => {
          item.classList.remove('active');
        });
        navItem.classList.add('active');
      }
    });
  }
  
  // Call on scroll
  window.addEventListener('scroll', setActiveNavItem);
  
  // Initialize on page load
  setActiveNavItem();
  
  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkIfInView() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;
    
    animateElements.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;
      
      if (
        (elementBottomPosition >= windowTopPosition && elementTopPosition <= windowBottomPosition) ||
        (elementTopPosition <= windowTopPosition && elementBottomPosition >= windowBottomPosition)
      ) {
        element.classList.add('animated');
      }
    });
  }
  
  window.addEventListener('scroll', checkIfInView);
  window.addEventListener('resize', checkIfInView);
  
  // Initialize on page load
  checkIfInView();
}); 