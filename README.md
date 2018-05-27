# www.gregorykapfhammer.com

This repository contains the Markdown and HTML source code for web site of
[Gregory M. Kapfhammer](http://www.cs.allegheny.edu/sites/gkapfham), an
Associate Professor in the [Department of Computer
Science](http://www.cs.allegheny.edu) at [Allegheny
College](http://www.allegheny.edu)

You are invited to use this repository as a means for learning more about how to
implement a mobile-ready web site using Ruby, Jekyll, Markdown, HTML, and CSS.
If you find this repository useful, could I trouble you to star it and then
acknowledge it in your own web development efforts?

If you want to clone this repository, you can type the following command in your
terminal:

```shell
git clone https://github.com/gkapfham/www.git
```

You can render the Markdown files in this repository to HTML by using the
`jekyll` command. Currently, I am using the following version of `jekyll`:

```shell
jekyll --version
jekyll 3.1.6
```

To render the Markdown files you can type:

```shell
jekyll serve --watch --incremental
Configuration file: /home/gkapfham/working/www/gkapfham/_config.yml
            Source: /home/gkapfham/working/www/gkapfham
       Destination: /home/gkapfham/working/www/gkapfham/_site
 Incremental build: enabled
      Generating...
                    done in 19.825 seconds.
 Auto-regeneration: enabled for '/home/gkapfham/working/www/gkapfham'
Configuration file: /home/gkapfham/working/www/gkapfham/_config.yml
    Server address: http://127.0.0.1:4000/sites/gkapfham//
  Server running... press ctrl-c to stop.
```

At this point, you can view the content by visiting
`http://127.0.0.1:4000/sites/gkapfham/` in your web browser. You can use a
program like `rsync` to transfer the generated HTML and CSS files in the `_site`
directory to the correct location on your web server. Finally, please note that
this site is not compatible with GitHub pages because of the fact that it uses
third-party gems like `jekyll-scholar`.

If you find a mistake in my web site, then please raise an issue and I will
quickly resolve it. If you have a question about the technologies underlying
this site, you can also raise and issue or contact me by other means.
