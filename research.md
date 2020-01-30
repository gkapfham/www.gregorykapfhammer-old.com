---
title: Research
layout: defaults
image: /download/images/7029911579_0ddd6e8352_z.jpg
---

# {{page.title}}

<!-- include_cached header image -->
{% include_cached _popovers/image_reference.html image="7029911579_0ddd6e8352_z.jpg" content="<a title='Color Test #4a' target='_blank' href='http://flickr.com/photos/multichrome/7029911579'>flickr photo</a> shared by <a target='_blank' href='http://flickr.com/people/multichrome'>/Casper</a> under a <a target='_blank' href='http://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
As an experimental computer scientist, the goal of my research is to design,
implement, and rigorously evaluate techniques and tools that support the
creation of useful, dependable, and efficient software. My research addresses
the challenges within the fields of software engineering, software testing, and
computer systems. I conduct this research in collaboration with undergraduates
at [Allegheny College](http://www.allegheny.edu), graduate students and
professors at several universities, and colleagues in industry.
{% enddescribe %}

My research is empirical in nature because it involves the application of the
scientific method to formulate problem statements, carry out experiments, take
observations, statistically analyze and visualize the data sets, and draw
conclusions based on the experimental results. Each research project focuses on
the development and evaluation of [software]({{site.baseurl}}software/)
artifacts that can be used in both empirical studies and real-world practice by
undergraduate and graduate students, software engineers, and computer scientists
in both academia and industry. In addition to supporting my professional
[service]({{site.baseurl}}service/), my research also results in award-winning
and frequently cited research [papers]({{site.baseurl}}research/papers/),
oft-complimented [presentations]({{site.baseurl}}research/presentations/), and
useful free and open-source [software]({{site.baseurl}}software/).

My research has concentrated on several areas, examples of which are summarized
in the following list that references key papers.

<ul class="fa-ul">

<li><i class="fa-li fa fa-arrow-right"></i>

<b>Database Testing:</b> Given the importance of verifying the behavior of a
database application, my PhD dissertation {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2007d" %} presented an approach
for testing this type of software; a notable paper derived from my dissertation
is {% include_cached _popovers/paper_reference.html cite="Kapfhammer2003"
trailing="." %} Since the relational schema preserves the correctness of the
database's state, my research has also focused on testing this complex
artifact, with {% include_cached _popovers/paper_reference.html
cite="McMinn2016a" trailing="," %} {% include_cached
_popovers/paper_reference.html cite="McMinn2015" trailing="," %} and {%
include_cached _popovers/paper_reference.html cite="McMinn2019" %} being
examples of papers. </li>
<p>

<li><i class="fa-li fa fa-arrow-right"></i>

<b>Web Testing:</b> In response to the prevalence and complexity of mobile-ready
web sites, my research has developed automated techniques for checking the pages
in these sites. Some examples of papers describing methods for detecting defects
in live web pages include {% include_cached _popovers/paper_reference.html
cite="Walsh2017" trailing="," %} {% include_cached
_popovers/paper_reference.html cite="Walsh2017a" trailing="," %} and {%
include_cached _popovers/paper_reference.html cite="Althomali2019" trailing="."
%}
</li>
<p>

<li><i class="fa-li fa fa-arrow-right"></i>

<b>Mutation Testing:</b> Given the challenges associated with judging the
quality of a test suite, my research has designed efficient and useful ways to
perform test assessment through mutation analysis. Presenting and evaluating
automated techniques for both real-world Java programs and relational database
schemas, some examples of papers include {% include
_popovers/paper_reference.html cite="Just2012b" trailing="," %} {%
include_cached _popovers/paper_reference.html cite="Wright2014" trailing="," %}
and {% include_cached _popovers/paper_reference.html cite="McMinn2019"
trailing="." %}
</li>
<p>

<li><i class="fa-li fa fa-arrow-right"></i>

<b>Regression Testing:</b> Since software is often incrementally developed, my
work on regression testing has created automated ways to efficiently and
effectively run test suites for complex programs. Some examples of papers that
present and evaluate regression testing techniques include {% include
_popovers/paper_reference.html cite="Walcott2006" trailing="," %} {%
include_cached _popovers/paper_reference.html cite="Lin2014" trailing="," %} and
{% include_cached _popovers/paper_reference.html cite="Lin2017" trailing="." %}
Leading the way in the realistic assessment of regression testing, recent papers
such as {% include _popovers/paper_reference.html cite="Paterson2018" %} and {%
include _popovers/paper_reference.html cite="Paterson2019" %} show how to
conduct rigorous experiments with faults harvested from real programs.
</li>
<p>

<li><i class="fa-li fa fa-arrow-right"></i>

<b>Search-Based Testing:</b> Using a fitness function as a guide to a suitable
solution, search-based methods have shown promise in supporting many software
engineering tasks. My work has focused on creating and maintaining frameworks
that support the development of search-based tools, with {% include_cached
_popovers/paper_reference.html cite="McMinn2016b" %} being one example. Other
papers such as {% include_cached _popovers/paper_reference.html
cite="Conrad2010a" %} and {% include_cached _popovers/paper_reference.html
cite="Kukunas2010a" %} describe search-based solutions to key software
engineering challenges. Recent papers like {% include_cached
_popovers/paper_reference.html cite="Alsharif2019" %} present ways to involve
humans when studying the usefulness of tests that were automatically
generated by search-based techniques.
</li>
<p>

<li><i class="fa-li fa fa-arrow-right"></i>

<b>Performance Evaluation:</b> Given the importance of equipping software
engineers to create efficient software, my work has concentrated on developing
and studying tools that automatically assess program performance. Focusing on
the empirical evaluation of real-world software components like databases,
papers in this area include {% include_cached _popovers/paper_reference.html
cite="Jones2011" trailing="," %} {% include_cached
_popovers/paper_reference.html cite="Burdette2012" trailing="," %} and {%
include_cached _popovers/paper_reference.html cite="Kinneer2015" trailing="." %}
Papers such as {% include_cached _popovers/paper_reference.html
cite="Kotelyanskii2014a" %} highlight how my research has also experimentally
characterized the influence that the parameters of a search-based algorithm have on
its efficiency and effectiveness.
</li>
<p>

<li><i class="fa-li fa fa-arrow-right"></i>

<b>Research Methods:</b> My surveys of software testing techniques provide a
starting point for people exploring this field, with {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2004" %} and {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2010" %} being examples of such
articles. Papers like {% include_cached _popovers/paper_reference.html
cite="Kapfhammer2016" %} and {% include_cached _popovers/paper_reference.html
cite="McMinn2016" %} show how I have articulated a research agenda for the field
of software engineering that stresses, for instance, the need for well-tested
statistical methods. I have also written papers, such as {% include_cached
_popovers/paper_reference.html cite="Alsharif2018a" %} and {% include_cached
_popovers/paper_reference.html cite="Alsharif2018b" trailing="," %} that explain
how to replicate my research results.
</li>
<p>

</ul>

Do you work in one of these areas and are you interested in collaborating with
me on a project? If so, then please [contact]({{site.baseurl}}contact/) me with
your ideas.
