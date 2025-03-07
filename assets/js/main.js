/* Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  // 모바일 메뉴 토글
  initMobileMenu();
  
  // 스크롤 시 헤더 스타일 변경
  initScrollHeader();
  
  // 스크롤 애니메이션
  initScrollAnimations();
  
  // 스무스 스크롤
  initSmoothScroll();
});

/**
 * 모바일 메뉴 토글 기능 초기화
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
    
    // 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
      if (navMenu.classList.contains('active') && 
          !e.target.closest('.site-nav') && 
          !e.target.closest('.menu-toggle')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * 스크롤 시 헤더 스타일 변경 기능 초기화
 */
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // 초기 스크롤 위치에 따른 스타일 적용
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    }
  }
}

/**
 * 스크롤 애니메이션 초기화
 */
function initScrollAnimations() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
  }
}

/**
 * 부드러운 스크롤 기능 초기화
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // 네비게이션 메뉴가 열려있으면 닫기
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const menuToggle = document.querySelector('.menu-toggle');
          if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
          }
        }
        
        // 스크롤 애니메이션
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // URL 해시 업데이트
        history.pushState(null, null, targetId);
      }
    });
  });
}

/**
 * 현재 페이지 URL에 따라 네비게이션 메뉴 활성화
 */
function setActiveMenuItem() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || 
        (linkPath === '/' && currentPath === '') || 
        (linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });
}

/**
 * 테마 전환 기능 (다크모드/라이트모드)
 */
function toggleTheme() {
  const body = document.body;
  const isDarkMode = body.classList.contains('dark-theme');
  
  if (isDarkMode) {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
}

/**
 * 테마 설정 초기화
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (savedTheme !== 'light' && prefersDarkMode)) {
    document.body.classList.add('dark-theme');
  }
}

// 테마 초기화
initTheme(); 