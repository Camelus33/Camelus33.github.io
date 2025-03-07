---
layout: feature
title: "콤보 시스템"
description: "연속 독서로 점수를 기하급수적으로 증가시키는 게임화 요소"
icon: "fa-fire"
image: /assets/images/features/combo-system.svg
---

<div class="container">
  <div class="feature-content">
    <div class="animate-on-scroll">
      <h2 class="mb-6">콤보 시스템이란?</h2>
      <p class="lead">콤보 시스템은 Camelus33의 핵심 게임화 요소로, 연속적인 독서 세션을 통해 점수를 기하급수적으로 증가시키는 보상 메커니즘입니다.</p>
      <p>이 시스템은 사용자가 더 오랜 시간 집중하여 독서하도록 동기를 부여하며, 독서의 재미와 성취감을 극대화합니다.</p>
    </div>
    
    <div class="two-columns mt-12">
      <div class="animate-on-scroll delay-100">
        <img src="{{ page.image }}" alt="{{ page.title }}" class="w-full rounded-lg shadow-lg">
      </div>
      
      <div class="animate-on-scroll delay-300">
        <h3 class="mb-4">콤보 시스템의 작동 원리</h3>
        <ol class="ml-6">
          <li class="mb-4">
            <strong class="text-secondary">콤보 증가 조건</strong>: 리딩루프(11분 독서 + 2분 메모)가 끝난 직후, <strong>바로 다음 루프</strong>를 시작하면 콤보가 1 증가합니다.
          </li>
          <li class="mb-4">
            <strong class="text-secondary">콤보 유지 조건</strong>: 루프 사이에 휴식 없이 연속으로 독서를 이어가야 콤보가 유지됩니다.
          </li>
          <li>
            <strong class="text-secondary">콤보 초기화 조건</strong>: 루프 종료 후 일정 시간(약 5분) 이상 다음 루프를 시작하지 않으면 콤보가 초기화됩니다.
          </li>
        </ol>
      </div>
    </div>
    
    <div class="animate-on-scroll mt-12">
      <h3 class="mb-6">점수 보상 시스템</h3>
      <p>콤보 시스템은 다음과 같은 점수 보상 구조를 가집니다:</p>
      
      <div class="bg-light p-6 rounded-lg mt-6">
        <div class="flex items-center mb-4">
          <span class="inline-block bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
          <span><strong>기본 점수</strong>: 17점/루프 (11분 독서 + 2분 메모)</span>
        </div>
        <div class="flex items-center mb-4">
          <span class="inline-block bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
          <span><strong>콤보 보너스</strong>: +5점 × 콤보수의 1.5배</span>
        </div>
      </div>
      
      <table class="w-full mt-6 bg-white rounded-lg overflow-hidden shadow-md">
        <thead class="bg-primary text-white">
          <tr>
            <th class="py-3 px-4 text-left">콤보 수</th>
            <th class="py-3 px-4 text-left">기본 점수</th>
            <th class="py-3 px-4 text-left">보너스 점수</th>
            <th class="py-3 px-4 text-left">총 점수</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">1콤보</td>
            <td class="py-3 px-4">17점</td>
            <td class="py-3 px-4">+7.5점 (5×1.5)</td>
            <td class="py-3 px-4 font-bold">24.5점</td>
          </tr>
          <tr class="border-b border-gray-200 bg-light">
            <td class="py-3 px-4">2콤보</td>
            <td class="py-3 px-4">17점</td>
            <td class="py-3 px-4">+15점 (5×3)</td>
            <td class="py-3 px-4 font-bold">32점</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">3콤보</td>
            <td class="py-3 px-4">17점</td>
            <td class="py-3 px-4">+22.5점 (5×4.5)</td>
            <td class="py-3 px-4 font-bold">39.5점</td>
          </tr>
          <tr class="border-b border-gray-200 bg-light">
            <td class="py-3 px-4">5콤보</td>
            <td class="py-3 px-4">17점</td>
            <td class="py-3 px-4">+37.5점 (5×7.5)</td>
            <td class="py-3 px-4 font-bold">54.5점</td>
          </tr>
          <tr class="bg-secondary bg-opacity-10">
            <td class="py-3 px-4 font-bold">10콤보</td>
            <td class="py-3 px-4">17점</td>
            <td class="py-3 px-4">+75점 (5×15)</td>
            <td class="py-3 px-4 font-bold text-secondary">92점</td>
          </tr>
        </tbody>
      </table>
      
      <p class="mt-4">이처럼 콤보가 누적될수록 점수 상승폭이 기하급수적으로 증가합니다. 이는 사용자가 연속적인 독서 세션을 유지하도록 강력한 동기를 부여합니다.</p>
    </div>
    
    <div class="grid grid-cols-2 gap-8 mt-12">
      <div class="animate-on-scroll delay-100">
        <h3 class="mb-4">콤보 시스템의 의의</h3>
        
        <div class="card mb-4">
          <div class="card-body">
            <h4 class="text-primary">몰입 독서 장려</h4>
            <p>콤보 시스템은 사용자가 짧은 시간에 집중력과 성과를 최대화할 수 있도록 '몰입 독서'를 장려합니다. 연속적인 독서 세션을 통해 더 깊은 이해와 집중력을 발휘할 수 있습니다.</p>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-body">
            <h4 class="text-primary">소셜 요소 강화</h4>
            <p>높은 콤보 달성은 SNS나 커뮤니티에 공유할 수 있는 자랑거리가 됩니다. "오늘 5콤보 성공!" 같은 성취를 공유함으로써 사용자 간 건전한 경쟁과 동기부여를 촉진합니다.</p>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h4 class="text-primary">전략적 독서 계획</h4>
            <p>사용자는 콤보를 최대화하기 위해 독서 시간을 전략적으로 계획하게 됩니다. 예를 들어, 높은 콤보를 달성하기 위해 방해받지 않는 시간대를 선택하거나, 특정 장소에서 집중적으로 독서하는 습관을 형성할 수 있습니다.</p>
          </div>
        </div>
      </div>
      
      <div class="animate-on-scroll delay-300">
        <h3 class="mb-4">콤보 배지 및 칭호</h3>
        <p>특정 콤보 달성 시 다음과 같은 특별 배지와 칭호를 획득할 수 있습니다:</p>
        
        <div class="bg-light p-6 rounded-lg mt-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <span class="text-primary font-bold">3</span>
            </div>
            <div>
              <h5 class="font-bold mb-1">"집중력 입문자" 배지</h5>
              <p class="text-sm">3콤보 달성 시 획득</p>
            </div>
          </div>
          
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <span class="text-secondary font-bold">5</span>
            </div>
            <div>
              <h5 class="font-bold mb-1">"몰입 독서가" 배지</h5>
              <p class="text-sm">5콤보 달성 시 획득</p>
            </div>
          </div>
          
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <span class="text-accent font-bold">10</span>
            </div>
            <div>
              <h5 class="font-bold mb-1">"독서 마라토너" 배지</h5>
              <p class="text-sm">10콤보 달성 시 획득</p>
            </div>
          </div>
          
          <div class="flex items-center">
            <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-bold">15</span>
            </div>
            <div>
              <h5 class="font-bold mb-1">"독서의 신" 배지</h5>
              <p class="text-sm">15콤보 달성 시 획득</p>
            </div>
          </div>
        </div>
        
        <p class="mt-6">이러한 배지와 칭호는 사용자 프로필에 표시되어 성취감을 높이고 지속적인 독서 동기를 부여합니다. 다른 사용자들에게 자신의 독서 실력을 자랑할 수 있는 요소이기도 합니다.</p>
      </div>
    </div>
    
    <div class="animate-on-scroll mt-12">
      <h3 class="mb-4">챔피언십과의 연계</h3>
      <p>Camelus33의 시즌제 챔피언십에서 콤보 시스템은 순위 결정에 큰 영향을 미칩니다. 단순히 많은 시간을 독서하는 것보다, 효율적으로 높은 콤보를 달성하는 전략이 더 높은 점수를 얻는 데 유리합니다.</p>
      
      <div class="bg-primary text-on-dark p-8 rounded-lg mt-6">
        <h4 class="text-on-dark mb-4">시즌 챔피언십 보상</h4>
        <p>시즌 종료 시 상위 득점자에게는 다음과 같은 특별 보상이 제공됩니다:</p>
        <ul class="list-disc ml-6 mt-2">
          <li>1위: Camelus33 고급 독서 메모지 + Camelus33 각인 라미 만년필 + 프리미엄 구독권 1년</li>
          <li>2위: Camelus33 독서 메모지 + 프리미엄 구독권 6개월</li>
          <li>3위~10위: 프리미엄 구독권 3개월</li>
        </ul>
      </div>
    </div>
    
    <div class="bg-light p-8 rounded-lg mt-12 animate-on-scroll">
      <h3 class="mb-4">콤보 시스템 활용 전략</h3>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <h4 class="text-secondary mb-2">최적의 독서 시간대 선택</h4>
          <p>방해받지 않는 시간대를 선택하여 집중적으로 여러 루프를 연속해서 실행하세요. 아침 일찍 또는 늦은 밤 시간이 효과적일 수 있습니다.</p>
        </div>
        
        <div>
          <h4 class="text-secondary mb-2">도서관 위치 활용</h4>
          <p>GPS 인증이 가능한 도서관에서 독서하면 추가 포인트를 얻을 수 있습니다. 이를 콤보와 결합하면 점수를 극대화할 수 있습니다.</p>
        </div>
        
        <div>
          <h4 class="text-secondary mb-2">준비된 메모 방식</h4>
          <p>2분 메모 시간을 효율적으로 활용하기 위해 간결한 메모 템플릿을 준비하세요. 핵심 내용만 빠르게 정리하는 연습이 필요합니다.</p>
        </div>
        
        <div>
          <h4 class="text-secondary mb-2">주간 목표 설정</h4>
          <p>주 단위로 목표 콤보 수를 설정하고 달성하세요. 점진적으로 목표를 높여 독서 습관을 강화할 수 있습니다.</p>
        </div>
      </div>
    </div>
    
    <div class="bg-primary text-on-dark p-8 rounded-lg mt-12 animate-on-scroll">
      <h3 class="text-on-dark mb-4">콤보 시스템 체험하기</h3>
      <p>Camelus33 앱은 현재 개발 중이며, 2024년 6월 정식 출시 예정입니다. 앱 출시 소식을 받아보고 베타 테스터로 참여하여 콤보 시스템을 먼저 체험하고 싶다면 아래 버튼을 클릭하세요.</p>
      <a href="/contact" class="btn btn-secondary mt-4">앱 출시 알림 신청하기</a>
    </div>
  </div>
</div> 