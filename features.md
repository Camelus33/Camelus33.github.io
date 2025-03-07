---
layout: default
title: 주요 기능
description: Camelus33의 핵심 기능을 소개합니다
---

<section class="features-page">
  <div class="container">
    <header class="page-header">
      <h1 class="page-title">{{ page.title }}</h1>
      <p class="page-description">{{ page.description }}</p>
    </header>
    
    <div class="features-grid">
      {% for feature in site.features %}
      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas {{ feature.icon }}"></i>
        </div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <a href="{{ feature.url | relative_url }}" class="read-more">자세히 보기 <i class="fas fa-arrow-right"></i></a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="features-overview">
  <div class="container">
    <h2 class="section-title">Camelus33의 특별한 점</h2>
    
    <div class="overview-content">
      <p>Camelus33은 단순한 독서 타이머가 아닌, 효과적인 독서 습관 형성을 위한 종합 솔루션입니다. GPS 위치 인증, 제텔카스텐 메모법, 게임화 요소를 결합하여 사용자가 꾸준히 독서하고 지식을 체계적으로 관리할 수 있도록 돕습니다.</p>
      
      <div class="key-benefits">
        <div class="benefit">
          <div class="benefit-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h3>장소 기반 독서 동기부여</h3>
          <p>도서관과 같은 독서에 최적화된 환경에서의 독서를 장려합니다.</p>
        </div>
        
        <div class="benefit">
          <div class="benefit-icon">
            <i class="fas fa-brain"></i>
          </div>
          <h3>효율적인 지식 관리</h3>
          <p>제텔카스텐 메모법으로 읽은 내용을 체계적으로 정리하고 활용할 수 있습니다.</p>
        </div>
        
        <div class="benefit">
          <div class="benefit-icon">
            <i class="fas fa-trophy"></i>
          </div>
          <h3>게임화된 독서 경험</h3>
          <p>콤보 시스템과 점수 보상으로 독서에 재미와 성취감을 더합니다.</p>
        </div>
        
        <div class="benefit">
          <div class="benefit-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>데이터 기반 독서 분석</h3>
          <p>상세한 독서 데이터를 시각적으로 제공하여 독서 습관을 개선할 수 있습니다.</p>
        </div>
      </div>
    </div>
  </div>
</section> 