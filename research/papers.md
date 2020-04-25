---
title: Papers
layout: defaults
description: In addition to editing volumes of journals, my colleagues and students and I publish research papers in the fields of software engineering and software testing. Find your favorite article and start reading!
image: /download/images/10600355815_18896130aa_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/head_jumbotron.html title=page_title subtitle="polished publications in" highlight="software engineering" %}

{% comment %} Only generate the list of papers when requested or for a production build {% endcomment %}
{% if jekyll.environment == 'production' or jekyll.environment == 'papers' %}

{% comment %} Display all of the research papers that are not edited volumes and published conference or journal papers {% endcomment %}
## Research Papers
{% bibliography --template bibliography_entry_paper --query @article[keywords!=edit] && @inproceedings && @incollection %}

{% comment %} Display all of the theses and dissertations, matching by the keyword that filters them out in the CV {% endcomment %}
## Theses
{% bibliography --template bibliography_entry_paper --query @*[keywords=kapfhammer] %}

{% comment %} Display all of the volumes that I have edited, matching on the keyword for the articles {% endcomment %}
## Volumes Edited
{% bibliography --template bibliography_entry_paper --query @article[keywords=edit] %}

{% endif %}
