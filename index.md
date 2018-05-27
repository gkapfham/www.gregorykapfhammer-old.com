---
title: Gregory M. Kapfhammer
layout: defaults
categories: [main]
---

# Gregory M. Kapfhammer

{% describe %}
Welcome! My name is Gregory M. Kapfhammer. Focusing on technical areas such as
software engineering, software testing, and data science, I
[teach]({{site.baseurl}}teaching/) courses, conduct
[research]({{site.baseurl}}research/), write
[papers]({{site.baseurl}}research/papers/), give
[presentations]({{site.baseurl}}research/presentations/), create
[software]({{site.baseurl}}software/), and [serve]({{site.baseurl}}service/)
organizations. I am an Associate Professor in and Chair of the [Department of
Computer Science](http://www.cs.allegheny.edu) at [Allegheny
College](http://www.allegheny.edu). In addition to delivering seminars about
research methods and effective communication in technical fields, I serve as an
academic and research adviser for undergraduate and graduate students and a
consultant for the software industry. You can read my professional
[biography]({{site.baseurl}}biography/) if you would like to learn more about
me. Please [subscribe]({{site.baseurl}}support/) to my mailing list if you want
me to send you informative status updates about my current projects.
{% enddescribe %}

{% comment %} No longer include a reference to my CV since it is _really_ out
of date! {% endcomment %}

{% comment %} or {% endcomment %}
{% comment %} view my curriculum vitae as either a <a target="_blank" href = {% endcomment %}
{% comment %} "{{site.baseurl}}cv/curriculum_vitae_kapfhammer.pdf">PDF</a> or an <a {% endcomment %}
{% comment %} target="_blank" href = {% endcomment %}
{% comment %} "{{site.baseurl}}cv/curriculum_vitae_kapfhammer.html">HTML5</a> document. {% endcomment %}

## SEED Survey

{% comment %} Reference the SEED Survey for "interviews" with software engineers {% endcomment %}

<ul class="fa-ul"> <li><i class="fa-li fa fa-users fa-lg"></i><a class="major"
href="{{site.baseurl}}seed/">Are you working in the software industry? Share
your expertise with educators and students!</a></li> Released July 2017 </ul>

## Featured Paper

{% comment %} Display the paper that would display first on the research papers
page (must use a different template) {% endcomment %}

{% bibliography --template bibliography_entry_forward --group_by none --max 1 %}

## Recent Presentation

{% comment %} Display the presentation that would display first on the talks
page (must use a different template) {% endcomment %}

{% bibliography --template bibliography_entry_forward --query @misc[keywords!=supervised] --group_by none --max 1 %}

## Novel Software

{% comment %} Reference one of the software tools and give a date for a recent
update or release {% endcomment %}

<ul class="fa-ul">
<li><i class="fa-li fa fa-code fa-lg"></i><a class="major"
href="https://github.com/redecheck/redecheck-tool">ReDeCheck: Automated checking of responsively designed web sites</a></li>
Updated May 2017
</ul>

## Latest Post

{% comment %} Find the most recent blog post and provide a link to it, giving the date on which it was written {% endcomment %}

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

<ul class="fa-ul">
{% for page in site.pages %}
  {% if page.course == true and page.featured == true %}
  <li><i class="fa-li fa fa-cog fa-lg"></i><a class="major" href="{{site.baseurl}}{{ page.url | remove_first:'/'}}">{{ page.title | capitalize_all }}</a></li>
  {{page.subtitle}}
  {% endif %}
{% endfor %}
</ul>

## Status Updates

{% comment %} Display recent tweets, using the Twitter fetcher plugin (see the
corresponding CSS and JavaScript for details) {% endcomment %}

<div id="tw-gkapfham">
</div>
