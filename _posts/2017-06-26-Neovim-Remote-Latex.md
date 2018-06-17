---
title: Three quick tips for writing LaTeX in Neovim
layout: blog_n
categories: [writing, tool, vim]
author: Gregory M. Kapfhammer
date: 2017-06-26
image: /download/images/6290429625_f6cf4b09b2_z.jpg
---

{% include_cached _headers/blog_header.html %}

<!-- include_cached header image -->
{% include_cached _popovers/image_reference.html image="6290429625_f6cf4b09b2_z.jpg" content="<a title='301/365' href='https://flickr.com/photos/tomwachtel/6290429625'>flickr photo</a> by <a href='https://flickr.com/people/tomwachtel'>Tom Wachtel</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
I enjoy using Vim when I am writing LaTeX documents for my [teaching]({{site.baseurl}}teaching/) and
[research]({{site.baseurl}}research/). Since [Neovim](https://neovim.io/) became available I have been using it as a
(capable and compelling) alternative to Vim. I find that Neovim often works really well! But, if you want
the [vimtex](https://github.com/lervag/vimtex) plugin to work with Neovim, then you need to take two extra steps.
{% enddescribe %}

<p>
What do you need to do to write LaTeX in Neovim? Well, when I was writing
{% include_cached _popovers/paper_reference.html cite="Walsh2017a" %} with Neovim, I
needed to change my `.vimrc` file and install a plugin. After following the
instructions to install the <a
href="https://github.com/mhinz/neovim-remote">neovim-remote</a> plugin, I added
this code segment to ensure that `vimtex` can communicate with the `latexmk`
process that is compiling my paper.
</p>

```
{% include_cached _code/neovim_latex.vim.code %}
```

Wait! There is one more thing. If you, like me, have been using Vim for many years and only recently started to use
Neovim, then you will also need to run commands like the following so that you can "retrofit" your Vim configuration to
work correctly with Neovim.

```
ln -s ~/.vim ~/.nvim
ln -s ~/.vimrc ~/.nvim/init.vim
```

Are you interested in learning more about how I configure Vim and Neovim? Please study the source code of my `.vimrc`
that is available in the GitHub repository [gkapfham/dotfiles](https://github.com/gkapfham/dotfiles).

{% include_cached _footers/blog_footer.html %}
