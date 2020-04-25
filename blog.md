---
title: Blog
layout: defaults
description: In addition to writing about technical writing and computer science research, I publish articles on many topics in the fields of software engineering, software testing, and data science. Find your favorite article and start reading!
image: /download/images/4101567511_e88d64015c_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/head_jumbotron.html title=page_title subtitle="brief brainstorms on" highlight="technical topics" %}

{% comment %} Only generate the list of posts when requested or for a production build {% endcomment %}
{% if jekyll.environment == 'production' or jekyll.environment == 'posts' %}

{% comment %} Iteratively display all of the blog posts {% endcomment %}
{% for page in site.posts %}
{% assign currentyear = page.date | date: "%Y" %}
{% if currentyear != year %}
<h2>{{ currentyear }}</h2>
{% assign year = currentyear %}
{% endif %}
<ul>
<li><a class="major" href="/{{ page.url | remove_first:'/'}}">{{ page.title }}</a></li>
{% for category in page.categories %}
{% comment %} Display the post's tags in a link that is an extra-small sized button {% endcomment %}
<a class="btn btn-info btn-xs active" href="/categories/#{{ category | slugify }}"> {{ category }}</a>
{% endfor %}
{% comment %} Display the post's date in a human-readable fashion {% endcomment %}
<br> {{ page.date | date_to_long_string }}
</ul>
{% endfor %}

{% endif %}
