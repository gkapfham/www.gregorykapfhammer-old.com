---
title: How do you test a relational database's schema?
layout: blog_n
categories: [testing, database, tool]
author: Gregory M. Kapfhammer
last_modified_at: 2017-6-23
image: /download/images/1640201245_c43eea5270_z.jpg
---

{% include _headers/blog_header.html %}

<!-- include_cached header image -->
{% include_cached _popovers/image_reference.html image="1640201245_c43eea5270_z.jpg" content="<a title='IMG_7849.JPG' href='https://flickr.com/photos/11048370@N05/1640201245'>flickr photo</a> by <a href='https://flickr.com/people/11048370@N05'>YAMASHITAS</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
Database applications are very common and there has been much attention to testing them and the individual database
management systems with which they interact. Yet, there has been very little work devoted to testing arguably the most
important artifact involving an application supported by a relational database &mdash; the underlying schema!
{% enddescribe %}

The development of a database schema is a process open to flaws like any stage of application development. Examples of
potential flaws in database schemas include_cached incomplete primary keys, incorrect foreign keys, and omissions of NOT NULL
declarations. The schema's cornerstone nature to a database application means that defects need to be found early in
order to prevent knock-on effects to other parts of an application and the spiralling bug-fixing costs that may be
incurred.

In this important area of testing for relational database schemas, there are many challenges that researchers and
developers need to address. Some recent advances in this field have focused on automatically generating test data to
exercise the constraints in the database schema and assessing the effectiveness of the generated data through the use of
mutation analysis.

<p>
The paper {% include_cached _popovers/paper_reference.html cite="Kapfhammer2013" %} introduces a search-based technique for
generating database table data with the intention of exercising the integrity constraints placed on table columns. The
testing tool described in this paper, <a href="http://schemaanalyst.org/">SchemaAnalyst</a>, can automatically generate
data that will both satisfy and negate the constraints in the database schema.
</p>

<p>
Of course, the process of automatically generating test data raises the question
"well, how good is this data?" The paper {% include_cached
_popovers/paper_reference.html cite="Wright2013" %} introduces efficient
techniques for answering this question. The presented mutation analysis methods
insert simple faults into the database's schema and check to see whether or not
the test cases can find them. Intuitively, the tests are not very good if they
can not find these faults! In recent empirical studies designed to evaluate the
effectiveness of SchemaAnalyst we compared it to a popular tool for generating
table data, <a href="http://dbmonster.sourceforge.net/">DBMonster</a>. With
competitive or faster data generation times, our method outperforms DBMonster in
terms of both the schema constraint coverage and mutation adequacy scores.
</p>

<p>
Interested in learning more about this topic? Since this blog post was first written, my colleagues and students and I
have published several additional papers about the testing of relational database schemas, with the most noteworthy one
being {% include_cached _popovers/paper_reference.html cite="McMinn2015" trailing="." %} If you are interested in using
SchemaAnalyst to test your own database schema, then please download and use the tool, which is now available from the
GitHub site <a href="https://github.com/schemaanalyst/schemaanalyst">schemaanalyst/schemaanalyst</a>.
</p>

{% include _footers/blog_footer.html %}
