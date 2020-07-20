---
title: Responsive web testing helps to create a wow-worthy web
layout: blog_n
categories: [research, software, testing]
author: Gregory M. Kapfhammer
date: 2020-06-12
description: It is important to test the responsive layout of a web page.
---

# {{page.title}}
{% include _headers/blog_header.html %}

Given its exceptional page layout, interesting and relevant articles, and
amazing artwork, I've enjoyed reading all the issues of [Increment
Magazine](https://increment.com/). Since web testing is one of my active
[research]({{site.baseurl}}research/) areas, I read with interest the May 2020
issue on the "Frontend" theme. An interview collection called [Frontend at
scale](https://increment.com/frontend/frontend-at-scale/) with leading industry
experts such as [Joscha Feth](https://www.linkedin.com/in/joschafeth/) from
[Canva](https://www.canva.com/) piqued my interest! Here's an excerpt from
Joscha's interview:

 "We use visual regression testing to ensure that unintended changes don’t make
 it to the baseline in the first place. Our end-to-end tests, run against a
 local stack of Canva, guard every release as the last automated step. Lastly,
 we do use manual testing for things that are hard to test in an automated
 fashion. (Drag-and-drop interactions come to mind.) We are trying to automate
 these tests as they are currently preventing us from going from daily releases
 to continuous deployment."

If you want to learn more about the "visual regression testing" approach that
they have adopted at Canva, then I encourage you to read Joscha's article [Why
we left manual UI testing
behind](https://product.canva.com/automated-visual-testing-at-canva/). Now, you
may be wondering why I am so excited to see articles from industry-leading
experts and industry-focused magazines highlight the challenges and importance
of mobile-ready web testing. Well, I teach [courses]({{site.baseurl}}teaching/)
on web development &mdash; in fact, I'm teaching the course again during the
Fall 2020 semester! &mdash; and I've used a variety of technologies to create
and maintain several web sites, helping me to understand how hard it is to test
the responsive layout of a mobile-ready page.

<p>

Since 2015 my colleagues and I have also been building and experimentally
studying tools that support the testing of responsive web pages. To date, our
work has created automated techniques to address two key challenges: (i)
surfacing differences in responsive web layouts and (ii) detecting responsive
layout failures without explicit test oracles. Our work published in {%
include_cached _popovers/paper_reference.html cite="Walsh2015" %} and {%
include_cached _popovers/paper_reference.html cite="Walsh2020" %} presents an
automated approach that extracts the responsive layout of two versions of a web
page and compares them, alerting developers to the differences in layout that
they may wish to investigate further. The results from the experiments presented
in those papers reveal that, when compared with manual and automated baseline
testing techniques, our automated technique detected 12.5% and 18.75% more
layout changes, respectively.

</p>

<p>

Since web developers often lack an automated oracle by which they can validate a
web page's responsive layout, my colleagues and I also developed an "oracle
free" failure detection technique that checks the consistency of a page's
responsive layout across a range of viewport widths. The results in {%
include_cached _popovers/paper_reference.html cite="Walsh2017" %} show that our
approach can find failures in 16 of the 26 production web pages studied,
detecting a total of 33 distinct failures in a fully automated fashion. However,
since this technique can still report false positives, we've recently published
{% include_cached _popovers/paper_reference.html cite="Althomali2019" %} to
describe a follow-on method that can automatically classify a potential layout
failure as a true positive, a false positive, or a non-observable issue. Using
these two tools in conjunction means that developers have a fully automated way
to automatically detect layout failures in a responsive web page!

</p>

In summary, it is exciting to see that software engineers in industry are
adopting commercial tools, like [Percy](https://percy.io/), that are similar in
aim to those that we are prototyping and releasing as free and open-source
[software]({{site.baseurl}}software/). While both academia and industry are
starting to make progress on this important problem, more work remains to create
fully automated methods for testing responsive web pages. Do you have ideas
about how to further enhance the process of testing a mobile-ready web page? Are
you interested in collaborating with me on [research]({{site.baseurl}}research/)
to make the next generation of automated responsive web testing techniques? If
so, then I hope that you will [contact]({{site.baseurl}}contact/) me to share
some of your ideas! Or, do you want to be updated when I publish new blog posts
like this one? If you do, then please [subscribe]({{site.baseurl}}support/) to
my mailing list.

{% include _footers/blog_footer.html %}
