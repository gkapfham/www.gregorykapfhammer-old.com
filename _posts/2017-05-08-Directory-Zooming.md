---
title: Directory zooming with Fzf and Fasd
layout: blog_n
categories: [software, tool, productivity]
author: Gregory M. Kapfhammer
date: 2017-05-08
---

{% include _headers/blog_header.html %}

<!-- Include header image -->
{% include _popovers/image_reference.html image="6608592473_64ef54ce4b_z.jpg" content="<a title='Zooming Edmonton' href='https://flickr.com/photos/eberg/6608592473'>flick photo</a> by <a href='https://flickr.com/people/eberg'>ebergcanada</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
If you are working on many projects in many different directories of your
computer, it is often difficult to remember the full path name of the directory
that contains the files that you need. However, if you are already using a
terminal window to navigate your file system, then there are some tools that
can make this task easier.
{% enddescribe %}

To take advantage of the "directory zooming" technique that I present in this
post, you will need to install two programs:
[Fzf](https://github.com/junegunn/fzf) and
[Fasd](https://github.com/clvv/fasd). To learn more about these programs, you
should visit their sites and read their extensive documentation. For now, you
should know that Fzf is a "fuzzy finder" that makes it easy for you to select
matching items from a list. Alternatively, the Fasd program stores information
about the files and directories that you frequently access, allowing you to
quickly navigate to them.

Now, we can put these two programs together so that Fasd stores the directories
you most commonly access and Fzf acts as a filter for those directories,
helping you to change into the one whose name you only partially remember. In
the following code segment, the `t()` function &mdash; that is short for "to"
&mdash; first gets a list of all the directories you have recently and
frequently visited and then passes that program's output to Fzf.

```
{% include _code/directory_zooming.sh.code %}
```

<p>
Now, if I type `t paper` in my terminal window, I would see the following
output. At this point it would be possible to type in partial matches of
directory names (e.g., "avmf") and then immediately zoom to the directory that
contains the source code for a paper, {% include _popovers/paper_reference.html
cite="McMinn2016b" trailing="," %} that my colleague and I recently published.
</p>

```
{% include _output/directory_zooming.output %}
```

What are the ways in which you navigate your file system? If you are a
researcher, writer, or software developer who regularly uses the terminal
window, I would also appreciate your feedback on the approach that I suggested
in this post. So, please [contact]({{site.baseurl}}contact) me to share your
insights!

{% include _footers/blog_footer.html %}
