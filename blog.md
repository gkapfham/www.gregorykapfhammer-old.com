---
title: Blog
layout: defaults
description: In addition to writing about technical writing and computer science research, I publish articles on many topics in the fields of software engineering, software testing, and data science. Find your favorite article and start reading!
image: /download/images/4101567511_e88d64015c_z.jpg
---

# {{ page.title }}

<!-- Include header image -->
{% include _popovers/image_reference.html image="4101567511_e88d64015c_z.jpg" content="<a title='Colored Pencils' href='https://flickr.com/photos/therefore/4101567511'>flickr photo</a> by <a href='https://flickr.com/people/therefore'>Dean Terry</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% comment %} Only generate the list of posts when requested or for a production build {% endcomment %}
{% if jekyll.environment == 'production' or jekyll.environment == 'posts' %}

{% comment %} Iteratively display all of the blog posts {% endcomment %}
<ul class="fa-ul">
{% for page in site.posts %}
  <li><i class="fa-li fa fa-edit fa-lg"></i><a class="major" href="/{{ page.url | remove_first:'/'}}">{{ page.title }}</a></li>
  <i class="fa fa-tags" aria-hidden="true"></i>
  {% for category in page.categories %}
  {% comment %} Display the post's tags in a link that is an extra-small sized button {% endcomment %}
  <a class="btn btn-info btn-xs active" href="/categories/#{{ category | slugify }}"> {{ category }}</a>
  {% endfor %}
  <p>
  <i class="fa fa-calendar-o" aria-hidden="true"></i>
  &nbsp; {{ page.date | date_to_long_string }}
  {% if page.last_modified_at %}
  (Updated: {{ page.last_modified_at | date_to_long_string }})
  <p></p>
  {% else %}
  <p></p>
  {% endif %}
{% endfor %}
</ul>

{% endif %}
