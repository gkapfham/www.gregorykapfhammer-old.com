---
title: Is big data a big deal? Not without correct software!
layout: blog_n
categories: [testing, database, idea]
author: Gregory M. Kapfhammer
last_modified_at: 2016-01-07
image: /download/images/2428544365_4fdd69c25d_z.jpg
---

{% include _headers/blog_header.html %}

<!-- include_cached header image -->
{% include_cached _popovers/image_reference.html image="2428544365_4fdd69c25d_z.jpg" content="<a title='vases' href='http://flickr.com/photos/mybloodyself/2428544365'>flickr photo</a> shared by <a href='http://flickr.com/people/mybloodyself'>danmachold</a> under a <a href='http://creativecommons.org/licenses/by-nc-sa/2.0/'>CC (BY-NC-SA) license</a>" label="CC (BY-NC-SA)" %}

{% describe %}
<p>
This statement was written to support my participation in a panel at the <em>27th International Conference on Software
Engineering and Knowledge Engineering</em>. To view the accompanying slides for this presentation, please refer to {%
include_cached _popovers/paper_reference.html cite="Kapfhammer2015a" trailing="." %} If you want to learn more about new work
that my colleagues and students and I are conducting in the area of efficiently testing data-centric applications,
then please read {% include_cached _popovers/paper_reference.html cite="Kinneer2015" %} and {% include
_popovers/paper_reference.html cite="Kinneer2015a" trailing="," %} two papers that were also presented at the same
conference.
</p>
{% enddescribe %}

Big data analytics software allows researchers and practitioners to create descriptive models and make predictions.
Often characterized by the "three Vs" of volume, velocity, and variety, big data systems must respectively handle large
amounts of data that arrive rapidly and take many different forms. In fields such as evidence-based medicine and the
detection of financial fraud, big data software is poised to and, indeed already is, making important contributions.

However, there is an additional "V" that is often overlooked by both researchers and practitioners: veracity. That is,
if there is a lack of correctness in the software and data that makes up a big data analytics system, then the data
models and the resulting predictions may be compromised &mdash; with serious consequences. For instance, the Data
Warehouse Institute reports that North American organizations experience a $611 billion annual loss due to poor data
quality. Scott W. Ambler argues that the "virtual absence" of software and data testing is the primary cause of this
loss.  Although this example is not specifically tied to big data systems, it clearly illustrates the risks associated
with a lack of veracity in any data-rich field.

The challenge for software testing researchers is to develop and empirically evaluate new methods that can accommodate
the volume, velocity, and variety that is characteristic of big data systems.  While some preliminary work (e.g., the
testing of both data mining systems and database applications) has recently been published, few software engineering
researchers have focused on big data testing. Since veracity is not always considered by big data researchers, the
challenge for these individuals is to create and assess new techniques that, whenever possible, holistically consider
all of the "four Vs". If not already doing so, practitioners in both of these fields should start to establish a
confidence in the correctness of both their software and data through the disciplined use of testing.

The title of my position statement poses the question "is big data a big deal?" Of course, the answer to this question
is "yes". With that said, the increase of big data's importance and impact will be accelerated and even sustained if
researchers and practitioners in fields such as software engineering, software testing, and big data collaborate with
each other to develop efficient and effective data analytics systems that construct high-quality models and make
accurate predictions. Let's collaborate across the fields of software engineering and big data to ensure that we have a
positive influence on society &mdash; thus proving to be a "bigger deal" together than we would have been on our own.

<p>
Interested in learning more about this topic? Since this blog post was first written, my colleagues and students and I
have published several additional papers about the testing of relational database schemas, with the most noteworthy one
being {% include_cached _popovers/paper_reference.html cite="McMinn2015" trailing="." %} If you are interested in using
SchemaAnalyst to test your own database schema, then please download and use the tool, which is now available from the
GitHub site <a href="https://github.com/schemaanalyst/schemaanalyst">schemaanalyst/schemaanalyst</a>.
</p>

{% include _footers/blog_footer.html %}
