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
  // 스크롤 애니메이션
  initMiraScrollAnimation();

  // 고급 배경 효과 초기화
  initAdvancedBackground();
  
  // 타이머 시스템 초기화
  initAdvancedTimer();
  
  // 탭 기능 초기화
  initMiraTabs();
});

// 고급 타이머 시스템
function initAdvancedTimer() {
  // DOM 요소 가져오기
  const timerDisplay = document.getElementById('timer-display');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');
  const resetButton = document.getElementById('reset-button');
  const statusIndicator = document.getElementById('status-indicator');
  const statusText = document.getElementById('status-text');
  const timerModeText = document.getElementById('timer-mode-text');
  const timerProgressFill = document.getElementById('timer-progress-fill');
  const timerProgressText = document.getElementById('timer-progress-text');
  const completionIcon = document.getElementById('completion-icon');
  
  // 메모 요소
  const memoContainer = document.getElementById('memo-container');
  const memoTextArea = document.getElementById('memo-textarea');
  const memoCounter = document.getElementById('memo-counter');
  const memoTime = document.getElementById('memo-time');
  const memoSaveButton = document.getElementById('memo-save');
  
  // 콤보 요소
  const comboCount = document.getElementById('combo-count');
  const comboMultiplier = document.getElementById('combo-multiplier');
  const comboFill = document.getElementById('combo-fill');
  
  // 없으면 종료
  if (!timerDisplay || !playButton || !pauseButton || !resetButton) return;
  
  // 타이머 변수
  let timer;
  let totalSeconds = 660; // 11분 (독서 모드)
  let currentSeconds = totalSeconds;
  let isRunning = false;
  let isReadingMode = true;
  let sessionCombo = 0;
  let sessionScore = 0;
  let multiplier = 1.0;
  let memoStarted = false;
  let readingCompleted = false;
  let memoCompleted = false;
  
  // 타이머 표시 업데이트
  function updateTimerDisplay() {
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // 프로그레스 바 업데이트
    const progressPercent = ((totalSeconds - currentSeconds) / totalSeconds) * 100;
    timerProgressFill.style.width = `${progressPercent}%`;
    timerProgressText.textContent = `${Math.round(progressPercent)}%`;
  }
  
  // 상태 표시 업데이트
  function updateStatusDisplay(status) {
    statusIndicator.className = 'timer-status-indicator';
    
    switch (status) {
      case 'reading':
        statusIndicator.classList.add('status-reading');
        statusText.textContent = '독서 중...';
        break;
      case 'memo':
        statusIndicator.classList.add('status-memo');
        statusText.textContent = '메모 작성 중...';
        break;
      case 'paused':
        statusIndicator.classList.add('status-idle');
        statusText.textContent = '일시 정지됨';
        break;
      default:
        statusIndicator.classList.add('status-idle');
        statusText.textContent = '준비 완료';
    }
  }
  
  // 타이머 시작
  function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    
    // 상태 업데이트
    if (isReadingMode) {
      updateStatusDisplay('reading');
    } else {
      updateStatusDisplay('memo');
    }
    
    timer = setInterval(() => {
      currentSeconds--;
      updateTimerDisplay();
      
      // 타이머 종료 처리
      if (currentSeconds <= 0) {
        clearInterval(timer);
        isRunning = false;
        
        // 모드 전환 (독서 <-> 메모)
        if (isReadingMode) {
          // 독서 모드 -> 메모 모드 전환
          isReadingMode = false;
          totalSeconds = 120; // 2분 (메모 모드)
          currentSeconds = totalSeconds;
          timerModeText.textContent = '메모 모드';
          timerModeText.style.color = '#ec4899';
          updateStatusDisplay('memo');
          
          // 메모 UI 표시
          memoContainer.classList.add('active');
          memoStarted = true;
          
          // 독서 완료 표시
          readingCompleted = true;
          completionIcon.classList.add('show');
          
          // 메모 타이머 시작
          updateTimerDisplay();
          startTimer();
        } else {
          // 메모 모드 완료
          timerModeText.textContent = '세션 완료';
          timerModeText.style.color = '';
          updateStatusDisplay('idle');
          
          // 메모 완료 처리
          memoCompleted = true;
          
          // 콤보 증가
          sessionCombo++;
          updateCombo(sessionCombo);
          
          // 완료 효과
          playCompletionEffect();
        }
      }
    }, 1000);
  }
  
  // 타이머 일시정지
  function pauseTimer() {
    if (!isRunning) return;
    
    clearInterval(timer);
    isRunning = false;
    updateStatusDisplay('paused');
  }
  
  // 타이머 리셋
  function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    
    if (isReadingMode) {
      totalSeconds = 660; // 11분 (독서 모드)
      timerModeText.textContent = '독서 모드';
      timerModeText.style.color = '';
    } else {
      totalSeconds = 120; // 2분 (메모 모드)
      timerModeText.textContent = '메모 모드';
      timerModeText.style.color = '#ec4899';
    }
    
    currentSeconds = totalSeconds;
    updateTimerDisplay();
    updateStatusDisplay('idle');
    
    // 메모 상태 초기화
    if (!isReadingMode && memoContainer.classList.contains('active')) {
      // 이미 메모 모드라면 초기화하지 않음
    } else {
      memoContainer.classList.remove('active');
      memoTextArea.value = '';
      memoCounter.textContent = '0 자';
    }
  }
  
  // 콤보 시스템 업데이트
  function updateCombo(combo) {
    comboCount.textContent = combo;
    
    // 콤보에 따른 배율 계산 (최대 5배)
    multiplier = Math.min(1 + (combo * 0.2), 5).toFixed(1);
    comboMultiplier.textContent = `×${multiplier} 점수`;
    
    // 콤보 바 업데이트
    const fillPercent = Math.min((combo / 20) * 100, 100);
    comboFill.style.width = `${fillPercent}%`;
    
    // 콤보 애니메이션
    comboCount.classList.add('pulse-combo');
    setTimeout(() => {
      comboCount.classList.remove('pulse-combo');
    }, 500);
  }
  
  // 완료 효과
  function playCompletionEffect() {
    // 완료 메시지와 효과 표시
    let points = 100 * parseFloat(multiplier);
    
    // 점수 팝업 생성
    const pointsPopup = document.createElement('div');
    pointsPopup.className = 'points-popup slide-up';
    pointsPopup.innerHTML = `+${points} 포인트!<br><span style="font-size: 0.9rem; opacity: 0.8;">세션 완료: ${multiplier}배 점수</span>`;
    pointsPopup.style.position = 'absolute';
    pointsPopup.style.top = '0';
    pointsPopup.style.left = '50%';
    pointsPopup.style.transform = 'translateX(-50%)';
    pointsPopup.style.background = 'linear-gradient(135deg, #4f46e5, #ec4899)';
    pointsPopup.style.color = 'white';
    pointsPopup.style.padding = '1rem 2rem';
    pointsPopup.style.borderRadius = '2rem';
    pointsPopup.style.fontWeight = 'bold';
    pointsPopup.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.3)';
    pointsPopup.style.opacity = '0';
    
    document.querySelector('.advanced-timer').appendChild(pointsPopup);
    
    // 애니메이션
    setTimeout(() => {
      pointsPopup.style.opacity = '1';
      pointsPopup.style.top = '-80px';
    }, 10);
    
    // 3초 후 제거
    setTimeout(() => {
      pointsPopup.style.opacity = '0';
      pointsPopup.style.top = '-100px';
      setTimeout(() => {
        pointsPopup.remove();
      }, 500);
    }, 3000);
  }
  
  // 메모 텍스트 카운터
  memoTextArea.addEventListener('input', function() {
    const count = this.value.length;
    memoCounter.textContent = `${count} 자`;
  });
  
  // 메모 저장
  memoSaveButton.addEventListener('click', function() {
    if (memoStarted && !memoCompleted) {
      clearInterval(timer);
      isRunning = false;
      currentSeconds = 0;
      updateTimerDisplay();
      
      // 메모 완료 처리
      timerModeText.textContent = '세션 완료';
      timerModeText.style.color = '';
      updateStatusDisplay('idle');
      
      // 메모 완료 표시
      memoCompleted = true;
      
      // 콤보 증가
      sessionCombo++;
      updateCombo(sessionCombo);
      
      // 완료 효과
      playCompletionEffect();
    }
  });
  
  // 이벤트 리스너 등록
  playButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);
  
  // 초기 표시 업데이트
  updateTimerDisplay();
  updateStatusDisplay('idle');
  updateCombo(sessionCombo);
}

// 고급 배경 효과 초기화
function initAdvancedBackground() {
  // 패럴랙스 효과 - 마우스 움직임에 따른 배경 요소 반응
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // 오브 요소들에 패럴랙스 효과 적용
    const orbs = document.querySelectorAll('.mira-orb');
    orbs.forEach((orb, index) => {
      const depth = 0.05 + (index * 0.01); // 각 오브마다 다른 깊이감
      const moveX = (mouseX - 0.5) * depth * 100;
      const moveY = (mouseY - 0.5) * depth * 100;
      orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // 회전 링에 패럴랙스 효과 적용
    const rings = document.querySelectorAll('.mira-rotating-ring');
    rings.forEach((ring, index) => {
      const depth = 0.02 + (index * 0.005);
      const moveX = (mouseX - 0.5) * depth * 50;
      const moveY = (mouseY - 0.5) * depth * 50;
      // 기존 회전 애니메이션 유지하면서 약간의 움직임 추가
      ring.style.marginLeft = `${moveX}px`;
      ring.style.marginTop = `${moveY}px`;
    });
  });
  
  // 스크롤 시 배경 효과 강화
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollPercent = scrollY / (documentHeight - windowHeight);
    
    // 배경색 및 그라데이션 효과 변화
    const background = document.querySelector('.page-background');
    if (background) {
      const opacity = 0.9 - (scrollPercent * 0.1); // 스크롤에 따라 약간 투명해짐
      background.style.opacity = opacity.toString();
    }
    
    // 오브 요소들 회전 및 크기 변화
    const orbs = document.querySelectorAll('.mira-orb');
    orbs.forEach((orb, index) => {
      const rotateVal = scrollY * 0.02 * (index + 1);
      const scaleVal = 1 + (scrollPercent * 0.1 * (index % 2 === 0 ? 1 : -1));
      orb.style.transform = `rotate(${rotateVal}deg) scale(${scaleVal})`;
    });
  });
  
  // 랜덤한 위치에 입자 추가 (패럴랙스를 위한 대체 방법)
  if (typeof particlesJS === 'undefined') {
    addParticles();
  }
}

// 패럴랙스를 위한 대체 입자 시스템 (particles.js가 로드되지 않은 경우)
function addParticles() {
  const container = document.querySelector('.particles-container');
  if (!container) return;
  
  // 20-30개의 입자 생성
  const particleCount = Math.floor(Math.random() * 11) + 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // 랜덤 위치, 크기, 투명도
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const opacity = Math.random() * 0.1 + 0.02;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = opacity.toString();
    
    // 랜덤 애니메이션 속도와 딜레이
    const duration = Math.random() * 30 + 15;
    const delay = Math.random() * 10;
    particle.style.animation = `float-advanced ${duration}s ease-in-out ${delay}s infinite`;
    
    container.appendChild(particle);
  }
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
        
        // 탭 전환 효과
        tabPane.style.opacity = '0';
        tabPane.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          tabPane.style.opacity = '1';
          tabPane.style.transform = 'translateY(0)';
          tabPane.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 50);
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
        
        // 섹션 내부 요소들 순차적 애니메이션
        const elements = entry.target.querySelectorAll('.mira-card, .mira-stat, .mira-testimonial');
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, 100 * (index + 1));
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  });
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    // 섹션 내부 요소들도 초기화
    const elements = section.querySelectorAll('.mira-card, .mira-stat, .mira-testimonial');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    observer.observe(section);
  });
} 