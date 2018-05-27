---
title: Technical writing with LaTeX, Vim, and Git
layout: blog_n
categories: [writing, programming, vim]
author: Gregory M. Kapfhammer
last_modified_at: 2016-10-12
---

{% include _headers/blog_header.html %}

<a title="cap & nib" href="http://flickr.com/photos/mysight/8663830964"><img class="img-responsive-tight" src="http://farm9.static.flickr.com/8254/8663830964_76117e9b4b_z.jpg" /></a><br /><small><a href="http://creativecommons.org/licenses/by-nc-nd/2.0/">CC (BY-NC-ND)</a> <a title="cap & nib" href="http://flickr.com/photos/mysight/8663830964">flickr photo</a> shared by <a href="http://flickr.com/people/mysight">Inkysloth</a></small>

{% describe %}
If you are like me, then you may enjoy writing in a notebook with a fountain pen &mdash; if you have not tried writing
this way, then borrow someone's fountain pen and try it! As much as I may like writing with a fountain pen, I still
spend a substantial amount of time preparing technical papers and presentations in
[LaTeX](http://www.latex-project.org/) with the [Vim](http://www.vim.org/) text editor &mdash; a task I also find to be
challenging and rewarding.
{% enddescribe %}

If you write with Vim and LaTeX and you would like to improve your writing experience, then please consider using the
[vimtex](https://github.com/lervag/vimtex) plugin as it supports wonderful features like the completion of BibTeX
references, continuous compilation with [latexmk](http://users.phys.psu.edu/~collins/software/latexmk-jcc/), and forward
and reverse searching for [MuPDF](http://mupdf.com/) PDF viewer. Are you interested in learning more about how I
configured these plugins? Please study the source code of my `.vimrc` that is available in the GitHub repository
[gkapfham/dotfiles](https://github.com/gkapfham/dotfiles).

<a name="McMinn2016a-return"></a>
<a name="Kapfhammer2015-return"></a>
Yes, it is possible to use these tools to create nicely formatted and correct papers. As an example of a paper, please
consider reading {% cite McMinn2016a %}, the source code of which is also available in a GitHub repository at
[gkapfham/ast2016-paper](https://github.com/gkapfham/ast2016-paper). An example of a presentation that I prepared in
LaTeX is {% cite Kapfhammer2015 %}, which you can study from its GitHub repository at
[gkapfham/seke2015-presentation](https://github.com/gkapfham/seke2015-presentation). There's something else that is
really nice about programming your papers and presentations in LaTeX &mdash; you can release their source code on GitHub
to share with others an "instruction manual" that explains, in a step-by-step fashion, exactly how to produce a document
just like yours!

{% include _footers/blog_footer.html %}
{% include _footers/blog_references.html %}
