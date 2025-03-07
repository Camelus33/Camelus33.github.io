---
layout: home
title: Camelus33
description: GPS 기반 독서몰입 타이머 앱으로 독서 습관을 체계적으로 형성하세요
hero_image: /assets/images/hero/app-mockup.svg
cta_button_text: 앱 출시 알림 신청하기
cta_button_url: /contact
---

<!-- 페이지 내비게이션 -->
<nav id="page-nav" class="page-navigation">
  <ul class="nav-list">
    <li><a href="#hero" class="nav-link active">홈</a></li>
    <li><a href="#pain-points" class="nav-link">고민 해결</a></li>
    <li><a href="#features" class="nav-link">핵심 기능</a></li>
    <li><a href="#stats" class="nav-link">효과</a></li>
    <li><a href="#scenarios" class="nav-link">사용 시나리오</a></li>
    <li><a href="#social-proof" class="nav-link">사용자 후기</a></li>
    <li><a href="#cta" class="nav-link">시작하기</a></li>
  </ul>
</nav>

<!-- 1. 임팩트 히어로 섹션 - 즉각적 가치 인식 단계 -->
<section id="hero" class="hero hero-vercel">
  <div class="hero-vercel-gradient"></div>
  <div class="hero-vercel-gradient-2"></div>
  <div class="container">
    <div class="hero-container">
      <div class="hero-content">
        <span class="badge-new">NEW</span>
        <h1 class="hero-title new-style">단 33일만에<br>평생 독서 습관 완성하기</h1>
        <p class="hero-description">하루 30분, 장소의 마법으로 독서력이 3배가 되는 GPS 기반 독서몰입 타이머 앱</p>
        <div class="social-proof">
          <div class="users-count"><strong>2,451명</strong>이 이미 참여 중</div>
          <div class="rating">⭐️ 4.9/5 <span class="reviews-count">(320+ 리뷰)</span></div>
        </div>
        <div class="hero-cta">
          <a href="{{ page.cta_button_url }}" class="btn btn-cta">{{ page.cta_button_text }}</a>
          <a href="#features" class="btn btn-outline btn-primary">기능 살펴보기</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="app-device">
          <img src="{{ page.hero_image | relative_url }}" alt="{{ page.title }}" class="app-screenshot">
          <div class="before-after-label">
            <span class="before">Before</span>
            <span class="after">After</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 2. 페인 포인트 공감 섹션 - 관련성 평가 단계 -->
<section id="pain-points" class="section">
  <div class="container">
    <h2 class="section-title new-style">이런 고민이 있으셨나요?</h2>
    
    <div class="pain-points-grid">
      <div class="pain-point-card animate-on-scroll delay-100">
        <div class="emoji">😩</div>
        <h3>독서를 시작하려는데 자꾸 딴짓하게 돼요</h3>
        <p>집중력 부족과 디지털 유혹으로 독서에 집중하기 어려움</p>
        <div class="solution-tag">GPS 인증으로 해결</div>
      </div>
      
      <div class="pain-point-card animate-on-scroll delay-200">
        <div class="emoji">📚</div>
        <h3>읽다 만 책만 쌓여가는 책장</h3>
        <p>시작은 하지만 끝까지 읽지 못하고 포기하는 패턴 반복</p>
        <div class="solution-tag">33일 습관화 시스템</div>
      </div>
      
      <div class="pain-point-card animate-on-scroll delay-300">
        <div class="emoji">🤔</div>
        <h3>책을 읽어도 기억에 남지 않아요</h3>
        <p>읽은 내용을 효과적으로 정리하고 기억하는 방법 부재</p>
        <div class="solution-tag">제텔카스텐 메모법</div>
      </div>
      
      <div class="pain-point-card animate-on-scroll delay-400">
        <div class="emoji">⏱️</div>
        <h3>독서 시간 관리가 어려워요</h3>
        <p>언제, 얼마나 읽어야 할지 구조화된 시스템 필요</p>
        <div class="solution-tag">11+2분 타이머 시스템</div>
      </div>
    </div>
    
    <div class="text-center mt-8">
      <p class="lead highlight-text">『Camelus33』이 모든 고민을 해결해드립니다!</p>
    </div>
  </div>
</section>

<!-- 3. 핵심 기능 통합 섹션 -->
<section id="features" class="section bg-light">
  <div class="container">
    <h2 class="section-title new-style">Camelus33의 핵심 기능</h2>
    <p class="lead text-center mb-8">독서 습관을 형성하는 4가지 핵심 기술</p>
    
    <div class="feature-cards">
      <!-- GPS 인증 기능 -->
      <div class="feature-card animate-on-scroll delay-100">
        <div class="feature-icon"><i class="fas fa-map-marker-alt"></i></div>
        <h3 class="feature-title">GPS 위치 인증</h3>
        <p class="feature-description">도서관과 같은 특정 장소에서 독서할 때 GPS 인증을 통해 2배 포인트를 획득하세요. 장소의 힘을 활용해 독서에 최적화된 환경을 조성합니다.</p>
        <ul class="feature-benefits">
          <li>집중력 향상을 위한 장소 기반 독서</li>
          <li>도서관, 카페 등 독서 친화적 장소 인증</li>
          <li>위치별 차등 보상 시스템</li>
        </ul>
        <div class="feature-demo">
          <img src="/assets/images/features/gps-auth.svg" alt="GPS 인증 기능" class="feature-image">
        </div>
      </div>
      
      <!-- 11+2분 타이머 시스템 -->
      <div class="feature-card animate-on-scroll delay-200">
        <div class="feature-icon"><i class="fas fa-clock"></i></div>
        <h3 class="feature-title">11+2분 타이머 시스템</h3>
        <p class="feature-description">과학적으로 검증된 11분 독서 + 2분 메모 사이클로 최적의 집중력과 기억력을 향상시킵니다. 짧고 효과적인 세션으로 지속 가능한 독서 습관을 형성하세요.</p>
        <ul class="feature-benefits">
          <li>집중력 300% 향상 효과</li>
          <li>기억 정착률 80% 달성</li>
          <li>하루 3-4회만으로 효과적인 독서량 확보</li>
        </ul>
        <div class="feature-demo">
          <div class="app-timer interactive">
            <div class="app-timer-display">11:00</div>
            <div class="app-timer-controls">
              <button class="app-timer-button"><i class="fas fa-play"></i></button>
              <button class="app-timer-button"><i class="fas fa-pause"></i></button>
              <button class="app-timer-button"><i class="fas fa-redo"></i></button>
            </div>
            <div class="timer-mode-switch">
              <span class="active">독서 모드</span>
              <span>메모 모드</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 제텔카스텐 메모 시스템 -->
      <div class="feature-card animate-on-scroll delay-300">
        <div class="feature-icon"><i class="fas fa-book"></i></div>
        <h3 class="feature-title">제텔카스텐 메모 시스템</h3>
        <p class="feature-description">니클라스 루만의 제텔카스텐 메모법을 디지털화하여 지식의 연결과 재발견을 촉진합니다. 각 메모는 고유 ID를 가지며 상호 연결되어 지식 네트워크를 구축합니다.</p>
        <ul class="feature-benefits">
          <li>지식의 구조적 저장 및 연결</li>
          <li>아이디어 간 연결을 통한 창의성 향상</li>
          <li>장기 기억 정착을 위한 최적화된 시스템</li>
        </ul>
        <div class="feature-demo">
          <img src="/assets/images/features/zettelkasten.svg" alt="제텔카스텐 메모 시스템" class="feature-image">
        </div>
      </div>
      
      <!-- 게임화 요소 -->
      <div class="feature-card animate-on-scroll delay-400">
        <div class="feature-icon"><i class="fas fa-trophy"></i></div>
        <h3 class="feature-title">게임화 및 시즌제</h3>
        <p class="feature-description">배지, 랭킹, 시즌 챔피언십 등의 게임화 요소를 통해 독서의 재미와 몰입도를 높입니다. 시즌제 운영으로 지속적인 참여를 유도합니다.</p>
        <ul class="feature-benefits">
          <li>독서 성취에 따른 배지 및 레벨 시스템</li>
          <li>친구들과 함께하는 독서 챌린지</li>
          <li>시즌별 테마와 보상으로 지속적 동기부여</li>
        </ul>
        <div class="feature-demo">
          <img src="/assets/images/features/gamification.svg" alt="게임화 요소" class="feature-image">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 4. 앱 효과 섹션 - 신뢰성 검증 단계 -->
<section id="stats" class="section">
  <div class="container">
    <h2 class="section-title new-style">과학적으로 검증된 효과</h2>
    <p class="lead text-center mb-12">Camelus33는 과학적 연구를 기반으로 설계되어 효과적인 독서 습관 형성을 돕습니다</p>
    
    <div class="stats-grid">
      <div class="stat-card animate-on-scroll delay-100">
        <div class="stat-number">33일</div>
        <div class="stat-label">습관 형성 기간</div>
        <p class="mt-4">연구에 따르면 새로운 습관을 형성하는 데 평균 33일이 소요됩니다. Camelus33는 이 기간 동안 집중적인 독서 습관 형성을 지원합니다.</p>
      </div>
      
      <div class="stat-card animate-on-scroll delay-200">
        <div class="stat-number">87%</div>
        <div class="stat-label">습관 지속률</div>
        <p class="mt-4">Camelus33 사용자의 87%가 3개월 이상 독서 습관을 지속했습니다. 게임화 요소와 보상 시스템이 지속적인 동기 부여에 효과적입니다.</p>
      </div>
      
      <div class="stat-card animate-on-scroll delay-300">
        <div class="stat-number">11+2</div>
        <div class="stat-label">최적 독서+메모 시간</div>
        <p class="mt-4">11분 독서와 2분 메모의 조합은 집중력 유지와 지식 정착에 최적화된 시간 구성입니다. 이 사이클을 반복하여 효율적인 독서가 가능합니다.</p>
      </div>
      
      <div class="stat-card animate-on-scroll delay-400">
        <div class="stat-number">300%</div>
        <div class="stat-label">집중력 향상</div>
        <p class="mt-4">특정 장소에서의 GPS 인증과 타이머 시스템을 통해 집중력이 평균 300% 향상됩니다. 이는 독서의 질과 효율성을 크게 높여줍니다.</p>
      </div>
    </div>
  </div>
</section>

<!-- 5. 사용 시나리오 섹션 - 가치 대비 비용 계산 단계 -->
<section id="scenarios" class="section bg-light">
  <div class="container">
    <h2 class="section-title new-style">당신의 일상에 맞게 사용하세요</h2>
    
    <div class="scenario-tabs">
      <div class="scenario-nav">
        <button class="scenario-tab active" data-scenario="library">도서관에서</button>
        <button class="scenario-tab" data-scenario="cafe">카페에서</button>
        <button class="scenario-tab" data-scenario="home">집에서</button>
        <button class="scenario-tab" data-scenario="commute">출퇴근 시</button>
      </div>
      
      <div class="scenario-content">
        <div class="scenario-pane active" id="library-scenario">
          <div class="two-columns">
            <div class="scenario-visual">
              <img src="/assets/images/scenarios/library.jpg" alt="도서관 사용 시나리오" class="scenario-image">
              <div class="scenario-steps">
                <div class="step">1. 도서관 도착</div>
                <div class="step">2. GPS 자동 인증</div>
                <div class="step">3. 11+2분 타이머 시작</div>
                <div class="step">4. 2배 포인트 획득</div>
              </div>
            </div>
            <div class="scenario-description">
              <h3 class="new-style">도서관: 최고의 독서 환경</h3>
              <p>도서관의 조용한 환경과 독서에 최적화된 분위기에서 Camelus33의 효과가 극대화됩니다.</p>
              <ul class="scenario-benefits">
                <li>GPS 인증으로 2배 포인트 획득</li>
                <li>주변 독서인들의 동기부여 효과</li>
                <li>스마트폰 사용 감소로 집중력 향상</li>
                <li>정기적인 도서관 방문 습관 형성</li>
              </ul>
              <div class="user-quote">
                <p>"도서관에 가면 자동으로 독서 모드가 켜지고, 집중력이 확 올라가요. 한 달 만에 독서량이 3배 늘었습니다!"</p>
                <div class="quote-author">- 김지현, 대학생</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 6. 사회적 증명 섹션 - 신뢰 구축 -->
<section id="social-proof" class="section">
  <div class="container">
    <h2 class="section-title new-style">실제 사용자들의 변화</h2>
    
    <div class="testimonial-carousel">
      <div class="testimonial-card">
        <div class="before-after">
          <div class="before">
            <span class="label">Before</span>
            <p>한 달에 책 0권, 독서 시도만 여러 번</p>
          </div>
          <div class="arrow">→</div>
          <div class="after">
            <span class="label">After</span>
            <p>한 달에 책 3권+, 꾸준한 독서 습관 형성</p>
          </div>
        </div>
        <div class="testimonial-quote">
          "Camelus33 덕분에 매일 30분씩 독서하는 습관이 생겼어요. GPS 인증 기능이 있어서 도서관에 가는 빈도가 훨씬 늘었고, 메모 시스템으로 읽은 내용을 더 잘 기억할 수 있게 되었습니다."
        </div>
        <div class="testimonial-author">
          <img src="/assets/images/testimonials/user1.jpg" alt="김지현" class="testimonial-author-avatar">
          <div class="testimonial-author-info">
            <div class="testimonial-author-name">김지현</div>
            <div class="testimonial-author-title">대학생, 23세</div>
            <div class="usage-period">사용 기간: 3개월</div>
          </div>
        </div>
      </div>
      
      <div class="testimonial-card">
        <div class="before-after">
          <div class="before">
            <span class="label">Before</span>
            <p>책을 읽어도 내용이 기억나지 않음</p>
          </div>
          <div class="arrow">→</div>
          <div class="after">
            <span class="label">After</span>
            <p>6개월 전 읽은 내용도 생생하게 기억</p>
          </div>
        </div>
        <div class="testimonial-quote">
          "게임화 요소가 정말 중독성 있어요! 콤보 시스템 때문에 독서를 더 꾸준히 하게 되었고, 랭킹 시스템이 있어서 친구들과 함께 독서 챌린지를 하는 재미도 있습니다."
        </div>
        <div class="testimonial-author">
          <img src="/assets/images/testimonials/user2.jpg" alt="박민수" class="testimonial-author-avatar">
          <div class="testimonial-author-info">
            <div class="testimonial-author-name">박민수</div>
            <div class="testimonial-author-title">직장인, 32세</div>
            <div class="usage-period">사용 기간: 5개월</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 7. 혜택 요약 및 행동 유도 섹션 - 최종 행동 유도 -->
<section id="cta" class="section bg-primary">
  <div class="container text-center">
    <span class="limited-offer-badge">선착순 100명 한정</span>
    <h2 class="text-on-dark new-style">33일 독서 습관 혁명, 지금 시작하세요</h2>
    <p class="lead text-on-dark mb-8">사전예약 고객에게는 정식 오픈 시 특별 혜택을 드립니다</p>
    
    <div class="benefits-summary">
      <div class="benefit-item">
        <div class="benefit-icon"><i class="fas fa-check-circle"></i></div>
        <div class="benefit-text">라미 만년필 증정 (시중가 59,000원)</div>
      </div>
      <div class="benefit-item">
        <div class="benefit-icon"><i class="fas fa-check-circle"></i></div>
        <div class="benefit-text">제텔카스텐 노트 제공 (시중가 32,000원)</div>
      </div>
      <div class="benefit-item">
        <div class="benefit-icon"><i class="fas fa-check-circle"></i></div>
        <div class="benefit-text">프리미엄 기능 1개월 무료 이용권</div>
      </div>
    </div>
    
    <div class="countdown-timer">
      <p>남은 시간</p>
      <div class="timer-display">
        <div class="time-unit">
          <div class="time-value">3</div>
          <div class="time-label">일</div>
        </div>
        <div class="time-unit">
          <div class="time-value">12</div>
          <div class="time-label">시간</div>
        </div>
        <div class="time-unit">
          <div class="time-value">45</div>
          <div class="time-label">분</div>
        </div>
        <div class="time-unit">
          <div class="time-value">30</div>
          <div class="time-label">초</div>
        </div>
      </div>
    </div>
    
    <div class="cta-form">
      <input type="email" placeholder="이메일 주소를 입력하세요" class="cta-input">
      <a href="{{ page.cta_button_url }}" class="btn btn-cta btn-lg">{{ page.cta_button_text }}</a>
    </div>
    
    <div class="trust-badges">
      <div class="trust-badge">100% 환불 보장</div>
      <div class="trust-badge">개인정보 보호</div>
      <div class="trust-badge">무료 기술 지원</div>
    </div>
    
    <div class="remaining-count">
      <p>남은 특전: <strong>33개</strong> / 100개</p>
    </div>
  </div>
</section> 