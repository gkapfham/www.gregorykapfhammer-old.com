---
title: Easy steps towards speedy technical writing with Neovim
layout: blog_n
categories: [writing, research, vim]
author: Gregory M. Kapfhammer
date: 2017-07-01
image: /download/images/160181261_8694ae7eb5_z.jpg
---

{% include _headers/blog_header.html %}

<!-- Include header image -->
{% include _popovers/image_reference.html image="160181261_8694ae7eb5_z.jpg" content="<a title='Speedy Red Citroen' href='https://flickr.com/photos/extremearq/160181261'>flickr photo</a> by <a href='https://flickr.com/people/extremearq'>ExtremearQ</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a>" label="CC (BY-NC-ND)" %}

{% describe %}
Since, in my experience, writing technical research [papers]({{site.baseurl}}research/papers/) is a challenging task, I
always try to use a writing environment that effectively supports my endeavors. If I am writing a paper in Neovim, then I
now often use [deoplete.nvim](https://github.com/Shougo/deoplete.nvim) complete the words that I am writing in my paper.
{% enddescribe %}

Unlike other completion engines for Vim and Neovim, `deoplete.nvim` is flexible in its capability to perform completion
from a wide variety of sources. In addition to being able to complete a word from a current buffer or a tags file, you
can configure it to use [tmux-complete.vim](https://github.com/wellle/tmux-complete.vim) so that it will complete words
that are evident in any of your terminals controlled by `tmux`. Finally, as a technical writer, you might want to have
word completion from a dictionary, which you can enable by using [neco-look](https://github.com/ujihisa/neco-look).

There's one additional thing that you might want to configure if you are using Neovim and `deoplete.nvim`! If you are
accustomed to using the `<TAB>` key to perform completion, then you might want to install
[supertab](https://github.com/ervandew/supertab) and the include the following code in your initialization file.

```
{% include _code/neovim_tab_completion.vim.code %}
```

What tools do you use to ensure that you write in an efficient and effective fashion? I invite you to
[contact]({{site.baseurl}}contact/) me with your own tips for speedy technical writing.

{% include _footers/blog_footer.html %}
