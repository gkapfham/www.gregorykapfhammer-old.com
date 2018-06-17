---
title: Distraction-free writing with a terminal timer and Ubuntu notifications
layout: blog_n
categories: [writing, productivity, idea]
author: Gregory M. Kapfhammer
date: 2017-07-21
image: /download/images/20994094828_38e0fd6a4e_z.jpg
---

# {{ page.title }}
## <em>{{ page.date | date_to_long_string }}</em>

<!-- Include header image -->
{% include _popovers/image_reference.html image="20994094828_38e0fd6a4e_z.jpg" content="<a title='Train of Hope, Frankfurt, Germany' href='https://flickr.com/photos/121184747@N06/20994094828'>flickr photo</a> by <a href='https://flickr.com/people/121184747@N06'>Franz Ferdinand Photography</a> shared under a <a href='https://creativecommons.org/licenses/by-nc/2.0/'>CC (BY-NC) license</a>" label="CC (BY-NC)" %}

{% describe %}
Have you ever struggled to focus on your technical writing? Even though I enjoy writing
[research]({{site.baseurl}}research/) papers, I too can sometimes find it difficult to focus on technical writing. So,
what should you do when you mind is wandering and you have to finish some content by a deadline? Of course, set a timer!
{% enddescribe %}

Since I prepare [papers]({{site.baseurl}}research/papers/) and
[presentations]({{site.baseurl}}research/presentations/) using Neovim in a
terminal window running `tmux`, I recently looked for a timer that I could also
run at the command prompt. Thankfully, I discovered this
[post](http://www.slashgeek.net/2016/10/25/termdown-cli-countdown-timer-stopwatch/)
about the [termdown](https://github.com/trehn/termdown) program.

If you check the documentation for `termdown`, you will notice that it is a
Python program that you install by typing the following command in your terminal
window: `pip install termdown`. This program has a lot of options that you can
learn more about by reading its documentation. For my purposes, I wanted the
countdown timer to run for 30 minutes and then to trigger an Ubuntu notification
when it expired.

Is it possible to achieve this goal with a single command in your terminal! Here it is:

```
termdown 30m -T "Distraction-Free Writing" --no-figlet && notify-send "Distraction-Free Writing" \ "Task Finished\!"
```

The first parameter specifies the number of minutes for which I will be writing
and the second gives a title to the countdown display. Using the `--no-figlet`
parameter ensures that `termdown` shows a minimal countdown timer. Finally, when
the timer completes, the call to `notify-send` will trigger an Ubuntu
notification with "Distraction-Free Writing" as the title and "Task Finished!"
as the message.

Do you have any questions about this technique? Or, do you have some tips for
distraction-free writing? If you do, then I hope that you will
[contact]({{site.baseurl}}contact/) me to share some of your ideas.

{% include _footers/blog_footer.html %}
