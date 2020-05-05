---
title: Using real faults to evaluate test suite prioritization techniques
layout: blog_n
categories: [research, software, testing]
author: Gregory M. Kapfhammer
date: 2018-12-07
description: It is a good idea to use real faults to evaluate test suite prioritization techniques.
image: /download/images/1432258649_7aac1d0287_z.jpg
---

# {{page.title}}
{% include _headers/blog_header.html %}

In a previous post, called [Regression testing of software is costly &mdash; but
you can do something about it!]({% post_url 2017-07-03-Regression-Testing-Costs
%}), I pointed out that software engineers often write test suites that they
will re-run as they modify a program. This valuable &mdash; and expensive!
&mdash; process, called regression testing, helps developers to ensure that
they have not introduced new defects as they add new features or bug fixes.

{% comment %} Explain the purpose of the article {% endcomment %}

<p>
Instead of focuses on the practices of software engineers, this draws attention
to the common practices that researchers follow when they are assessing the
effectiveness of prioritization techniques that reorder a test suite. Many
research papers, including some of my own like {% include_cached
_popovers/paper_reference.html cite="Lin2017" trailing="," %} seed the program
under test with synthetic faults called mutants and then see how quickly
different test orderings detect those faults. Since mutation testing
tools exist for many programming languages, this approach is appealing to
researchers who want to evaluate the effectiveness of a new test prioritizer.
</p>

{% comment %} Explain the problem with seeding mutants {% endcomment %}

<p>
One of my research collaborations lead to the recent publication of {%
include_cached _popovers/paper_reference.html cite="Paterson2018" trailing=","
%} a paper that calls into question the use of mutants during the experimental
evaluation of test suite prioritization methods. Using <a href =
"https://github.com/rjust/defects4j">Defects4J</a>, the database of real faults
for Java programs, this paper reports on experiments that investigate how the
use of mutants and real faults influence the experimental study of
coverage-based test prioritizers. The paper shows that real faults, in
comparison to synthetic mutants, are harder for a reordered test suite to
detect. The results also suggest that the use of mutants leads to an
unpredictable scoring of a test suite's effectiveness. In the context of test
suite prioritization, this paper's conclusion is that mutants are not a
surrogate for real faults!
</p>

<p>
If you want to learn more about these results, please read {% include_cached
_popovers/paper_reference.html cite="Paterson2018" trailing="." %} Since I would
like to learn about other approaches, I hope that you will <a
href="{{site.baseurl}}contact/">contact</a> me with your suggestions for how to
experimentally assess a test suite prioritization technique.
</p>

{% include _footers/blog_footer.html %}
