---
title: Can defect prediction enhance test suite prioritization techniques?
layout: blog_n
categories: [writing, research, idea]
author: Gregory M. Kapfhammer
date: 2019-11-15
description: Defect prediction and support test suite prioritization
---

# {{page.title}}
{% include _headers/blog_header.html %}

I've written about regression testing in two previous posts, [Regression testing
of software is costly &mdash; but you can do something about it!]({% post_url
2017-07-03-Regression-Testing-Costs %}) and [Using real faults to evaluate test
suite prioritization techniques]({% post_url 2018-12-07-Real-Faults-Prioritization %})

I pointed out that software engineers often write test suites that they
will re-run as they modify a program. This valuable &mdash; and expensive!
&mdash; process, called regression testing, helps developers to ensure that
they have not introduced new defects as they add new features or bug fixes.

Test case prioritization has been extensively researched as a means for reducing
the time taken to discover regressions in software. While many different
strategies have been developed and evaluated, prior experiments have shown them
to not be effective at prioritizing test suites to find real faults. This paper
presents a test case prioritization strategy based on defect prediction, a
technique that analyzes code features — such as the number of revisions and
authors — to estimate the likelihood that any given Java class will contain a
bug. Intuitively, if defect prediction can accurately predict the class that is
most likely to be buggy, a tool can prioritize tests to rapidly detect the
defects in that class. We investigated how to configure a defect prediction
tool, called Schwa, to maximize the likelihood of an accurate prediction,
surfacing the link between perfect defect prediction and test case
prioritization effectiveness. Using 6 real-world Java programs containing 395
real faults, we conducted an empirical evaluation comparing this paper’s
strategy, called G-clef, against eight existing test case prioritization
strategies. The experiments reveal that using defect prediction to prioritize
test cases reduces the number of test cases required to find a fault by on
average 9.48% when compared with existing coverage-based strategies, and 10.5%
when compared with existing history-based strategies.

Do you have your own experiences with software failure? Have you seen the
benefits of a program no longer meeting your needs? If you have, then I hope
that you will [contact]({{site.baseurl}}contact/) me to share some of your
thoughts. Or, do you want to be updated when I publish new blog posts like this
one? If you do, then please [subscribe]({{site.baseurl}}support/) to my mailing
list.

{% include _footers/blog_footer.html %}
