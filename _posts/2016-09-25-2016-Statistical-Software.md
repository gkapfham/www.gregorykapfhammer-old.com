---
title: Hitchhiker's need free vehicles!
layout: blog_n
categories: [research, software, idea]
author: Gregory M. Kapfhammer
last_modified_at: 2017-6-24
---

{% include _headers/blog_header.html %}

<a title="20121004_untitled_0012" href="https://flickr.com/photos/rick_bergstrom/8083703457"><img class="img-responsive-tight" src="https://farm9.static.flickr.com/8335/8083703457_5b2bb242b0_z.jpg" /></a><br /><small><a title="20121004_untitled_0012" href="https://flickr.com/photos/rick_bergstrom/8083703457">flickr photo</a> by <a href="https://flickr.com/people/rick_bergstrom">BergsPix</a> shared under a <a href="https://creativecommons.org/licenses/by-nd/2.0/">CC (BY-ND) license</a> </small>

{% describe %}
As evident by Arcuri and Briand's paper "A Hitchhiker's guide to statistical tests for assessing randomized algorithms
in software engineering", the field of search-based software engineering (SBSE) relies on statistical methods to support
the empirical comparison of different techniques. Yet, this statistical source code is often bespoke and is rarely
available so that other researchers can replicate the analyses.
{% enddescribe %}

As a means for improving the maturity of the data analysis methods used in the SBSE field, I think that it would be
useful if there were shared repositories of well-documented statistical analysis code and replication data. That
is, the SBSE community would advance if its "hitchhikers" had access to "free vehicles" in the form of GitHub
repositories containing the data sets and statistical analysis code used for published papers.

<a name="Kapfhammer2016-return"></a>
To learn more about the benefits associated with using shared repositories of statistical code in SBSE, you can read {%
cite Kapfhammer2016 %}'s suggestions for improving the study of data arising from experiments with randomized
algorithms. If you would like to examine the source code of that paper, then you can visit its GitHub repository at
[gkapfham/sbst2016-paper](https://github.com/gkapfham/sbst2016-paper). Or, do you have ideas about how the SBSE community
should create, share, and apply statistical software? If so, then please [contact]({{site.baseurl}}/contact/) me to
share your thoughts!

<a name="McMinn2016a-return"></a>
Interested in learning more about this topic? Since this blog post was written, my colleagues and students and I have
published {% cite McMinn2016a %} and released a replication package for it as well. If you are interested in replicating
the analyses in that paper, then I encourage you to visit
[gkapfham/virtualmutationanalysis](https://github.com/gkapfham/virtualmutationanalysis) on GitHub. I would also
appreciate your feedback on the approach that we took to create and release this replication package. So, please
[contact]({{site.baseurl}}contact) me to share your insights!

{% include _footers/blog_footer.html %}
{% include _footers/blog_references.html %}
