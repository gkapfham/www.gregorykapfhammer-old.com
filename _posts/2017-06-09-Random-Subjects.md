---
title: Using randomly chosen subjects in software engineering research
layout: blog_n
categories: [research, methodology, idea]
author: Gregory M. Kapfhammer
date: 2017-06-09
image: /download/images/2686497196_20d0e1b1c7_z.jpg
---

{% include_cached _headers/blog_header.html %}

<!-- include_cached header image -->
{% include_cached _popovers/image_reference.html image="2686497196_20d0e1b1c7_z.jpg" content="<a title='Pick your favorite!' href='https://flickr.com/photos/sellersfamily/2686497196'>flickr photo</a> by <a href='https://flickr.com/people/sellersfamily'>HnyBny1969 (Regina)</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
Many types of software engineering research require software subjects that a researcher can use during an experimental
evaluation of a technique. For instance, if you develop a new way to test software, then you need to demonstrate that it
can effectively find defects in real-world programs. So, where will you find these programs? And, how can you select the
programs so as to minimize the risk of compromising your experiment?
{% enddescribe %}

One way to pick subject programs is to download them from an archive like the Software-Artifact Infrastructure
Repository ([SIR](http://sir.unl.edu/portal/index.php)). However, there is growing concern in the software engineering
community that selecting programs from SIR may not always usefully evaluate a method.

While it is possible to run experiments with programs that you download from sites like [GitHub](http://www.github.com),
there are challenges associated with this approach as well. For instance, researchers may be inclined &mdash;
consciously or not &mdash; to specifically download and use programs on which their technique is likely to perform well.

This sounds like a thorny problem! Are there any viable solutions?

If you happen to conduct research that focuses on Java programs, then you can use the
[SF100](http://www.evosuite.org/experimental-data/sf100/) to evaluate your new approach. What if your research does not
focus on this area? Thankfully, in certain domains, "natural" solutions have recently emerged. For instance, if, like
me, you develop and evaluate ways to test web sites, then you can use the [Discuvver](https://www.discuvver.com/) site
to randomly select a web site for use in your experimental study. Just click a button and you have a subject!

<p>
In a recent paper that introduces a technique for testing mobile-ready web
pages, my colleagues and I used <a href
="https://www.discuvver.com/">Discuvver</a> to randomly pick web sites for use
in our experiments {% include_cached _popovers/paper_reference.html cite="Walsh2017"
trailing="." %} The benefits associated with using randomly chosen subjects in
our research is that now we can have more confidence in the results that
demonstrate the efficiency and effectiveness of our approach.
</p>

If you are a software engineering researcher, I am interested in learning how you pick the subjects that you use to
experimentally evaluate your methods. I would also appreciate your feedback on the approach that we adopted in our work
on testing mobile-ready web pages. So, please [contact]({{site.baseurl}}contact) me to share your insights!

{% include_cached _footers/blog_footer.html %}
