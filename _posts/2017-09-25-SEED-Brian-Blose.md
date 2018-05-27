---
layout: blog_n
categories: [seed, interview, software]
title: SEED Interview with Brian Blose
company_name: "Giant Eagle"
title_name: "Software Developer"
web_site: "https://www.linkedin.com/in/brian-blose-2545871a/"
---

# {{page.title}}
## <em>{{ page.date | date_to_long_string }}</em>

<a title="Glass, Stained" href="https://flickr.com/photos/sammcox/7787947034"><img class="img-responsive-tight" src="https://farm8.static.flickr.com/7274/7787947034_482bc3662e_z.jpg" /></a><br /><small><a title="Glass, Stained" href="https://flickr.com/photos/sammcox/7787947034">flickr photo</a> by <a href="https://flickr.com/people/sammcox">SammCox</a> shared under a <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC (BY-NC) license</a> </small>

{% assign size = site.baseurl | size | minus: 1 %}

{% describe %}

As part of the [SEED project]({{ site.baseurl | slice: 0, size }}{% post_url
2017-07-05-Introducing-SEED %}), I recently talked with [Brian
Blose]({{page.web_site}}), a {{page.title_name}} at {{page.company_name}}. In
this interview, Brian shared with me that software engineers need to be adept
at gathering the requirements of the systems that they will implement. Brian
also stressed that it is important for software engineers to seek out and learn
from mentors. Read Brian's responses to the three SEED questions to learn more
about his unique perspective on the engineering of software.

{% enddescribe %}

## What is one fun fact that you can share about your company or a current project?

While most wouldn't expect it of a regional grocery chain, Giant Eagle is one
of the larger information technology employers in Pittsburgh. This is mostly
due to the company philosophy of building software in house instead of buying
commercial-off-the-shelf products. Giant Eagle's pharmacy pushes approximately
a third of prescriptions chain-wide to a central processing facility where
robotic systems dispense pills into bottles, then drop it to an assembly line
for workers to package and ship to individual pharmacies. I have the fortune
&mdash; and occasionally the dismay &mdash; of building and maintaining
interfaces between the software of this facility and our store systems.

## What is the greatest challenge that you face when working in your field?

Requirements gathering is consistently the most challenging aspect in software
development for me. Some of this can be offloaded onto a business analyst if
you're fortunate to have one on your project, but often you need to sit down
with the people who will use your software &mdash; not their boss or the
director of their department &mdash; and learn how they do their job in order
to shake out the important details. The alternative is hacking together a
series of emergency fixes to account for the incomplete specs.

## What is one point of advice that you can give to people who plan to enter your field?

No one expects the new developer to be an immediate star in the corporate
world. Obtaining your degree in Computer Science is a huge accomplishment, but
there is so much more to learn &mdash; some of which will be unique to the
organization that employs you. If you are not formally provided a mentor, then
identify someone knowledgeable and personable enough on your team to answer
questions and provide advice.

Do you have any questions about this interview? Or, do you have a response to
Brian's ideas? If you do, then I hope that you will
[contact]({{site.baseurl}}contact/) me to share some of your thoughts. Or, do
you want to be updated when I publish new interviews in this series? If you do,
then please [subscribe]({{site.baseurl}}support/) to my mailing list.

{% include _footers/blog_footer.html %}
