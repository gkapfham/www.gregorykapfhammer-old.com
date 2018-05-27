---
title: Regression testing of software is costly &mdash; but you can do something about it!
layout: blog_n
categories: [testing, research, advice]
author: Gregory M. Kapfhammer
date: 2017-07-03
---

{% include _headers/blog_header.html %}

<a title="155/365 Infinite Regression (fractal)" href="https://flickr.com/photos/stuartpilbrow/3119405564"><img class="img-responsive-tight" src="https://farm4.static.flickr.com/3201/3119405564_e48979041b_z.jpg" /></a><br /><small><a title="155/365 Infinite Regression (fractal)" href="https://flickr.com/photos/stuartpilbrow/3119405564">flickr photo</a> by <a href="https://flickr.com/people/stuartpilbrow">stuartpilbrow</a> shared under a <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC (BY-SA) license</a> </small>

{% describe %}
To establish a confidence in the correctness of their software, developers will often write test suites that they will
re-run as the program is modified, attempting to ensure that they have not introduced regressions, or faults that arise
as an unintended side effect of changes. This process, known as regression testing, is important and yet expensive.
{% enddescribe %}

Regression testing is costly because, as software grows in size and complexity, a suite accumulate more tests and
therefore take longer to run. For instance, a 2011 conference paper reports that the regression testing of a [Microsoft
product](http://dl.acm.org/citation.cfm?id=2119649) required several days. Of course, even if a regression test suite
only takes minutes to run, developers may find its execution distracting.

<a name="Lin2014-return"></a>
<a name="Lin2013-return"></a>
Prior work has developed many techniques to address the substantial computational cost associated with regression
testing, with test suite reduction and prioritization emerging as two of the most promising. Test suite reduction aims
to find a smaller test suite that covers the same requirements as does the full test suite {% cite Lin2014 %}.
Alternatively, test suite prioritization aims to find a test ordering such that faults in a program can be detected as
early as is possible, thus enabling the processes of debugging and program repair to quickly start {% cite Lin2013 %}.

<a name="Kapfhammer2010-return"></a>
Another approach to regression testing involves selecting only those test cases that exercise the program functionality
that was most recently changed. A recent paper reports that test selection [saves
Microsoft](https://www.microsoft.com/en-us/research/publication/the-art-of-testing-less-without-sacrificing-quality/#)
millions of dollars every year &mdash; all without compromising the quality of the program under test. So, interested in
learning more about regression testing? If you are, then please read {% cite Kapfhammer2010 %}.

Do you perform regression testing of software in industry? Or, do you conduct regression testing on an open-source tool?
Are you interested in discovering ways to transition cutting-edge research into your practice of regressing testing? If
you answered "yes" to any of these questions, I hope that you will soon [contact]({{site.baseurl}}contact/) me with
your own ideas and experiences.

Finally, want to cite the 2011 conference paper that I mentioned? You can use this BibTeX reference:

```
{% include _references/carlson2011.ref %}
```

{% include _footers/blog_footer.html %}
{% include _footers/blog_references.html %}
