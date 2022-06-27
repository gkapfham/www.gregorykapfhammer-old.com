---
title: Gregory M. Kapfhammer
layout: defaults
description: Gregory M. Kapfhammer is an innovator in technical areas such as software engineering and software testing.
categories: [main]
---

<div class="jumbotron">
<h1><em>Hello</em> my name is Gregory M. Kapfhammer</h1>
<p class="lead">I am an <a class="characteristic" href="/software/">engineer</a> who <a class="characteristic" href="/teaching/">educates</a>.</p>
<p class="lead">I'm also a <a class="characteristic" href="/research/papers/">scientist</a> who <a class="characteristic" href="/service/">serves</a>.</p>
<p class="lead">I'm also a <a class="characteristic" href="/biography/">person</a> who <a class="characteristic" href="/principles/">cares</a>.</p>
<script>
document.write(randomLead());
</script>
</div>

## Introduction

Innovating in technical areas such as software engineering and software testing,
I teach [courses]({{site.baseurl}}teaching/), conduct
[research]({{site.baseurl}}research/), write
[papers]({{site.baseurl}}research/papers/) and a [blog]({{site.baseurl}}blog/),
give [presentations]({{site.baseurl}}research/presentations/), create
[software]({{site.baseurl}}software/), and [serve]({{site.baseurl}}service/)
organizations. Working as an Associate Professor in the [Department of Computer
Science](http://www.cs.allegheny.edu) at [Allegheny
College](http://www.allegheny.edu), I am an associate editor for the [Journal of
Software: Evolution and
Process](https://onlinelibrary.wiley.com/journal/20477481), an academic editor
for the [PeerJ Computer Science](https://peerj.com/computer-science/) journal, a
program committee member for conferences like the [International Conference on
Software Testing, Verification and
Validation](https://cs.gmu.edu/icst/index.html) and the [International
Conference on Automated Software
Engineering](https://conf.researchr.org/series/ase), and a reviewer for journals
like [Transactions on Software
Engineering](https://www.computer.org/csdl/journal/ts). You can learn more about
me and my work by reading my [biography]({{site.baseurl}}biography/),
downloading my [curriculum
vitae](https://github.com/gkapfham/curriculum-vitae/releases/download/v1.3.2/curriculum_vitae_kapfhammer.pdf),
and [subscribing]({{site.baseurl}}support/) to my mailing list.

## Research Expertise

<ul>

<div class="featured"> <li><a class="major"
href="{{site.baseurl}}research#FlakyTests">Flaky Tests</a>: Finding and fixing
unpredictable and harmful test cases</li> </div>

<div class="featured"> <li><a class="major"
href="{{site.baseurl}}research#DatabaseTesting">Database Testing</a>:
Automatically testing relational database schemas</li> </div>

<div class="featured"> <li><a class="major"
href="{{site.baseurl}}research#WebTesting">Web Testing</a>: Detecting and
repairing poor responsive web page layout</li> </div>

</ul>

<div class="question">
<em>Hold on</em>, would you like to explore my areas of <a href="{{site.baseurl}}research/">research expertise</a>?
</div>

## Featured Papers

{% comment %} Display the paper that would display first on the research papers
page (must use a different template) {% endcomment %}

{% comment %} Only generate the list of papers when requested or for a
production build {% endcomment %}

{% if jekyll.environment == 'production' or jekyll.environment == 'papers' %}

{% bibliography --template bibliography_entry_forward_paper --group_by none --max 3 %}

{% endif %}

<div class="question">
<em>Hey</em>, are you interested in reading my other <a href="{{site.baseurl}}research/papers/">research papers</a>?
</div>

## Recent Talks

{% comment %} Only generate the list of papers when requested or for a
production build {% endcomment %}

{% if jekyll.environment == 'production' or jekyll.environment == 'talks' %}

{% bibliography --template bibliography_entry_forward_presentation --query @misc[keywords!=supervised] --group_by none --max 3 %}

{% endif %}

<div class="question">
<em>Psst</em>, do you want to preview my other <a href="{{site.baseurl}}research/presentations/">technical presentations</a>?
</div>

## Useful Software

{% comment %} Reference one of the software tools and give a date for a recent
update or release {% endcomment %}

<ul>

<div class="featured">
<li><a class="major" target="_blank" rel="noopener"
href="https://github.com/GatorEducator/gatorgrader">GatorGrader</a>: Automated assessment for source code and technical writing</li>
</div>

<div class="featured">
<li><a class="major"
href="https://github.com/Tada-Project/tada">TaDa</a>: Automated order-of-growth analysis for Python functions</li>
</div>

<div class="featured">
<li><a class="major"
href="https://github.com/CommittedTeam/CommitCanvas">CommitCanvas</a>: Extensible checking of Git commit messages with pre-commit</li>
</div>

</ul>

<div class="question">
<em>Wait</em>, don't forget to try my other <a href="{{site.baseurl}}software/">open-source software</a>!
</div>

## Recent Posts

{% comment %} Find the most recent blog post and provide a link to it, giving
the date on which it was written {% endcomment %}

<ul>
{% for post in site.posts limit:3 %}
  <div class="featured">
  <li><a class="major"
  href="{{site.baseurl}}{{ post.url | remove_first:'/'}}">{{ post.title
  }}</a></li> Last updated on {{ post.date | date: '%B %Y'}}
  </div>
{% endfor %}
</ul>

<div class="question">
<em>Hold on</em>, make sure to read my other <a href="{{site.baseurl}}blog/">blog posts</a>!
</div>

## Highlighted Course

{% comment %} Display the featured course site by iterating through the sites
and finding the featured one {% endcomment %}

{% comment %} Only generate the list of courses when requested or for a
production build {% endcomment %}

{% if jekyll.environment == 'production' or jekyll.environment == 'courses' %}

<ul>
{% for page in site.pages %}
  {% if page.course == true and page.featured == true %}
  <li><a class="major" href="{{site.baseurl}}{{ page.url | remove_first:'/'}}">{{ page.title | capitalize_all }}</a></li>
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
