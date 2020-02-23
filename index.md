---
title: Gregory M. Kapfhammer
layout: defaults
categories: [main]
---

<div class="jumbotron">
<h1 class="display-tight">Hello, my name is</h1>
<h1 class="display">Gregory M. Kapfhammer</h1>
<p class="lead">I am an <a class="characteristic" href="/software/">engineer</a> who <a class="characteristic" href="/teaching/">educates</a>.</p>
<p class="lead">I'm also a <a class="characteristic" href="/research/papers/">scientist</a> who <a class="characteristic" href="/service/">serves</a>.</p>
<p class="lead">I'm also a <a class="characteristic" href="/biography/">person</a> who <a class="characteristic" href="/principles/">cares</a>.</p>
<script>
document.write(randomLead());
</script>

</div>

## Introduction

{% describe %}
Innovating in technical areas such as
software engineering and software testing, I teach
[courses]({{site.baseurl}}teaching/), conduct
[research]({{site.baseurl}}research/), write
[papers]({{site.baseurl}}research/papers/) and a [blog]({{site.baseurl}}blog/),
give [presentations]({{site.baseurl}}research/presentations/), create
[software]({{site.baseurl}}software/), and [serve]({{site.baseurl}}service/)
organizations. An Associate Professor in the [Department of Computer
Science](http://www.cs.allegheny.edu) at [Allegheny
College](http://www.allegheny.edu), I am an associate editor for the [Journal
of Software: Evolution and
Process](https://onlinelibrary.wiley.com/journal/20477481), an academic editor
for the [PeerJ Computer Science](https://peerj.com/computer-science/) journal,
and a program committee member for conferences like the [International
Conference on Software Testing, Verification and
Validation](https://cs.gmu.edu/icst/index.html). You can learn more about me by
reading my [biography]({{site.baseurl}}biography/) and stay up-to-date with my
work by [subscribing]({{site.baseurl}}support/) to my mailing list.
{% enddescribe %}

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
Updated January 2020
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

## Highlighted Course

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

## SEED Survey

{% comment %} Reference the SEED Survey for "interviews" with software
engineers {% endcomment %}

<ul class="fa-ul"> <li><i class="fa-li fa fa-users fa-lg"></i><a class="major"
href="{{site.baseurl}}seed/">Are you working in the software industry? Share
your expertise!</a></li> Enhanced July 2018 </ul>

## Status Updates

{% comment %} Display recent tweets, using the Twitter fetcher plugin (see the
corresponding CSS and JavaScript for details) {% endcomment %}

<div id="tw-gkapfham">
</div>
