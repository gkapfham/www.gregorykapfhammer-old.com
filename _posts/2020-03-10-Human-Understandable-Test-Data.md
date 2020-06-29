---
title: Can human testers understand automatically generated test cases?
layout: blog_n
categories: [research, software, testing]
author: Gregory M. Kapfhammer
date: 2020-03-10
description: It is important to experimentally study how well humans understand automatically generated test cases.
---

# {{page.title}}
{% include _headers/blog_header.html %}

<p>
Throughout my career, my <a href="{{site.baseurl}}research/">research</a>
has focused on creating and evaluating methods for automatically generating test
cases and test inputs, thereby supporting programmers with clever tests that may
find defects in, for instance, their programs or database schemas. As an
example, {% include_cached _popovers/paper_reference.html cite="Alsharif2018" %}
introduces a tool for automatically generating tests for relational database
schemas and {% include_cached _popovers/paper_reference.html cite="McMinn2016b"
%} presents a framework that supports the creation of automated test data
generation tools for the Java programming language. However, until recently,
none of my research <a href="{{site.baseurl}}research/papers">papers</a>
assessed whether or not these approaches actually help human testers. Of course,
my colleagues and I recognized that this was an area that warranted further
investigation! I'm pleased to report that our recent paper, {% include_cached
_popovers/paper_reference.html cite="Alsharif2019" trailing="," %} presents a
human study of automated test data generation techniques for relational database
schemas.
</p>

<p>
Since relational databases are a key component of software systems ranging
from small mobile to large enterprise applications, there are well-studied
methods that automatically generate test cases for database-related
functionality. As explained in a previous blog post called <a
href="{{site.baseurl}}testing/database/tool/2014/06/12/Schema-Testing/">How do
you test a relational database's schema?</a>, a schema testing tool
automatically generates <code>INSERT</code> statements with data values designed
to either satisfy (i.e., be accepted into the database) or violate the schema
(i.e., be rejected from the database). From my own experience, writing schema
tests is difficult because a human tester has to carefully reason about the,
sometimes complex, relational schema that protects the database's contents.
While having tools like SchemaAnalyst {% include_cached
_popovers/paper_reference.html cite="McMinn2016c" trailing="," %} to
automatically generate tests is useful, as I mentioned previously, there has
been no research to analyze how well testers both understand tests involving SQL
and decide if they reveal flaws.
</p>

<p>
The aforementioned paper, {% include_cached _popovers/paper_reference.html
cite="Alsharif2019" trailing="," %} reports on a human study of test
comprehension in the context of automatically generated tests, created by
SchemaAnalyst, that assess the correct specification of the integrity
constraints in a relational database schema. The study reveals two key findings.
First, the choice of data values in <code>INSERT</code>s influences human
understandability: the use of default values for elements not involved in the
test (but necessary for adhering to SQL’s syntax rules) aided participants,
allowing them to easily identify and understand the important test values. Yet,
negative numbers and "garbage" strings hindered this process. The second finding
is more far reaching: humans found the outcome of test cases very difficult to
predict when <code>NULL</code> was used in conjunction with foreign keys and
<code>CHECK</code> constraints. This suggests that, while including
<code>NULL</code>s can surface the confusing semantics of database schemas,
their use makes tests less understandable for humans. While these results
specifically apply to database schema test, we envision that the results largely
apply to automatically generated tests for programs.
</p>

Ultimately, my co-authors and I make the following suggestions for both the
software engineers who manually write tests and for developers who create tools
that automatically generate tests.

- Negative numbers and <code>NULL</code> values are confusing for human testers
and tests should only include them when they are specifically needed to reveal a
defect.

- Test should use simple repetitions of numerical, categorical, and textual
values for unimportant values because they make it easier for human testers to
focus on the critical values on which the test's status hinges.

- Since readable strings, in comparison to random textual values, help to ensure
that human testers better understand the intention of the test case, they should
be used whenever possible.

While some automated test data generation methods are starting to adopt these
suggestions, more work remains to create automated test data generation tools
and manual testing guidelines that ensure that tests are understandable by human
testers. Do you have ideas about how to make tests more human readable? Are you
interested in collaborating with me on research to make the next generation of
automated test data generation techniques? If so, then I hope that you will
[contact]({{site.baseurl}}contact/) me to share some of your ideas! Or, do
you want to be updated when I publish new blog posts like this one? If you do,
then please [subscribe]({{site.baseurl}}support/) to my mailing list.

{% include _footers/blog_footer.html %}
