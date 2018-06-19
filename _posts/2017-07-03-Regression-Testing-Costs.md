---
title: Regression testing of software is costly &mdash; but you can do something about it!
layout: blog_n
categories: [testing, research, advice]
author: Gregory M. Kapfhammer
date: 2017-07-03
image: /download/images/3119405564_e48979041b_z.jpg
---

{% include _headers/blog_header.html %}

<!-- include_cached header image -->
{% include_cached _popovers/image_reference.html image="3119405564_e48979041b_z.jpg" content="<a title='155/365 Infinite Regression (fractal)' href='https://flickr.com/photos/stuartpilbrow/3119405564'>flickr photo</a> by <a href='https://flickr.com/people/stuartpilbrow'>stuartpilbrow</a> shared under a <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC (BY-SA) license</a>" label="CC (BY-SA)" %}

{% describe %}
To establish a confidence in the correctness of their software, developers will
often write test suites that they will re-run as the program is modified,
attempting to ensure that they have not introduced regressions, or faults that
arise as an unintended side effect of changes. This process, known as regression
testing, is important and yet expensive.
{% enddescribe %}

Regression testing is costly because, as software grows in size and complexity,
a suite accumulate more tests and therefore take longer to run. For instance, a
2011 conference paper reports that the regression testing of a [Microsoft
product](http://dl.acm.org/citation.cfm?id=2119649) required several days. Of
course, even if a regression test suite only takes minutes to run, developers
may find its execution distracting.

<p>
Prior work has developed many techniques to address the substantial
computational cost associated with regression testing, with test suite reduction
and prioritization emerging as two of the most promising. Test suite reduction
aims to find a smaller test suite that covers the same requirements as does the
full test suite {% include_cached _popovers/paper_reference.html cite="Lin2014"
trailing="." %} Alternatively, test suite prioritization aims to find a test
ordering such that faults in a program can be detected as early as is possible,
thus enabling the processes of debugging and program repair to quickly start {%
include_cached _popovers/paper_reference.html cite="Lin2013" trailing="." %}
</p>

<p>
Another approach to regression testing involves selecting only those test cases
that exercise the program functionality that was most recently changed. A recent
paper reports that test selection <a href =
"https://www.microsoft.com/en-us/research/publication/the-art-of-testing-less-without-sacrificing-quality/">saves
Microsoft</a> millions of dollars every year &mdash; all without compromising
the quality of the program under test. So, interested in learning more about
regression testing? If you are, then please read {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2010" trailing="." %}
</p>

Do you perform regression testing of software in industry? Or, do you conduct
regression testing on an open-source tool? Are you interested in discovering
ways to transition cutting-edge research into your practice of regressing
testing? If you answered "yes" to any of these questions, I hope that you will
soon [contact]({{site.baseurl}}contact/) me with your own ideas and experiences.

{% include _footers/blog_footer.html %}
