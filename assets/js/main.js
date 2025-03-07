/* Main JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  // 모바일 메뉴 토글
  initMobileMenu();
  
  // 스크롤 시 헤더 스타일 변경
  initScrollHeader();
  
  // 스크롤 애니메이션
  initScrollAnimation();
  
  // 스무스 스크롤
  initSmoothScroll();
  
  // 탭 기능 초기화
  initTabs();
  
  // 시나리오 탭 초기화
  initScenarioTabs();
  
  // 카운트다운 타이머 초기화
  initCountdownTimer();
  
  // 독서 타이머 데모 초기화
  initReadingTimerDemo();
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
function initScrollAnimation() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
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
  
  scenarioTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 활성 탭 변경
      const tabContainer = this.closest('.scenario-tabs');
      tabContainer.querySelectorAll('.scenario-tab').forEach(t => {
        t.classList.remove('active');
      });
      this.classList.add('active');
      
      // 시나리오 내용 변경
      const scenarioId = this.getAttribute('data-scenario');
      tabContainer.querySelectorAll('.scenario-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      tabContainer.querySelector(`#${scenarioId}-scenario`).classList.add('active');
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

// 독서 타이머 데모
function initReadingTimerDemo() {
  const timerDisplay = document.querySelector('.app-timer-display');
  const playButton = document.querySelector('.app-timer-button:nth-child(1)');
  const pauseButton = document.querySelector('.app-timer-button:nth-child(2)');
  const resetButton = document.querySelector('.app-timer-button:nth-child(3)');
  const modeSwitch = document.querySelectorAll('.timer-mode-switch span');
  
  if (!timerDisplay || !playButton || !pauseButton || !resetButton) return;
  
  let timerInterval;
  let seconds = 660; // 11분 = 660초
  let isRunning = false;
  let currentMode = 'reading'; // 'reading' 또는 'memo'
  
  // 타이머 표시 업데이트
  function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  
  // 타이머 시작
  playButton.addEventListener('click', function() {
    if (isRunning) return;
    
    isRunning = true;
    timerInterval = setInterval(function() {
      seconds--;
      updateTimerDisplay();
      
      if (seconds <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        
        // 독서 모드에서 메모 모드로 전환
        if (currentMode === 'reading') {
          currentMode = 'memo';
          seconds = 120; // 2분 = 120초
          updateTimerDisplay();
          modeSwitch[0].classList.remove('active');
          modeSwitch[1].classList.add('active');
        } else {
          // 메모 모드 완료
          currentMode = 'reading';
          seconds = 660;
          updateTimerDisplay();
          modeSwitch[0].classList.add('active');
          modeSwitch[1].classList.remove('active');
        }
      }
    }, 1000);
  });
  
  // 타이머 일시정지
  pauseButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
  });
  
  // 타이머 리셋
  resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
    
    if (currentMode === 'reading') {
      seconds = 660;
    } else {
      seconds = 120;
    }
    
    updateTimerDisplay();
  });
  
  // 모드 전환
  modeSwitch.forEach((mode, index) => {
    mode.addEventListener('click', function() {
      clearInterval(timerInterval);
      isRunning = false;
      
      modeSwitch.forEach(m => m.classList.remove('active'));
      this.classList.add('active');
      
      if (index === 0) {
        // 독서 모드
        currentMode = 'reading';
        seconds = 660;
      } else {
        // 메모 모드
        currentMode = 'memo';
        seconds = 120;
      }
      
      updateTimerDisplay();
    });
  });
} 