---
layout: page
title: Projects
permalink: /projects/
description: Selected research and benchmark projects.
nav: true
nav_order: 3
hide_title: true
---

<!-- pages/projects.md -->
<div class="project-intro">
  <p>A collection of my projects — things I work on and tinker with. Research projects are topics I formally study and work on. Pet projects are personal projects I build for fun and curiosity.</p>
</div>

<div class="projects project-list">
{% assign project_groups = "research:Research Projects,pet:Pet Projects" | split: "," %}
{% for group in project_groups %}
  {% assign group_parts = group | split: ":" %}
  {% assign group_key = group_parts[0] %}
  {% assign group_title = group_parts[1] %}
  {% assign sorted_projects = site.projects | where: "category", group_key | sort: "importance" %}
  {% if sorted_projects.size > 0 %}
    <h2 class="project-section-title">{{ group_title }}</h2>
    {% for project in sorted_projects %}
      {% if project.redirect %}
        {% assign project_url = project.redirect %}
      {% else %}
        {% assign project_url = project.url | relative_url %}
      {% endif %}
      <article class="project-feature">
        {% if project.img %}
          <a class="project-feature-media" href="{{ project_url }}" {% if project.redirect %}target="_blank" rel="noopener noreferrer"{% endif %} aria-label="{{ project.title }}">
            {% include figure.liquid loading="eager" path=project.img alt=project.title class="img-fluid" %}
          </a>
        {% endif %}
        <div class="project-feature-content">
          <h2 class="project-feature-title">{{ project.title }}</h2>
          <p class="project-feature-description">{{ project.description }}</p>
          <div class="project-feature-body">
            {{ project.content | markdownify }}
          </div>
        </div>
      </article>
    {% endfor %}
  {% endif %}
{% endfor %}
</div>
