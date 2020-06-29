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
Throughout my career, my <a href="{{site.baseurl}}research/">research</a> has
focused on creating and evaluating methods for automatically generating test
cases and test inputs, thereby supporting programmers with clever tests that may
find defects in their programs or test suites. For instance, {% include_cached
_popovers/paper_reference.html cite="Alsharif2018" %} introduces a tool for
automatically generating tests for relational database schemas and {%
include_cached _popovers/paper_reference.html cite="McMinn2016b" %} presents a
framework that supports the creation of automated test data generation tools for
the Java programming language. However, until recently, none of my research <a
href="{{site.baseurl}}research/papers">papers</a> assessed whether or not these
approaches actually help human testers. Of course, my colleagues and I
recognized that this was an area that warranted further investigation! I'm
pleased to report that our recent paper {% include_cached
_popovers/paper_reference.html cite="Alsharif2019" trailing="," %} presents a
human study of automated test data generation techniques for relational database
schemas.
</p>

Since relational databases are a key component of software systems ranging from
small mobile to large enterprise applications, there are well-studied methods
that automatically generate test cases for database-related functionality. Yet,
there has been no research to analyze how well testers — who must often serve as
an "oracle" — both understand tests involving SQL and decide if they reveal
flaws. This paper reports on a human study of test comprehension in the context
of automatically generated tests that assess the correct specification of the
integrity constraints in a relational database schema. In this domain, a tool
generates INSERT statements with data values designed to either satisfy (i.e.,
be accepted into the database) or violate the schema (i.e., be rejected from the
database). The study reveals two key findings. First, the choice of data values
in INSERTs influences human understandability: the use of default values for
elements not involved in the test (but necessary for adhering to SQL’s syntax
rules) aided participants, allowing them to easily identify and understand the
important test values. Yet, negative numbers and "garbage" strings hindered this
process. The second finding is more far reaching: humans found the outcome of
test cases very difficult to predict when NULL was used in conjunction with
foreign keys and CHECK constraints. This suggests that, while including NULL s
can surface the confusing semantics of database schemas, their use makes tests
less understandable for humans.

</p>

Do you have your own experiences with software failure? Have you seen the
benefits of a program no longer meeting your needs? If you have, then I hope
that you will [contact]({{site.baseurl}}contact/) me to share some of your
thoughts. Or, do you want to be updated when I publish new blog posts like this
one? If you do, then please [subscribe]({{site.baseurl}}support/) to my mailing
list.

{% include _footers/blog_footer.html %}
