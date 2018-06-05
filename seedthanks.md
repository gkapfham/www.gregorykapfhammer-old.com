---
title: Thank You!
layout: defaults
---

# {{page.title}}

<a title="SEED PODS" href="https://flickr.com/photos/meloart/8608133415"><img class="img-responsive-tight" src="https://farm9.static.flickr.com/8541/8608133415_35de14d034_z.jpg" /></a><br /><small><a title="SEED PODS" href="https://flickr.com/photos/meloart/8608133415">flickr photo</a> by <a href="https://flickr.com/people/meloart">meloart</a> shared under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC (BY-NC-ND) license</a> </small>

{% assign size = site.baseurl | size | minus: 1 %}

{% describe %}

Thank you for completing the [SEED survey]({{site.baseurl}}seed/)! You can read the [introduction to the SEED
project]({{ site.baseurl | slice: 0, size }}{% post_url 2017-07-05-Introducing-SEED %}) if you would like to learn more
about this initiative. When your interview is selected for inclusion in the SEED series, I will email you an advance
copy if you have requested that I do so. Otherwise, your interview will appear on my [blog]({{site.baseurl}}blog/).
Now, you can check out one of these pages to learn more about my work in software engineering, software testing, and
data science.

{% enddescribe %}
