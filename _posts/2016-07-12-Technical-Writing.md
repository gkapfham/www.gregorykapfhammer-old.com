---
title: Technical writing with LaTeX, Vim, and Git
layout: blog_n
categories: [writing, programming, vim]
author: Gregory M. Kapfhammer
last_modified_at: 2016-10-12
---

{% include _headers/blog_header.html %}

<a title="cap & nib" href="http://flickr.com/photos/mysight/8663830964"><img class="img-responsive-tight" src="http://farm9.static.flickr.com/8254/8663830964_76117e9b4b_z.jpg" /></a><br /><small><a href="http://creativecommons.org/licenses/by-nc-nd/2.0/">CC (BY-NC-ND)</a> <a title="cap & nib" href="http://flickr.com/photos/mysight/8663830964">flickr photo</a> shared by <a href="http://flickr.com/people/mysight">Inkysloth</a></small>

<!-- Include header image -->
{% include _popovers/image_reference.html image="7029911579_0ddd6e8352_z.jpg" content="<a title='Color Test #4a' target='_blank' href='http://flickr.com/photos/multichrome/7029911579'>flickr photo</a> shared by <a target='_blank' href='http://flickr.com/people/multichrome'>/Casper</a> under a <a target='_blank' href='http://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
If you are like me, then you may enjoy writing in a notebook with a fountain pen
&mdash; if you have not tried writing this way, then borrow someone's fountain
pen and try it! As much as I may like writing with a fountain pen, I still spend
a substantial amount of time preparing technical papers and presentations in
[LaTeX](http://www.latex-project.org/) with the [Vim](http://www.vim.org/) text
editor &mdash; a task I also find to be challenging and rewarding.
{% enddescribe %}

If you write with Vim and LaTeX and you would like to improve your writing
experience, then please consider using the
[vimtex](https://github.com/lervag/vimtex) plugin as it supports wonderful
features like the completion of BibTeX references, continuous compilation with
[latexmk](http://users.phys.psu.edu/~collins/software/latexmk-jcc/), and forward
and reverse searching for [MuPDF](http://mupdf.com/) PDF viewer. Are you
interested in learning more about how I configured these plugins? Please study
the source code of my `.vimrc` that is available in the GitHub repository
[gkapfham/dotfiles](https://github.com/gkapfham/dotfiles).

<p>
Yes, it is possible to use these tools to create nicely formatted and correct
papers. As an example of a paper, please consider reading {% include
_popovers/paper_reference.html cite="McMinn2016a" %}, the source code of which
is also available in a GitHub repository at <a
href="https://github.com/gkapfham/ast2016-paper">gkapfham/ast2016-paper</a> An
example of a presentation that I prepared in LaTeX is {% include
_popovers/paper_reference.html cite="Kapfhammer2015" %}, which you can study
from its GitHub repository at <a
href="https://github.com/gkapfham/seke2015-presentation">gkapfham/seke2015-presentation</a>
There's something else that is really nice about programming your papers and
presentations in LaTeX &mdash; you can release their source code on GitHub to
share with others an "instruction manual" that explains, in a step-by-step
fashion, exactly how to produce a document just like yours!
</p>

{% include _footers/blog_footer.html %}
