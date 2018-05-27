---
title: Talks
layout: defaults
description: In addition to giving talks to accompany my conference papers, I also give invited presentations about topics in the fields of software engineering, software testing, and data science. Find your favorite talk view its slides!
---

# {{ page.title }}

<a title="Lines & Beads" href="http://flickr.com/photos/mrpikachu1/10133867075"><img class="img-responsive-tight" src="http://farm4.static.flickr.com/3764/10133867075_2eef7bbc80_z.jpg" /></a><br /><small><a title="Lines & Beads" href="http://flickr.com/photos/mrpikachu1/10133867075">flickr photo</a> shared by <a href="http://flickr.com/people/mrpikachu1">Mr. Pikachu</a> under a <a href="http://creativecommons.org/licenses/by-nc-nd/2.0/">CC (BY-NC-ND) license</a> </small>

{% comment %} display all of the recent presentations (not with conference papers) that I gave directly {% endcomment %}
{% bibliography --query @misc[keywords!=supervised && year!=2000] %}
