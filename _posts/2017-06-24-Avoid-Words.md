---
title: Five words to (normally) avoid in your technical writing
layout: blog_n
categories: [writing, research, advice]
author: Gregory M. Kapfhammer
date: 2017-06-24
---

{% include _headers/blog_header.html %}

<!-- Include header image -->
{% include _popovers/image_reference.html image="4199642840_7f9bc7a73a_z.jpg" content="<a title='Avoid' href='https://flickr.com/photos/drownedman/4199642840'>flickr photo</a> by <a href='https://flickr.com/people/drownedman'>Rebirth Cycle</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
As a writer of technical content in a field like computer science you should strive for papers that are clear and easy
to understand. Yet, as I write my own research [papers]({{site.baseurl}}research/papers/) I often notice that I use
certain words that make my content harder to interpret. Since many of these words are simple, I am often surprised that
their introduction leads to confusion on my part when I review drafts of my writing. Finally, I don't think that I am
the only technical writer abusing these words &mdash; I commonly see their inappropriate use when I am
[reviewing]({{site.baseurl}}service/) papers for top conferences and journals in the field of software engineering.
{% enddescribe %}

So, what are these five words that you should (normally) avoid in your technical writing?

The first two are "above" and "below" and they are often used in phrases like "as depicted in the above figure" or "as
given in the equation below". Yet, since the layout of a paper is fluid &mdash; especially when the revisions cause
entire sections and subsections to move around &mdash; these words are problematic because readers who look above or below may
not finding what you are referencing. For instance, the "above figure" may now be on the previous page and the "equation
below" may have been pushed to the top of the next column!

Technical writers should also be careful about using the words "later" and "previously" in phrases such as "this method
is explained later" and "using the previously defined equation". Instead of including these words, authors should
instead consider making a direct reference to the specific section that explains the method and the number of the
previously defined equation. When readers have this additional information, it makes it much easier for them to see how
the current content connects to what you wrote in other sections of your paper!

The final word that writers should be careful about using is the royal "we". When used incorrectly, this word obscures
the key technical contribution of your paper. For instance, if you write "next, we transform the graph" and this process
is automatically performed by an algorithm, then you are underselling your paper's contribution since it seems that you
(and your co-authors, if you jointly wrote the paper) manually transform this graph.

Do you also find that these five words confuse you? What are the words that you find obscure your technical writing? I
hope that you will soon [contact]({{site.baseurl}}/contact/) me with your own tips for clear technical writing.

{% include _footers/blog_footer.html %}
