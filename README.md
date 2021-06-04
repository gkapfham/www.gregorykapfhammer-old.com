# Web Site for Gregory M. Kapfhammer

![Lint](https://github.com/gkapfham/www.gregorykapfhammer.com/workflows/main.yml/badge.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/f669b514-6bc6-49b2-8496-258d18c5beab/deploy-status)](https://app.netlify.com/sites/gregorykapfhammer/deploys)

This repository contains the Markdown and HTML source code for web site of
[Gregory M. Kapfhammer](https://www.gregorykapfhammer.com).

You are invited to use this repository as a means for learning more about how to
implement a mobile-ready web site using Ruby, Jekyll, JavaScript, Markdown,
HTML, and Sassy CSS. If you find this repository useful, could I trouble you to
star it and then acknowledge it in your own web development efforts?

## Installing and Building the Web Site

If you want to clone the repository for the web site, you can type the following
command in your terminal window:

```shell
git clone https://github.com/gkapfham/www.gregorykapfhammer.com.git
```

At this point, you can install all of the dependencies by typing:

```shell
npm install
```

Now, you can build the full version of the web site in "production" mode (i.e.,
a mode that contains all possible features, including the site map, all of the
optimized images and files, and all search engine optimizations) by typing the
following command in your terminal window:

```shell
gulp optimizeddeployseo --production
```

If you want to run a web server to see the current version of the site, then you
can type this command into your terminal window and then go to the suggested
site location.

```shell
gulp browsersync
```

## Problems or Praise

If you find a mistake in my web site, then please raise an issue and I will
quickly resolve it. If you have a question about the technologies underlying
this site, you can also raise and issue or contact me by other means.
