---
title: Using Major to perform mutation analysis of Java programs
layout: blog_n
categories: [testing, mutation, research]
author: Gregory M. Kapfhammer
last_modified_at: 2016-10-12
---

{% include _headers/blog_header.html %}

<a title="Speed..." href="http://flickr.com/photos/rhk313/3707813723"><img class="img-responsive-tight" src="http://farm3.static.flickr.com/2577/3707813723_6750e6bc8b_z.jpg" /></a><br /><small><a href="http://creativecommons.org/licenses/by-nc-sa/2.0/">CC (BY-NC-SA)</a> <a title="Speed..." href="http://flickr.com/photos/rhk313/3707813723">flickr photo</a> shared by <a href="http://flickr.com/people/rhk313">Rami™</a></small>

{% describe %}
If you have a [JUnit](http://www.junit.org) test suite, it is important that you ask the question "how good are my test
cases?" If you have a low quality test suite, then you may not be doing a good job at establishing a confidence in the
correctness of the program under test&mdash;and there also could be defects lurking in the application!
{% enddescribe %}

One strategy for assessing the quality of your test suite is to run coverage analysis with a tool like
[JaCoCo](http://www.eclemma.org/jacoco/).  Since a test case cannot find a defect unless it first executes it, the idea
is that you can judge a test suite to be good if it adequately covers the code in the program under test.

However, coverage analysis does not help a tester to know with certainty that the tests are design in such a way that
they are likely to find defects.  As an alternative to, or in addition to coverage analysis, mutation testing inserts
simple faults into the program under test to determine whether or not the tests can find them.  Intuitively, a test case
that can find many of these faults is judged to be a good one.

<a name="Just2011a-return"></a>
<a name="Just2011b-return"></a>
<a name="Just2012b-return"></a>
While mutation analysis is simple and useful, historically, it has been difficult to apply to large-scale programs
because it was computationally expensive. This all changed with the design, implementation, and release of
[Major](http://www.mutation-testing.org), a compiler-integrated mutation testing tool for the Java programming language.
You can learn more about Major by reading {% cite Just2011a %} and {% cite Just2011b %}; more details about how Major
makes mutation testing scalable through use of non-redundant mutation operators and test suite prioritization is
available in {% cite Just2012b %}.

Starting to use the tool is as easy as changing the Java compiler that you use at build time, as demonstrated by the
following line from Major's online documentation.

{% highlight shell %}
$ javac -XMutator:ALL MyFile.java
# Generated Mutants: 190 (96 ms)
{% endhighlight %}

[Rene Just](https://people.cs.umass.edu/~rjust/), the creator of Major, has taken great care to ensure that it is fast,
allowing mutation testing to be applied to large real-world programs. Major v1.1.8, for the Java 7 programming language,
is now available for download&mdash;check Major's site so that you can download the tool and get started with mutation
analysis for your JUnit test suites! If you are interested in Major, then you may also want to investigate the use of
[PIT](http://pitest.org/), another mutation testing tool for programs written in the Java language.

<a name="McCurdy2016-return"></a>
Interested in learning more about this topic? Since this blog post was first written, my colleagues and students and I
have published additional papers about mutation testing, with the most noteworthy one being {% cite McCurdy2016 %}.

{% include _footers/blog_footer.html %}
{% include _footers/blog_references.html %}
