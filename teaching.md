---
title: Courses
layout: defaults
description: I regularly teach courses in many areas of computer science, always releasing all of my course materials. Find a course with topics that interest you and start learning right away!
---

# {{ page.title }}

<!-- Include header image -->
{% include _popovers/image_reference.html image="11484919766_33a2c4677f_z.jpg" content="<a title='Untitled' href='https://flickr.com/photos/foto_olio/11484919766'>flickr photo</a> by <a href='https://flickr.com/people/foto_olio'>Olio</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% assign max_id = -34 %}
{% assign stop_id = 0 %}
{% assign year = "0" %}
{% for cid in (max_id..stop_id) %}
{% for page in site.pages %}
{% if page.id == cid %}
{% if page.course == true %}
{% assign current_year = page.title | capitalize_all | split: ' ' | last %}
{% if year != current_year %}
{% assign year = current_year %}
<h2>{{ year }}</h2>
{% endif %}
<ul class="fa-ul">
<li><i class="fa-li fa fa-cog fa-lg"></i><a class="major" href="/{{ page.url | remove_first:'/'}}">{{ page.title | capitalize_all }}</a></li>
<em>{{page.subtitle}}</em>
{% endif %}
</ul>
{% endif %}
<p>
{% endfor %}
{% endfor %}

## Additional Courses

The course materials for the classes that I taught between the Fall 2000 and Spring 2013 semesters are available if you
[contact me](/contact/) with your request. However, please note that the most representative and current
material is accessible through the above sites.
