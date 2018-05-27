---
title: Blog
layout: defaults
description: In addition to writing about technical writing and computer science research, I publish articles on many topics in the fields of software engineering, software testing, and data science. Find your favorite article and start reading!
---

# {{ page.title }}

<a title="Colored Pencils" href="https://flickr.com/photos/therefore/4101567511"><img class="img-responsive-tight" src="https://c1.staticflickr.com/3/2672/4101567511_e88d64015c_z.jpg" /></a><br /><small><a title="Colored Pencils" href="https://flickr.com/photos/therefore/4101567511">flickr photo</a> by <a href="https://flickr.com/people/therefore">Dean Terry</a> shared under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC (BY-NC-ND) license</a> </small>

<ul class="fa-ul">
{% for page in site.posts %}
  <li><i class="fa-li fa fa-edit fa-lg"></i><a class="major" href="{{site.baseurl}}{{ page.url | remove_first:'/'}}">{{ page.title }}</a></li>
  <i class="fa fa-tags" aria-hidden="true"></i>
  {% for category in page.categories %}
  <a class="tag" href="{{site.baseurl}}categories/#{{ category | slugify }}"> {{ category }}</a>
  {% endfor %}
  <p>
  {{ page.date | date_to_long_string }}
  {% if page.last_modified_at %}
  (Updated: {{ page.last_modified_at | date_to_long_string }})
  <p></p>
  {% else %}
  <p></p>
  {% endif %}
{% endfor %}
</ul>
