---
layout: defaults
authors: Gregory M. Kapfhammer
title: Categories
description: Here are the topics that I most frequently write about! Find you favorite area and read one of my posts.
image: /download/images/5700106776_857c0ded3b_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/head_jumbotron.html title=page_title subtitle="brief brainstorms on" highlight="technical topics" %}

{% comment %} Only generate the cross-index of blog posts for a production build or a blog {% endcomment %}
{% if jekyll.environment == 'production' or jekyll.environment == 'posts' %}

{% comment %}
Extract and sort the tags
{% endcomment %}

{% assign rawtags = "" %}
{% for post in site.posts %}
  {% assign ttags = post.categories | join:'|' | append:'|' %}
  {% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% comment %}
Remove duplicate tags
{% endcomment %}

{% assign tags = "" %}
{% for tag in rawtags %}
  {% if tag != "" %}
    {% if tags == "" %}
      {% assign tags = tag | split:'|' %}
    {% endif %}
    {% unless tags contains tag %}
      {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% comment %}
List all posts with a specific tag
{% endcomment %}

{% for tag in tags %}
<h2 id="{{ tag | slugify }}">{{ tag }}</h2>
<ul class="fa-ul">
{% for post in site.posts %}
{% if post.categories contains tag %}
  <li><i class="fa-li fa fa-edit fa-lg"></i><a class="major" href="{{site.baseurl}}{{ post.url | remove_first:'/'}}">{{ post.title }}</a></li>
  <!-- Use a button toolbar because this groups the buttons together -->
  <!-- Note that a button toolbar is supposed to add spacing, which I did not notice -->
  <div class="btn-toolbar mt-1 mb-2">
  <i class="fa fa-tags"></i>
  {% for category in post.categories %}
  <!-- Display the post's tags in a link that is an extra-small sized button -->
  <!-- Represent the tags as buttons that have extra vertical spacing between then -->
  <a class="btn btn-info btn-xs active mx-1" href="/categories/#{{ category | slugify }}"> {{ category }}</a>
  {% endfor %}
  </div>
{% endif %}
{% endfor %}
</ul>
{% endfor %}

{% endif %}
