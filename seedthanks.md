---
title: Thank You!
layout: defaults
image: /download/images/8608133415_35de14d034_z.jpg
---

# {{page.title}}

<!-- Include header image -->
{% include _popovers/image_reference.html image="8608133415_35de14d034_z.jpg" content="<a title='SEED PODS' href='https://flickr.com/photos/meloart/8608133415'>flickr photo</a> by <a href='https://flickr.com/people/meloart'>meloart</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a> </small>" label="CC (BY-NC-ND)" %}

{% assign size = site.baseurl | size | minus: 1 %}

{% describe %}
Thank you for completing the [SEED survey]({{site.baseurl}}seed/)! You can read
the [introduction to the SEED project]({{ site.baseurl | slice: 0, size }}{%
post_url 2017-07-05-Introducing-SEED %}) if you would like to learn more about
this initiative. When your interview is selected for inclusion in the SEED
series, it will appear on my [blog]({{site.baseurl}}blog/). Please
[contact]({{site.baseurl}}contact/) me with any questions or comments that you
have about this initiative.
{% enddescribe %}
