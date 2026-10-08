---
layout: page
permalink: /blog/
title: Blogs
hide_title: true
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
_styles: |
  .blog-list {
    margin: 0;
    padding: 1rem 0 0;
  }

  .blog-list-item {
    margin-bottom: 3.5rem;
    list-style: none;
  }

  .blog-list-meta {
    margin: 0 0 0.45rem;
    color: var(--global-text-color);
    font-family: "orpheus-pro", "Cormorant Garamond", Georgia, "Times New Roman", serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
  }

  .blog-list-title {
    color: #41416f;
    font-family: "Times New Roman", Times, "Noto Serif CJK SC", "Songti SC", SimSun, serif;
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.12;
    text-decoration: none;
  }

  .blog-list-title:hover {
    color: #29294f;
    text-decoration: none;
  }

  html[data-theme="dark"] .blog-list-title {
    color: #b9b9e4;
  }

  html[data-theme="dark"] .blog-list-title:hover {
    color: #d5d5f2;
  }

  @media (max-width: 576px) {
    .blog-list {
      padding-top: 0.5rem;
    }

    .blog-list-item {
      margin-bottom: 2.5rem;
    }

    .blog-list-meta {
      font-size: 0.95rem;
    }

    .blog-list-title {
      font-size: 1.5rem;
    }
  }
---

<div class="blog-intro">
  <p>Some notes and thoughts on research, work, and things I am experiencing.</p>
</div>

<ul class="blog-list">
  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  {% for post in postlist %}
    {% capture default_author %}{{ site.first_name }} {{ site.last_name }}{% endcapture %}
    <li class="blog-list-item">
      <p class="blog-list-meta">{{ post.author | default: default_author | strip }} - {{ post.date | date: '%-m/%-d/%y' }}</p>
      {% if post.redirect == blank %}
        <a class="blog-list-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {% elsif post.redirect contains '://' %}
        <a class="blog-list-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
      {% else %}
        <a class="blog-list-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
      {% endif %}
    </li>
  {% endfor %}
</ul>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}
