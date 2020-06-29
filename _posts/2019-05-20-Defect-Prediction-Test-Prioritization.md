---
title: Can defect prediction enhance test suite prioritization techniques?
layout: blog_n
categories: [research, software, testing]
author: Gregory M. Kapfhammer
date: 2019-05-20
description: Defect prediction and support test suite prioritization
---

# {{page.title}}
{% include _headers/blog_header.html %}

I've written about test suite prioritization in two previous posts called
[Regression testing of software is costly &mdash; but you can do something about
it!]({% post_url 2017-07-03-Regression-Testing-Costs %}) and [Using real faults
to evaluate test suite prioritization techniques]({% post_url
2018-12-07-Real-Faults-Prioritization %}). In those posts I I pointed out that
software engineers often write test suites that they will re-run as they modify
a program. I also explained that this this valuable &mdash; and expensive!
&mdash; process, called regression testing, helps developers to ensure that they
have not introduced new defects as they add new features or bug fixes. One
approach to improving regression testing is to prioritize the test suite so that
test execution first runs those tests that are most likely to find defects.

<p>
In one of my recent research papers, {% include_cached
_popovers/paper_reference.html cite="Paterson2019" trailing="," %} my co-authors
and I introduced an automated way to enhance test suite prioritization through
the use of defect prediction. While many different strategies have been
developed and evaluated for reordering test suites, prior experiments have shown
them to not be effective at prioritizing test suites to find real faults. This
paper presents a test case prioritization strategy based on defect prediction, a
technique that analyzes code features &mdash; such as the number of revisions
and authors &mdash; to estimate the likelihood that a software component will
contain a defect. Intuitively, if defect prediction can accurately predict the
class that is most likely to be defective, a tool can prioritize tests to
rapidly detect the defects in that class.
</p>

Since the goal of our paper was not to implement a new defect prediction
technique, we investigated how to configure an existing tool, called Schwa, to
maximize the likelihood of an accurate prediction, surfacing the link between
perfect defect prediction and test case prioritization effectiveness. Our
paper's experiments used 6 real-world Java programs containing 395 real faults,
to compare the presented strategy, called G-clef, against eight existing test
case prioritization strategies. The experiments reveal that using defect
prediction to prioritize test cases reduces the number of test cases required to
find a fault by on average 9.48% when compared with existing coverage-based
strategies, and 10.5% when compared with existing history-based strategies.

You may be asking yourself whether or not decreasing by about 10% the number of
test cases needed to find a fault is a noticeable improvement for the regression
testing of a software application. It is a good question! If you are testing a
small application with only a few tests, then the benefits of the presented
approach may be outweighed by the costs of running G-clef. With that said, if
you are a software engineer repeatedly running a comprehensive test suite in a
continuous integration environment, then running 10% fewer tests before you find
the first defect could be beneficial! From my own experience in developing
[software]({{site.baseurl}}software/) with thousands of tests that run on a
cloud-based CI server in multiple operating systems, runtime environments, and
versions of a programming language, then a small decrease in the number of
needed tests would nicely streamline my workflow!

<p>
If you want to learn more about these ideas, then please read my survey paper
that overviews the regression testing field {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2010" trailing="." %} Since I
would like to learn about other approaches, I hope that you will <a
href="{{site.baseurl}}contact/">contact</a> me with your suggestions for how to
improve test suite prioritization techniques. Finally, if you want to be updated
when I publish new blog posts like this one? If you do, then please <a
href="{{site.baseurl}}support/">subscribe</a> to my mailing list.
</p>

{% include _footers/blog_footer.html %}
