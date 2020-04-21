---
title: Presentations
layout: defaults
description: In addition to giving talks to accompany my conference papers, I also give invited presentations about topics in the fields of software engineering, software testing, and data science. Find your favorite talk view its slides!
image: /download/images/10133867075_2eef7bbc80_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/header.html title=page_title subtitle="enthusiastic outreach in" highlight="technical talks" %}

{% comment %} Only generate the list of talks when requested or for a production build {% endcomment %}
{% if jekyll.environment == 'production' or jekyll.environment == 'talks' %}

{% comment %} Display all of the recent presentations (not with conference papers) that I gave directly {% endcomment %}
{% bibliography --query @misc[keywords!=supervised && year!=2000] %}

{% endif %}
