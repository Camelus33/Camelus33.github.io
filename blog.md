---
layout: default
title: Blog
permalink: /blog/
---

<div class="blog-header">
  <div class="container">
    <h1 class="blog-title">Blog</h1>
    <p class="blog-description">개발자를 위한 최신 기술 소식, 튜토리얼, 모범 사례 및 커리어 팁</p>
  </div>
</div>

<div class="container">
  <!-- Search Bar -->
  <div class="search-container">
    <form class="search-form" action="#" method="get">
      <span class="search-form-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>
      <input type="search" class="form-control search-input" placeholder="블로그 검색..." aria-label="Search blog posts">
    </form>
    <div class="search-results" style="display: none;"></div>
  </div>

  <!-- Featured Categories -->
  <div class="tag-cloud mb-8">
    <a href="{{ '/blog' | relative_url }}" class="tag-cloud-item">All</a>
    {% assign categories = site.posts | map: "category" | uniq %}
    {% for category in categories %}
      {% if category %}
      <a href="{{ '/blog?category=' | append: category | relative_url }}" class="tag-cloud-item">{{ category }}</a>
      {% endif %}
    {% endfor %}
  </div>

  <!-- Blog Posts -->
  <div class="post-list">
    {% for post in site.posts %}
    <article class="post-card card">
      <div class="post-card-image-container">
        {% if post.category %}
        <span class="post-card-category">{{ post.category }}</span>
        {% endif %}
        {% if post.image %}
        <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="post-card-image">
        {% else %}
        <img src="{{ '/assets/images/default-post.jpg' | relative_url }}" alt="{{ post.title }}" class="post-card-image">
        {% endif %}
      </div>
      <div class="post-card-content">
        <div class="post-card-meta">
          <span class="post-card-date">
            <i class="fa-regular fa-calendar"></i> {{ post.date | date: "%b %d, %Y" }}
          </span>
          <span class="post-card-read-time">{{ post.content | number_of_words | divided_by: 250 | plus: 1 }} min read</span>
        </div>
        <h2 class="post-card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
        <div class="post-card-author">
          {% if post.author_image %}
          <img src="{{ post.author_image | relative_url }}" alt="{{ post.author | default: site.author }}" class="post-card-author-avatar">
          {% else %}
          <img src="{{ '/assets/images/default-avatar.jpg' | relative_url }}" alt="{{ post.author | default: site.author }}" class="post-card-author-avatar">
          {% endif %}
          <span class="post-card-author-name">{{ post.author | default: site.author }}</span>
        </div>
      </div>
    </article>
    {% endfor %}
  </div>

  <!-- Pagination -->
  {% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination-link">
      <i class="fa-solid fa-chevron-left"></i>
    </a>
    {% endif %}
    
    {% for page in (1..paginator.total_pages) %}
      {% if page == paginator.page %}
      <span class="pagination-link active">{{ page }}</span>
      {% elsif page == 1 %}
      <a href="{{ '/blog' | relative_url }}" class="pagination-link">{{ page }}</a>
      {% else %}
      <a href="{{ site.paginate_path | relative_url | replace: ':num', page }}" class="pagination-link">{{ page }}</a>
      {% endif %}
    {% endfor %}
    
    {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="pagination-link">
      <i class="fa-solid fa-chevron-right"></i>
    </a>
    {% endif %}
  </div>
  {% endif %}
</div> 