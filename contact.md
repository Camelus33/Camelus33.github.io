---
layout: default
title: 문의하기
description: Camelus33 앱에 대한 문의나 베타 테스트 참여 신청을 해주세요
---

<section class="contact-page">
  <div class="container">
    <header class="page-header">
      <h1 class="page-title">{{ page.title }}</h1>
      <p class="page-description">{{ page.description }}</p>
    </header>
    
    <div class="contact-content">
      <div class="contact-info">
        <h2>연락처 정보</h2>
        <ul class="contact-details">
          <li>
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-text">
              <h3>이메일</h3>
              <p><a href="mailto:contact@camelus33.com">contact@camelus33.com</a></p>
            </div>
          </li>
          
          <li>
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-text">
              <h3>주소</h3>
              <p>서울특별시 강남구 테헤란로 123</p>
            </div>
          </li>
          
          <li>
            <div class="contact-icon">
              <i class="fab fa-github"></i>
            </div>
            <div class="contact-text">
              <h3>GitHub</h3>
              <p><a href="https://github.com/Camelus33" target="_blank">github.com/Camelus33</a></p>
            </div>
          </li>
        </ul>
        
        <div class="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>문의 및 베타 테스트 신청</h2>
        <p>Camelus33 앱에 대한 문의사항이나 베타 테스트 참여를 원하시면 아래 양식을 작성해주세요.</p>
        
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <div class="form-group">
            <label for="name">이름</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">이메일</label>
            <input type="email" id="email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="subject">문의 유형</label>
            <select id="subject" name="subject" required>
              <option value="">선택해주세요</option>
              <option value="beta">베타 테스트 참여 신청</option>
              <option value="feature">기능 제안</option>
              <option value="partnership">제휴 문의</option>
              <option value="other">기타 문의</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">메시지</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <div class="form-group form-checkbox">
            <input type="checkbox" id="privacy" name="privacy" required>
            <label for="privacy">개인정보 수집 및 이용에 동의합니다.</label>
          </div>
          
          <button type="submit" class="submit-button">보내기</button>
        </form>
      </div>
    </div>
    
    <div class="beta-info">
      <h2>베타 테스트 참여 안내</h2>
      <p>Camelus33 앱의 베타 테스트는 2024년 5월부터 시작될 예정입니다. 베타 테스터로 선정되시면 다음과 같은 혜택이 제공됩니다:</p>
      <ul>
        <li>앱 정식 출시 후 6개월 무료 프리미엄 구독권</li>
        <li>Camelus33 독서 메모 노트 증정</li>
        <li>개발팀과의 직접 소통 기회</li>
        <li>앱 개발 방향에 의견 반영</li>
      </ul>
      <p>많은 관심과 참여 부탁드립니다!</p>
    </div>
  </div>
</section> 