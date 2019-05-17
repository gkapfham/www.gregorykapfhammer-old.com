---
title: Gregory M. Kapfhammer
layout: defaults
categories: [main]
---

# Gregory M. Kapfhammer

{% describe %}
Welcome! My name is Gregory M. Kapfhammer. Innovating in technical areas such as
software engineering, software testing, and data science, I teach
[courses]({{site.baseurl}}teaching/), conduct
[research]({{site.baseurl}}research/), write
[papers]({{site.baseurl}}research/papers/) and a [blog]({{site.baseurl}}blog/),
give [presentations]({{site.baseurl}}research/presentations/), create
[software]({{site.baseurl}}software/), and [serve]({{site.baseurl}}service/)
organizations. An Associate Professor in the [Department of Computer
Science](http://www.cs.allegheny.edu) at [Allegheny
College](http://www.allegheny.edu), I serve as an associate editor for the [Journal
of Software: Evolution and
Process](https://onlinelibrary.wiley.com/journal/20477481), an academic editor
for the [PeerJ Computer Science](https://peerj.com/computer-science/) journal,
and a program committee member for conferences like the [International
Conference on Software Testing, Verification and
Validation](https://cs.gmu.edu/icst/index.html). You can learn more about me by
reading my [biography]({{site.baseurl}}biography/) and stay up-to-date with my
work by [subscribing]({{site.baseurl}}support/) to my mailing list.
{% enddescribe %}

## SEED Survey

{% comment %} Reference the SEED Survey for "interviews" with software
engineers {% endcomment %}

<ul class="fa-ul"> <li><i class="fa-li fa fa-users fa-lg"></i><a class="major"
href="{{site.baseurl}}seed/">Are you working in the software industry? Share
your expertise with educators and students!</a></li> Enhanced July 2018 </ul>

## Featured Paper

{% comment %} Display the paper that would display first on the research papers
page (must use a different template) {% endcomment %}

{% comment %} Only generate the list of papers when requested or for a
production build {% endcomment %}

{% if jekyll.environment == 'production' or jekyll.environment == 'papers' %}

{% bibliography --template bibliography_entry_forward --group_by none --max 1 %}

{% endif %}

## Recent Talk

{% comment %} Only generate the list of papers when requested or for a
production build {% endcomment %}

{% if jekyll.environment == 'production' or jekyll.environment == 'talks' %}

{% bibliography --template bibliography_entry_forward --query @misc[keywords!=supervised] --group_by none --max 1 %}

{% endif %}

## Useful Software

{% comment %} Reference one of the software tools and give a date for a recent
update or release {% endcomment %}

<ul class="fa-ul">
<li><i class="fa-li fa fa-code fa-lg"></i><a class="major"
href="https://github.com/GatorEducator/gatorgrader">GatorGrader: Automated assessment tool for source code and technical writing</a></li>
Updated May 2019
</ul>

## Latest Post

{% comment %} Find the most recent blog post and provide a link to it, giving
the date on which it was written {% endcomment %}

<ul class="fa-ul">
{% for post in site.posts limit:1 %}
  <li><i class="fa-li fa fa-edit fa-lg"></i><a class="major"
  href="{{site.baseurl}}{{ post.url | remove_first:'/'}}">{{ post.title
  }}</a></li> Published {{ post.date | date: '%B %Y'}}
{% endfor %}
</ul>

## Current Course

{% comment %} Display the featured course site by iterating through the sites
and finding the featured one {% endcomment %}

{% comment %} Only generate the list of courses when requested or for a
production build {% endcomment %}

{% if jekyll.environment == 'production' or jekyll.environment == 'courses' %}

<ul class="fa-ul">
{% for page in site.pages %}
  {% if page.course == true and page.featured == true %}
  <li><i class="fa-li fa fa-cog fa-lg"></i><a class="major" href="{{site.baseurl}}{{ page.url | remove_first:'/'}}">{{ page.title | capitalize_all }}</a></li>
  {{page.subtitle}}
  {% endif %}
{% endfor %}
</ul>

{% endif %}

## Status Updates

{% comment %} Display recent tweets, using the Twitter fetcher plugin (see the
corresponding CSS and JavaScript for details) {% endcomment %}

<div id="tw-gkapfham">
</div>
