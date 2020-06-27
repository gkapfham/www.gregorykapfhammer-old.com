---
title: Software failure is an opportunity for learning and exploration
layout: blog_n
categories: [writing, research, idea]
author: Gregory M. Kapfhammer
date: 2019-11-15
description: When software fails, it is an opportunity for growth and exploration.
---

# {{page.title}}
{% include _headers/blog_header.html %}

My [research]({{site.baseurl}}research/) in the fields of software engineering
and software testing focuses on the design, implementation, and experimental
evaluation of automated techniques for finding and fixing the defects that lead
to software failure. Even though much of my professional work develops methods
to avoid software failure, I've also learned that when software fails it is an
opportunity for me to learn about why it failed and to explore alternatives to,
for instance, the approach that lead to failure or the software that itself
failed. After reflecting on my research and teaching experiences, it is now
clear that I've greatly benefited from software failures!

Here are a few examples that help to illustrate my point.

- **Journey from Windows to Linux**: During my first internship I saw that many
of the software engineers at the company were using Linux as their main
operating system and thus I started to use it as well. Although I looked up to
those engineers and understood the opportunities that Linux provided to me, I
was concerned that I would not be able to install it correctly on my own
computer. Once the internship finished and I return to college and a desktop
computer that was still running Windows, I experienced anew the failings of that
operating system. Ultimately, I decided to take the plunge and after a
significant amount of trial and error and a lot of help from my fellow computer
science majors, I finally got Linux to work on my computer. Now, nearly 25 years
later I'm still delighted to use Linux for all of my computing tasks!

- **Adventures in Text Editors**: When I started programming I used the TextEdit
text editor integrated into the NeXTSTEP operating system. Later, whenever I
used a Linux or Solaris workstation I ran Pico to edit text. After finding
myself limited by both of those editors I jumped into the world of Emacs when I
saw another student in the lab using it on their computer. I was happy with
Emacs for many years until I started to implement large and complex Java
programs as a graduate student and an instructor. Humorously, I switched to Vim
when I learned that it featured a package that supported Java programming
through a connection to an Eclipse server. Even though I no longer use Vim to
program in Java with that package, I've continued to use Vim, and then Neovim,
for years, ultimately finding a text editor that helps me to effectively edit
emails, Markdown, HTML, CSS, JavaScript, LaTeX, Python, R, Java, and more!

- **Victories with Version Control**: Throughout my undergraduate and graduate
education in computer science and then my early years as computer science
instructor, I used a variety of version control systems including source code
control system (SCCS), revision control system (RCS), concurrent versions system
(CVS), subversion (SVN), and Git. Although I benefited from personally using
SCCS and RCS, I become frustrated with attempting to use them in a team setting,
ultimately adopting CVS and then SVN. I can also remember first struggling to
use Git, always wondering why I had to run my own server or daemon to share
files with collaborators in a decentralized fashion. Even though I delightfully
adopted the use of Bitbucket for all of my teaching and research I never really
felt completely victorious with version control until I adopted GitHub and
GitHub Classroom!

- **Struggles with Statistical Analysis**: Since some of my computer science
graduate courses required me to to program in Matlab, I decided that, after
using it for system design and simulation, I might as well try it for data
analysis and visualization! However, since the institution at which I was an
instructor had a site license to Mathematica, I later adopted it for all of my
statistical analysis and data visualization tasks. Using Mathematica and Matlab
soon proved frustrating since, as commercial software, I could not share them
with my graduating students or my colleagues who worked at institutions that did
not have the software. One summer I gave up and rewrote tens of thousands of
lines of code in Matlab and Mathematica in the R language for statistical
computation. While I always appreciated R through many years of use, it never
felt to me like a general-purpose programming language and, in recent years, I
have begun to adopt Python for all my statistical and visualization tasks. More
importantly, I can no longer imagine using commercial software for any of my
computational tasks!

- **Wishing for a Wonderful Window Manager**: Although I've been using Linux and
terminal windows for years, I never preferred to interact with the operating
system solely through a single console. This means that I've used a wide variety
of window managers and desktop environments, like fvwm2 and Enlightenment. Once
Ubuntu started to ship with the Unity desktop environment I happily used it for
years, learning how to tweak it so that it was as minimal as possible. When
Unity was no longer available in Ubuntu, I briefly tried to use GNOME Shell,
only too find it too slow for my laptop and too cumbersome for my daily use.
Even after recommendations to use the i3 window manager, I was hesitant to adopt
it due to concerns about the time required to create another customized
configuration. After the failings of GNOME became to much for me, I learned
about i3 from friends who were already using it, leveraging their configurations
to craft one of my own. Today, my customized configuration of i3 is a delight to
use and I could not imagine return to heavy-weight environments such as Unity or
GNOME Shell!

In summary, I might still be using Windows, plotting data with commercial
software, and managing my own version control server if it were not for all of
these frustrating experiences with software! Was making a change to new software
painful? Was it time consuming to learn the ins-and-outs of a new program? Yes
and yes. But, was it worth it? Yes, absolutely!

Do you have your own experiences with software failure? Have you seen the
benefits of a program no longer meeting your needs? If you have, then I hope
that you will [contact]({{site.baseurl}}contact/) me to share some of your
thoughts. Or, do you want to be updated when I publish new blog posts like this
one? If you do, then please [subscribe]({{site.baseurl}}support/) to my mailing
list.

{% include _footers/blog_footer.html %}
