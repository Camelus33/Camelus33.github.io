---
layout: default
title: 블로그
description: Camelus33의 개발 소식과 독서 관련 유용한 정보를 공유합니다
---

<section class="blog-page">
  <div class="container">
    <header class="page-header">
      <h1 class="page-title">{{ page.title }}</h1>
      <p class="page-description">{{ page.description }}</p>
    </header>
    
    <div class="posts-grid">
      {% for post in site.posts %}
      <div class="post-card">
        {% if post.image %}
        <div class="post-image">
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
        </div>
        {% endif %}
        <div class="post-content">
          <span class="post-date">{{ post.date | date: "%Y년 %m월 %d일" }}</span>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt }}</p>
          <div class="post-meta-info">
            {% if post.categories.size > 0 %}
            <div class="post-categories">
              {% for category in post.categories %}
              <a href="/categories/{{ category | slugify }}" class="post-category">{{ category }}</a>
              {% endfor %}
            </div>
            {% endif %}
            <a href="{{ post.url | relative_url }}" class="read-more">더 읽기 <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section> 