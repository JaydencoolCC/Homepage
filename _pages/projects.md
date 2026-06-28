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
  <p>Some notes and thoughts on research, projects, and things I am learning.</p>
</div>

{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="projects project-list">
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
</div>
