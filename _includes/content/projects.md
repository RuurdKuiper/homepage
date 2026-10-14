An overview of selected academic and personal projects, with demos, papers, videos, and public project pages collected in one place.

{% assign categories = 'Academic,Personal' | split: ',' %}
{% for category in categories %}
<h2>{{ category }} Projects</h2>
<div class="project-list">
  {% assign projects = site.data.projects | where: 'category', category %}
  {% for project in projects %}
  <article class="project-card" id="{{ project.id }}">
    <div class="project-media">
      <img src="{{ project.image | relative_url }}" alt="{{ project.alt | escape }}" loading="lazy">
    </div>
    <div class="project-body">
      <div class="project-header">
        <h3>{{ project.title }}</h3>
        <span class="project-label{% if category == 'Personal' %} project-label--personal{% endif %}">{{ category }}</span>
      </div>
      <p class="project-summary">{{ project.summary }}</p>
      <div class="project-links">
        {% for link in project.links %}
        <a class="btn btn--small {{ link.style }}" href="{{ link.url }}">{{ link.label }}</a>
        {% endfor %}
      </div>
    </div>
  </article>
  {% endfor %}
</div>
{% endfor %}

## More

- [Full repositories list](https://github.com/RuurdKuiper?tab=repositories)
- [Full Hugging Face spaces list](https://huggingface.co/Ruurd/spaces)
