---
title: Using virtual environments in Python 3
layout: blog_n
categories: [programming, research, idea]
author: Gregory M. Kapfhammer
date: 2017-07-14
image: /download/images/23499382459_6b372b4c4d_z.jpg
---

# {{page.title}}
{% include _headers/blog_header.html %}

{% describe %}
The Python programming language supports "virtual environments" that make it
easy to install libraries for specific projects. For instance, you can employ
the newest version of a library for one project and an older version for
another. Since virtual environments ensure that all Python projects are no
longer forced to depend on a system-wide library, they support program isolation
and thus enable software engineers to manage the library dependencies in their
Python projects.
{% enddescribe %}

For many years [`virtualenv`](https://virtualenv.pypa.io/en/latest/) was one of
the most established and well-known tools for creating a virtual environment.
When I first started programming in Python, I investigated this approach and
expected that it would be the one that I would adopt. However, since my new
projects are exclusively in Python 3, I discovered that there was another tool
that was part of the Python 3 language and the most appropriate choice for new
projects.

What is this new approach? It is called `venv`! While there is some great
documentation on [venv](https://docs.python.org/3/library/venv.html), I decided
to write this post to share some of the additional details that I learned about
how to use it on a recent version of the Ubuntu operating system.

Even though I had Python 3 installed correctly, I found that I also needed to
run `sudo apt install python3-venv`. Now, for illustrative purposes, let's
assume that we are creating a project called lightning.py, a new "lightning
fast" sorting algorithm that was recently development. If this project is in the
`lightning.py` directory, then the next command to type in the terminal window
is `python3 -m venv lightning.py`. This command will create a `venv`-based
virtual environment inside of the `lightning.py` directory.

Once the virtual environment is created, we need to start using it through the
process of "activation" and by typing the following command in the directory
that contains the new Python 3 project: `source lightning.py/bin/activate`.
Depending on how your terminal window is configured, you should see in your
command prompt that the `lightning.py` project is now active.

At this point, you can install various libraries using the `pip install`
command. For instance, if you wanted to install the `requests` library you could
type the following command in your terminal: `pip install requests`. Notice that
this command will not install `requests` in a system-wide fashion &mdash;
instead it will only be available to the `lightning.py` project.

Okay, that's great! Now, we are ready to design, implement, test, and document
the `lightning.py` project. But, what do we do when we want to stop running this
virtual environment? You can accomplish this goal by typing the `deactivate`
command in your terminal window. Now the environment is no longer running!

In my [experience]({{site.baseurl}}service/) with developing various
[software]({{site.baseurl}}software/) tools to analyze data for research
[papers]({{site.baseurl}}research/papers/), I have found that it is important to
employ good software engineering practices. Using virtual environments with
`venv` is a practice that you should adopt if you are using Python 3 in the
field of data science. Interested in learning more about this topic? Or, do you
have some ideas to share with me about virtual environments? Please
[contact]({{site.baseurl}}contact/) with me your questions and insights!

{% include _footers/blog_footer.html %}
