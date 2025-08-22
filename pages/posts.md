---
layout: blog
title: Posts
description: 연구실 소식 및 블로그
permalink: /posts/
---

# 연구실 소식

여기에는 연구실의 최신 소식, 연구 진행 상황, 학회 참여 후기 등을 게시합니다.

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
    <article class="post-preview">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
    </article>
    <hr>
  {% endfor %}
{% else %}
  <p>아직 게시된 포스트가 없습니다. 곧 연구실 소식을 업데이트할 예정입니다!</p>
  
  <h3>예정된 포스트 주제</h3>
  <ul>
    <li>연구실 소개 및 설립 취지</li>
    <li>최신 연구 성과 발표</li>
    <li>국제 학회 참여 후기</li>
    <li>대학원생 연구 진행 현황</li>
    <li>산학협력 프로젝트 소개</li>
  </ul>
{% endif %}
