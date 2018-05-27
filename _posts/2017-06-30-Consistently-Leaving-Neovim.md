---
title: How do you consistently leave insert mode in Neovim?
layout: blog_n
categories: [writing, tool, vim]
author: Gregory M. Kapfhammer
date: 2017-06-30
---

{% include _headers/blog_header.html %}

<a title="Rectangles" href="https://flickr.com/photos/ikhlasulamal/7974636493"><img class="img-responsive-tight" src="https://farm9.static.flickr.com/8436/7974636493_6304db854f_z.jpg" /></a><br /><small><a title="Rectangles" href="https://flickr.com/photos/ikhlasulamal/7974636493">flickr photo</a> by <a href="https://flickr.com/people/ikhlasulamal">Ikhlasul Amal</a> shared under a <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC (BY-NC) license</a> </small>

{% describe %}

When I write my own research [papers]({{site.baseurl}}research/papers/) I often create them in
[Neovim](https://neovim.io/). However, before using Neovim, I have spent years writing papers and code in Vim. Like many
others who use Vim for programming and writing, I have added the following two commands to my `.vimrc` file, thus
enabling me to press `jK` when I want to leave insert mode. This works great in Vim &mdash; but I found that I needed a
few other settings to ensure that I could consistently leave insert mode in Neovim!

{% enddescribe %}

```
inoremap jk <ESC>
inoremap <ESC> <NOP>
```

If you decide to use both Vim and Neovim, then you need to have a configuration file that contains code blocks for one
text editor or the other, achieved by using conditional logic in the following code segment. The first line of code see
to it that `<ESC>` is mapped the same way in Neovim as it is in Vim.  The second line of code is useful since Neovim now
includes a built-in terminal window. Since you want to be able to exit insert mode in Neovim's terminal window in the
same way that you exit insert mode in a regular buffer, this second line is needed.

```
{% include _code/neovim_leave_insert_mode.vim.code %}
```

If you are a longtime Vim user, what are some ways in which you tweaked your configuration so that it worked for Neovim?
I hope that you will soon [contact]({{site.baseurl}}/contact/) me with your own tips for using Neovim.

{% include _footers/blog_footer.html %}
