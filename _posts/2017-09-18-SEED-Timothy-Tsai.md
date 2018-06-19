---
layout: blog_n
categories: [seed, interview, software]
title: SEED Interview with Timothy Tsai
company_name: "Nvidia"
title_name: "Senior Research Scientist"
web_site: "https://www.linkedin.com/in/timothy-tsai-6501ba2/"
image: /download/images/6117679215_cf28a0e6e2_z.jpg
---

{% comment %} # {{page.title}} {% endcomment %}
{% comment %} ## <em>{{ page.date | date_to_long_string }}</em> {% endcomment %}

{% include _headers/blog_header.html %}

<!-- Include header image -->
{% include _popovers/image_reference.html image="6117679215_cf28a0e6e2_z.jpg" content="<a title='Painted Glass' href='https://flickr.com/photos/stevensnodgrass/6117679215'>flickr photo</a> by <a href='https://flickr.com/people/stevensnodgrass'>Steve Snodgrass</a> shared under a <a href='https://creativecommons.org/licenses/by/2.0/'>CC (BY) license</a>" label="CC (BY)" %}

{% assign size = site.baseurl | size | minus: 1 %}

{% describe %}
As part of the [SEED project]({{ site.baseurl | slice: 0, size }}{% post_url
2017-07-05-Introducing-SEED %}), I recently talked with [Timothy
Tsai]({{page.web_site}}), a {{page.title_name}} at {{page.company_name}}. In
this interview, Timothy shared with me that an engineer in industry must be able
to develop new ideas and discern the bigger picture of a technical project.
Timothy also explained that technology companies must pivot to best engage with
new markets and opportunities. Read Timothy's responses to the three SEED
questions to learn more about his unique perspective on the engineering of
software.
{% enddescribe %}

## What is one fun fact that you can share about your company or a current project?

As with many successful companies, Nvidia has undergone several transformations
in its focus. Originally it produced chips for graphics processing. It then
formalized the functionality and interface to the graphics hardware and
software to invent the GPU. After several years, GPUs started being used for
efficient parallel processing for supercomputers. In the last few years, the
world realized that GPUs offered a practical mix of parallel processing units
and memory bandwidth that enabled efficient deep neural net (DNN)
implementations. So, in 25 years, Nvidia has transformed from a graphics
company to also being a company that powers self-driving cars.

## What is the greatest challenge that you face when working in your field?

Finding out how things are implemented. This includes (1) finding the right
experts who also happen to have spare time and (2) having access to a search
engine (i.e., both the Internet and your company's or school's intranet) that
actually finds pertinent resources.

## What is one point of advice that you can give to people who plan to enter your field?

Try to understand the landscape of the projects that you are working on beyond
just the expertise needed for those specific projects. Try to think about new
ideas and extensions. This striving for new ideas will make those projects
better, increase your understanding and experience, garner notice from your
bosses, and make your career an interesting endeavor instead of merely a way to
make a living.

Do you have any questions about this interview? Or, do you have a response to
Timothy's ideas? If you do, then I hope that you will
[contact]({{site.baseurl}}contact/) me to share some of your thoughts. Or, do
you want to be updated when I publish new interviews in this series? If you do,
then please [subscribe]({{site.baseurl}}support/) to my mailing list.

{% include _footers/blog_footer.html %}
