/* Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initNavigation();
  initScrollAnimations();
  initHeroTimer();
  initScenarioTabs();
  
  // Add any additional initialization here
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
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length === 0) return;
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
  }
  
  // Show elements that are in viewport
  function showVisibleElements() {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Initial check
  showVisibleElements();
  
  // Check on scroll
  window.addEventListener('scroll', showVisibleElements);
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

// 탭 기능
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 활성 탭 버튼 변경
      const tabContainer = this.closest('.feature-tabs');
      tabContainer.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      
      // 탭 내용 변경
      const tabId = this.getAttribute('data-tab');
      tabContainer.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      tabContainer.querySelector(`#${tabId}-tab`).classList.add('active');
    });
  });
}

// 시나리오 탭
function initScenarioTabs() {
  const scenarioTabs = document.querySelectorAll('.scenario-tab');
  const scenarioPanes = document.querySelectorAll('.scenario-pane');
  
  if (scenarioTabs.length === 0) return;
  
  scenarioTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs and panes
      scenarioTabs.forEach(t => t.classList.remove('active'));
      scenarioPanes.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Show corresponding pane
      const scenario = this.getAttribute('data-scenario');
      const pane = document.getElementById(`${scenario}-scenario`);
      if (pane) pane.classList.add('active');
    });
  });
}

// 카운트다운 타이머
function initCountdownTimer() {
  const timerDisplay = document.querySelector('.countdown-timer');
  if (!timerDisplay) return;
  
  // 3일 후 마감
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);
  endDate.setHours(23, 59, 59, 0);
  
  function updateTimer() {
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) {
      // 타이머 종료
      document.querySelector('.time-value:nth-child(1)').textContent = '0';
      document.querySelector('.time-value:nth-child(2)').textContent = '0';
      document.querySelector('.time-value:nth-child(3)').textContent = '0';
      document.querySelector('.time-value:nth-child(4)').textContent = '0';
      return;
    }
    
    // 남은 시간 계산
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 타이머 업데이트
    const timeValues = document.querySelectorAll('.time-value');
    if (timeValues.length >= 4) {
      timeValues[0].textContent = days;
      timeValues[1].textContent = hours < 10 ? '0' + hours : hours;
      timeValues[2].textContent = minutes < 10 ? '0' + minutes : minutes;
      timeValues[3].textContent = seconds < 10 ? '0' + seconds : seconds;
    }
  }
  
  // 초기 업데이트
  updateTimer();
  
  // 1초마다 업데이트
  setInterval(updateTimer, 1000);
}

// Hero Timer
function initHeroTimer() {
  const timerDisplay = document.querySelector('.hero-timer .app-timer-display');
  const playButton = document.querySelector('.hero-timer .app-timer-button:nth-child(1)');
  const pauseButton = document.querySelector('.hero-timer .app-timer-button:nth-child(2)');
  const resetButton = document.querySelector('.hero-timer .app-timer-button:nth-child(3)');
  const timerModes = document.querySelectorAll('.hero-timer .timer-mode-switch span');
  
  if (!timerDisplay) return;
  
  let timer;
  let seconds = 660; // 11 minutes
  let isRunning = false;
  let currentMode = 'reading'; // reading or memo
  
  // Format time as MM:SS
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
  
  // Update timer display
  function updateDisplay() {
    timerDisplay.textContent = formatTime(seconds);
  }
  
  // Start timer
  function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    timer = setInterval(() => {
      seconds--;
      updateDisplay();
      
      if (seconds <= 0) {
        clearInterval(timer);
        isRunning = false;
        
        // Switch to memo mode if in reading mode
        if (currentMode === 'reading') {
          switchMode('memo');
        }
      }
    }, 1000);
  }
  
  // Pause timer
  function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
  }
  
  // Reset timer
  function resetTimer() {
    pauseTimer();
    seconds = currentMode === 'reading' ? 660 : 120; // 11 min or 2 min
    updateDisplay();
  }
  
  // Switch between reading and memo modes
  function switchMode(mode) {
    currentMode = mode;
    pauseTimer();
    
    if (mode === 'reading') {
      seconds = 660; // 11 minutes
      timerModes[0].classList.add('active');
      timerModes[1].classList.remove('active');
    } else {
      seconds = 120; // 2 minutes
      timerModes[0].classList.remove('active');
      timerModes[1].classList.add('active');
    }
    
    updateDisplay();
  }
  
  // Event listeners
  if (playButton) playButton.addEventListener('click', startTimer);
  if (pauseButton) pauseButton.addEventListener('click', pauseTimer);
  if (resetButton) resetButton.addEventListener('click', resetTimer);
  
  // Mode switching
  timerModes.forEach((mode, index) => {
    mode.addEventListener('click', () => {
      switchMode(index === 0 ? 'reading' : 'memo');
    });
  });
  
  // Initial display
  updateDisplay();
  
  // Add pulse animation to play button to draw attention
  if (playButton) {
    setTimeout(() => {
      playButton.classList.add('pulse-animation');
      setTimeout(() => {
        playButton.classList.remove('pulse-animation');
      }, 2000);
    }, 1500);
  }
}

// Page Navigation
function initNavigation() {
  const nav = document.getElementById('page-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  if (!nav) return;
  
  // Handle scroll events for sticky navigation
  window.addEventListener('scroll', function() {
    // Add scrolled class when page is scrolled
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
  
  // Smooth scroll to section when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update active class
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
}

// Mira Network 스타일 JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // 타이머 초기화
  initMiraTimer();
  
  // 탭 기능 초기화
  initMiraTabs();
  
  // 스크롤 애니메이션
  initMiraScrollAnimation();
});

// 타이머 기능
function initMiraTimer() {
  const timerDisplay = document.querySelector('.mira-timer-display');
  const playButton = document.querySelector('.mira-timer-button.play-button');
  const pauseButton = document.querySelector('.mira-timer-button.pause-button');
  const resetButton = document.querySelector('.mira-timer-button.reset-button');
  const modeSpans = document.querySelectorAll('.mira-timer-mode span');
  
  if (!timerDisplay || !playButton || !pauseButton || !resetButton) return;
  
  let timer;
  let seconds = 660; // 11분 (독서 모드)
  let isRunning = false;
  let isReadingMode = true;
  
  // 타이머 표시 업데이트
  function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  
  // 타이머 시작
  function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    timer = setInterval(() => {
      seconds--;
      updateTimerDisplay();
      
      if (seconds <= 0) {
        clearInterval(timer);
        isRunning = false;
        
        // 모드 전환 (독서 <-> 메모)
        if (isReadingMode) {
          isReadingMode = false;
          seconds = 120; // 2분 (메모 모드)
          modeSpans[0].classList.remove('active');
          modeSpans[1].classList.add('active');
        } else {
          isReadingMode = true;
          seconds = 660; // 11분 (독서 모드)
          modeSpans[1].classList.remove('active');
          modeSpans[0].classList.add('active');
        }
        
        updateTimerDisplay();
      }
    }, 1000);
  }
  
  // 타이머 일시정지
  function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
  }
  
  // 타이머 리셋
  function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    
    if (isReadingMode) {
      seconds = 660; // 11분 (독서 모드)
    } else {
      seconds = 120; // 2분 (메모 모드)
    }
    
    updateTimerDisplay();
  }
  
  // 이벤트 리스너 등록
  playButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);
  
  // 모드 전환 이벤트
  modeSpans.forEach((span, index) => {
    span.addEventListener('click', () => {
      modeSpans.forEach(s => s.classList.remove('active'));
      span.classList.add('active');
      
      if (index === 0) { // 독서 모드
        isReadingMode = true;
        seconds = 660; // 11분
      } else { // 메모 모드
        isReadingMode = false;
        seconds = 120; // 2분
      }
      
      clearInterval(timer);
      isRunning = false;
      updateTimerDisplay();
    });
  });
  
  // 초기 타이머 표시 업데이트
  updateTimerDisplay();
}

// 탭 기능
function initMiraTabs() {
  const tabs = document.querySelectorAll('.mira-tab');
  
  if (!tabs.length) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      
      // 모든 탭 비활성화
      document.querySelectorAll('.mira-tab').forEach(t => {
        t.classList.remove('active');
      });
      
      // 모든 탭 패널 숨기기
      document.querySelectorAll('.mira-tab-pane').forEach(p => {
        p.classList.remove('active');
      });
      
      // 선택한 탭 활성화
      tab.classList.add('active');
      
      // 선택한 탭 패널 표시
      const tabPane = document.getElementById(`${tabId}-tab`);
      if (tabPane) {
        tabPane.classList.add('active');
      }
    });
  });
}

// 스크롤 애니메이션
function initMiraScrollAnimation() {
  const sections = document.querySelectorAll('.mira-section');
  
  if (!sections.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
} 