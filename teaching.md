---
title: Teaching
layout: defaults
description: I regularly teach courses in many areas of computer science, always releasing all of my course materials. Find a course with topics that interest you and start learning right away!
image: /download/images/11484919766_33a2c4677f_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/head_jumbotron.html title=page_title subtitle="launching learners in" highlight="computer science" %}

{% comment %} Only generate the list of courses when requested or for a production build {% endcomment %}
{% if jekyll.environment == 'production' or jekyll.environment == 'courses' %}

{% assign max_id = -43 %}
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
<ul>
<li><a class="major" href="/{{ page.url | remove_first:'/'}}">{{ page.title | capitalize_all }}</a></li>
<em>{{page.subtitle}}</em>
{% endif %}
</ul>
{% endif %}
<p></p>
{% endfor %}
{% endfor %}
{% endif %}

## Additional Courses

The course materials for the classes that I taught between the Fall 2000 and
Spring 2013 semesters are available if you [contact me](/contact/) with your
request. However, please note that the most representative and current material
is accessible through the above sites.
