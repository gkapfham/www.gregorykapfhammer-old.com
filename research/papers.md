---
title: Papers
layout: defaults
description: In addition to editing volumes of journals, my colleagues and students and I publish research papers in the fields of software engineering and software testing. Find your favorite article and start reading!
---

# {{ page.title }}

<a title="window detail bethlemi" href="https://flickr.com/photos/56938735@N03/10600355815"><img class="img-fluid" src="https://farm3.static.flickr.com/2873/10600355815_18896130aa_z.jpg" /></a><br /><small><a title="window detail bethlemi" href="https://flickr.com/photos/56938735@N03/10600355815">flickr photo</a> by <a href="https://flickr.com/people/56938735@N03">rost8668</a> shared under a <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC (BY-SA) license</a> </small>

{% comment %} display all of the research papers that are not edited volumes and published conference or journal papers {% endcomment %}
## Research Papers
{% bibliography --query @article[keywords!=edit] && @inproceedings && @incollection %}

{% comment %} display all of the theses and dissertations, matching by the keyword that filters them out in the CV {% endcomment %}
## Theses
{% bibliography --query @*[keywords=kapfhammer] %}

{% comment %} display all of the volumes that I have edited, matching on the keyword for the articles {% endcomment %}
## Volumes Edited
{% bibliography --query @article[keywords=edit] %}
