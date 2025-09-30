---
layout: default
title: Publications
---

# Publications

Here are my papers on [Google Scholar](https://scholar.google.com/citations?user=E968uWQAAAAJ&hl=nl).

{% assign papers_by_year = site.bibliography | group_by_exp:"item","item.year" | sort:"name" | reverse %}

{% for year_group in papers_by_year %}
## {{ year_group.name }}

<ul>
  {% for pub in year_group.items %}
    <li>
      {{ pub | bibliographystyle: "apa" }}
      {% if pub.url %}
        [Link]({{ pub.url }})
      {% endif %}
      {% if pub.doi %}
        [DOI](https://doi.org/{{ pub.doi }})
      {% endif %}
    </li>
  {% endfor %}
</ul>

{% endfor %}
