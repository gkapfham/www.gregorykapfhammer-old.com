---
title: A status update on suggested software and strategies
layout: blog_n
categories: [writing, software, productivity]
author: Gregory M. Kapfhammer
date: 2018-11-01
image: /download/images/33263496771_334a5b0b93_z.jpg
---

{% include _headers/blog_header.html %}

<!-- Include header image -->
{% include _popovers/image_reference.html image="33263496771_334a5b0b93_z.jpg" content="<a title='It's Lantern City here!' href='https://flickr.com/photos/nevillewootton/33263496771'>It's Lantern City here!</a> flickr photo by <a href='https://flickr.com/people/nevillewootton'>Neville Wootton Photography</a> shared under a <a href='https://creativecommons.org/licenses/by/2.0/'>Creative Commons (BY) license</a>" label="CC (BY)" %}

{% describe %}
Many of the articles on my [blog]({{site.baseurl}}blog/), describe the tools
that I use when I prepare my [courses]({{site.baseurl}}teaching/), conduct
[research]({{site.baseurl}}research/), write
[papers]({{site.baseurl}}research/papers/), and implement
[software]({{site.baseurl}}software/). Given the rapid pace of innovation in the
field of software engineering, I thought that it would be a good idea to share a
status update on my use of the software that I suggested in previous posts.
{% enddescribe %}

{% comment %} Distraction Free Writing {% endcomment %}

- In the article [Distraction-free writing with a terminal timer and Ubuntu
notifications]({% post_url 2017-07-21-Distraction-Free-Writing %}), I suggested
that a distracted writing could use
[termdown](https://github.com/trehn/termdown) to set a countdown timer in their
terminal window. Today I still use the same software tool! If you use a terminal
window and you are comfortable with installing and using a Python program, then
I still recommend that you consider this simple approach.

{% comment %} Virtual Environments {% endcomment %}

- In the article [Using virtual environments in Python 3]({% post_url
2017-07-14-Virtual-Environments %}), I suggested the use of
[venv](https://docs.python.org/3/library/venv.html) to manage the creation of
virtual environments when implementing a Python 3 program. I no longer adopt
this approach, instead using [Pipenv](https://github.com/pypa/pipenv) to support
virtual environment and dependency management for programs like
[GatorGrader](https://github.com/GatorEducator/gatorgrader).

What software tools do you use when you implement software or write technical
articles? I invite you to [contact]({{site.baseurl}}contact/) me with your own
suggestions for innovative software.

{% include _footers/blog_footer.html %}
