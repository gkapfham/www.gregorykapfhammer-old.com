---
title: Research
layout: defaults
description: Gregory M. Kapfhammer conducts research in fields such as software engineering and software testing.
image: /download/images/7029911579_0ddd6e8352_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/head_jumbotron.html title=page_title subtitle="implementing innovation in" highlight="software engineering" %}

## Overview

As an experimental computer scientist, the goal of my research is to design,
implement, and rigorously evaluate techniques and tools that support the
creation of useful, dependable, and efficient software. My research addresses
the challenges in fields such as software engineering, software testing, and
computer systems. I conduct this research with undergraduates
at [Allegheny College](http://www.allegheny.edu), graduate students and
professors at several universities, and colleagues in industry.

## Details

My research is empirical in nature because it involves the application of the
scientific method to formulate problem statements, carry out experiments, take
observations, statistically analyze and visualize the data sets, and draw
conclusions based on the results. Each project focuses on the development and
evaluation of [software]({{site.baseurl}}software/) artifacts that can be used
in both empirical studies and real-world practice by undergraduate and graduate
students, software engineers, and computer scientists in both academia and
industry. In addition to supporting my professional
[service]({{site.baseurl}}service/), my research also results in award-winning
and frequently cited research [papers]({{site.baseurl}}research/papers/),
oft-complimented [presentations]({{site.baseurl}}research/presentations/), and
useful free and open-source [software]({{site.baseurl}}software/).

My research has concentrated on several areas in software engineering and
software testing, examples of which are summarized in the following list that
references key papers.

<ul>

<li>

<b>Flaky Tests:</b> Since flaky tests can pass or fail without any changes to
the test code or the code under test, they are an unreliable indicator of
software correctness and a major problem for software developers. To address
this challenge, my research has developed an automated method that uses machine
learning to predict which tests are most likely to be flaky {% include_cached
_popovers/paper_reference.html cite="Parry2022a" trailing="." %} Along with
proposing a methodology for automatically determining which tests have latent
flakiness {% include _popovers/paper_reference.html cite="Parry2020"
trailing="," %} my colleagues and I also published a survey of the literature
relevant to flaky test research {% include_cached _popovers/paper_reference.html
cite="Parry2022" %} and a multi-source investigation into how developers
experience the impacts and causes of flaky tests {% include_cached
_popovers/paper_reference.html cite="Parry2022b" trailing="." %}

</li>

<p></p>

<li>

<b>Database Testing:</b> Given the importance of verifying the behavior of a
database application, my PhD dissertation {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2007d" %} presented an approach
for testing this type of software; a notable paper derived from my dissertation
is {% include_cached _popovers/paper_reference.html cite="Kapfhammer2003"
trailing="." %} Since the relational schema preserves the correctness of the
database's state, my research has also focused on testing this complex artifact,
with {% include_cached _popovers/paper_reference.html cite="McMinn2015" %} and
{% include_cached _popovers/paper_reference.html cite="McMinn2019" %} being
examples of papers. Recent papers such as {% include_cached
_popovers/paper_reference.html cite="Alsharif2020" %} and {% include_cached
_popovers/paper_reference.html cite="Alsharif2020a" %} present techniques for
improving the efficiency of regression testing for database schemas.

</li>

<p></p>

<li>

<b>Web Testing:</b> In response to the prevalence and complexity of mobile-ready
web sites, my research has developed automated tools for checking the pages in
these sites. Some examples of papers describing methods for automatically
detecting defects in web pages include {% include_cached
_popovers/paper_reference.html cite="Walsh2017" %} and {% include_cached
_popovers/paper_reference.html cite="Walsh2017a" trailing="." %} The automated
approach introduced in {% include_cached _popovers/paper_reference.html
cite="Althomali2019" %} can visually confirm and classify the reported
responsive layout failures in a web page. The method described in {%
include_cached _popovers/paper_reference.html cite="Walsh2020" %} can
automatically identify potential regressions from the correct responsive layout
of a web page. Finally, recent work introduced a method to automatically repair
a layout failure in a responsive web page {% include_cached
_popovers/paper_reference.html cite="Althomali2022" trailing="." %}

</li>

<p></p>

<li>

<b>Mutation Testing:</b> Given the challenges associated with accurately judging
the quality of a test suite, my research has designed efficient and useful ways
to perform test assessment through mutation analysis. Presenting and evaluating
automated techniques that efficiently insert synthetic faults into both
real-world Java programs and relational database schemas, some examples of
papers include {% include _popovers/paper_reference.html cite="Just2012b"
trailing="," %} {% include_cached _popovers/paper_reference.html
cite="Wright2014" trailing="," %} and {% include_cached
_popovers/paper_reference.html cite="McMinn2019" trailing="." %}

</li>

<p></p>

<li>

<b>Regression Testing:</b> Since software is often incrementally developed, my
research on regression testing has created research automated ways to
efficiently and effectively run test suites for complex programs. Some examples
of papers that present and evaluate regression testing techniques include {%
include _popovers/paper_reference.html cite="Walcott2006" trailing="," %} {%
include_cached _popovers/paper_reference.html cite="Lin2014" trailing="," %} and
{% include_cached _popovers/paper_reference.html cite="Lin2017" trailing="." %}
Leading the way in the realistic assessment of regression testing, papers such
as {% include _popovers/paper_reference.html cite="Paterson2018" %} and {%
include _popovers/paper_reference.html cite="Paterson2019" %} show how to
conduct rigorous experiments with real program faults.

</li>

<p></p>

<li>

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
humans when studying the usefulness of tests that were automatically generated
by search-based techniques.

</li>

<p></p>

<li>

<b>Performance Evaluation:</b> Given the importance of equipping software
engineers with the insights and tools they need to create efficient software, my
work has concentrated on developing and studying tools that automatically assess
program performance. Focusing on the empirical evaluation of real-world software
components like databases, papers in this area include {% include_cached
_popovers/paper_reference.html cite="Jones2011" trailing="," %} {%
include_cached _popovers/paper_reference.html cite="Burdette2012" trailing=","
%} and {% include_cached _popovers/paper_reference.html cite="Kinneer2015"
trailing="." %} Papers such as {% include_cached _popovers/paper_reference.html
cite="Kotelyanskii2014a" %} highlight how my research has also characterized the
influence that the parameters of a search-based algorithm have on its efficiency
and effectiveness.

</li>

<p></p>

<li>

<b>Research Methods:</b> My surveys of software testing techniques provide a
starting point for people exploring this field, with {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2004" %} and {% include_cached
_popovers/paper_reference.html cite="Kapfhammer2010" %} being examples of such
articles. Papers like {% include_cached _popovers/paper_reference.html
cite="Kapfhammer2016" %} and {% include_cached _popovers/paper_reference.html
cite="McMinn2016" %} show how I have articulated a research agenda for the field
of software engineering that stresses, for instance, the need for well-tested
statistical methods. I have also written papers, like {% include_cached
_popovers/paper_reference.html cite="Alsharif2018a" %} and {% include_cached
_popovers/paper_reference.html cite="Alsharif2018b" trailing="," %} that explain
how to replicate my research.

</li>

<p></p>

</ul>

## Connections

Do you work on these topics and are you interested in collaborating with me on a
project in the fields of software engineering and software testing? If so, then
please [contact]({{site.baseurl}}contact/) me with your ideas.
