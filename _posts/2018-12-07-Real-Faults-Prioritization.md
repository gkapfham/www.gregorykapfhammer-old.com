---
title: Using real faults to evaluate test suite prioritization techniques
layout: blog_n
categories: [research, software, testing]
author: Gregory M. Kapfhammer
date: 2018-12-07
image: /download/images/1432258649_7aac1d0287_z.jpg
---

{% include _headers/blog_header.html %}

<!-- Include header image -->
{% include _popovers/image_reference.html image="1432258649_7aac1d0287_z.jpg" content="<a title='35th Annual Adirondack Balloon Festival 2007' href='https://flickr.com/photos/heartlover1717/1432258649'>35th Annual Adirondack Balloon Festival 2007</a> flickr photo by <a href='https://flickr.com/people/heartlover1717'>Heartlover1717</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>Creative Commons (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
In a previous post, called [Regression testing of software is costly &mdash; but
you can do something about it!]({% post_url 2017-07-03-Regression-Testing-Costs
%}), I pointed out that software engineers often write test suites that they
will re-run as they modify a program. This valuable (and often computationally
expensive) process, called regression testing, helps developers to ensure that
they have not introduced new defects as they add new features or bug fixes.
{% enddescribe %}

{% comment %} Explain the purpose of the article {% endcomment %}

<p>
Instead of focuses on the practices of software engineers, this draws attention
to the common practices that researchers follow when they are assessing the
effectiveness of prioritization techniques that reorder a test suite. Many
research papers, including some of my own like {% include_cached
_popovers/paper_reference.html cite="Lin2017" trailing="," %} seed the program
under test with synthetic faults called mutants and then see how quickly
different test orderings detect those faults. Since there are mutation testing
tools for many popular programming languages, this approach is appealing to
researchers who want to evaluate the effectiveness of a new test prioritizer.
</p>

{% comment %} Explain the problem with seeding mutants {% endcomment %}

<p>

One of my research collaborations lead to the recent publication of {%
include_cached _popovers/paper_reference.html cite="Paterson2018" trailing=","
%} a paper that calls into question the use of mutants during the experimental
evaluation of test suite prioritization methods.

</p>


How do you perform regression testing of your software? How do you
experimentally study regression testing techniques? I invite you to
[contact]({{site.baseurl}}contact/) me with your own suggestions!

{% include _footers/blog_footer.html %}
