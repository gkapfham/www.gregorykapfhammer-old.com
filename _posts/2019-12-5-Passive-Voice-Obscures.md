---
title: Using passive voice obscures your technical contribution!
layout: blog_n
categories: [writing, research, idea]
author: Gregory M. Kapfhammer
date: 2019-12-05
description: Using passive voice in a research paper makes it difficult to see the technical contribution.
---

# {{page.title}}
{% include _headers/blog_header.html %}

Through my [service]({{site.baseurl}}service/) as an associate editor for the
[Journal of Software: Evolution and
Process](https://onlinelibrary.wiley.com/journal/20477481), an academic editor
for the [PeerJ Computer Science](https://peerj.com/computer-science/) journal,
and a program committee member for conferences like the [International
Conference on Software Testing, Verification and
Validation](https://cs.gmu.edu/icst/index.html), I've read a lot of research
papers in fields such as software engineering and software testing.

There is one limiting style of writing that I have frequently seen in the many
papers that I have reviewed &mdash; passive voice! A sentence that is written in
passive voice does not have a clear actor that takes a specific action. While I
acknowledge that some scientists train their mentees to write in passive voice
because it is less impassioned, my experience is that it also makes papers less
exciting and engaging for the reader. I mean, who said that a scientific paper
can't be fun to read!

With that said, there is another aspect of passive voice that is even more
concerning: it makes the technical and scientific contributions of a paper less
clear. When sentences contain many passive phrases like "was computed" it
becomes less clear to the reader what technique performed this computation.
However, it is important for the reader to understand that the technique
presented in the paper is, in fact, the one that performed the computation.
Moreover, using passive voice in sentences with "was performed" or "was
analyzed" makes it less clear if the action was done in an automated or a manual
fashion, which is also useful for the reader to know in computer science
research papers.

It's easy for you to determine if your sentence contains a verb in passive
voice! Following the
[strategy](https://twitter.com/johnsonr/status/259012668298506240?lang=en)
suggested by [Rebecca Johnson](https://twitter.com/johnsonr), you should ask
yourself if you can insert "by zombies" after the verb! If you can, then you
know that a specific sentence is written in passive voice and should be
rephrased to be more active. Once you recognize that the sentence is in passive
voice, start asking yourself questions like "what algorithm or technique or tool
performed this action?" and "is this process one that is automated or manual?".
Finally, if the action is one that you or your coauthors took &mdash; say to
make a decision or to configure some aspect of your experimental setup &mdash;
then consider using "we" to ensure that the reader knows that a tool did not
take the step.

Do you have your own tips about how to effectively write a research paper? Have
you noticed sentence structures that limit your ability to effectively explain
your idea? Do you have suggestions for how I can improve the writing in my
[papers]({{site.baseurl}}research/papers/) or on my
[blog]({{site.baseurl}}blog/)? If you do, then I hope that you will
[contact]({{site.baseurl}}contact/) me to share some of your thoughts. Or, do
you want to be updated when I publish new blog posts like this one? If you do,
then please [subscribe]({{site.baseurl}}support/) to my mailing list.

{% include _footers/blog_footer.html %}
