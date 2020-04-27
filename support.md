---
title: Support
layout: defaults
image: /download/images/15373329032_668c8184e9_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/head_jumbotron.html title=page_title subtitle="creating connections in" highlight="computer science" %}

## Subscription

Please subscribe to my mailing list! Instead of selling your email or bombarding you with spam, I will send you several
informative and useful updates each year. <br>

<form name="mailinglist" method="POST" action="/emailthanks/" netlify-honeypot="bot-field" netlify>

  <!-- Request the name -->
  <div class="form-group">
    <label for="name">Name</label >
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" name="name" id="name" placeholder="Your name" required>
      </div>
    </div>
  </div>

  <!-- Request the email -->
  <div class="form-group">
    <label for="reply_to">Email</label>
    <div class="row">
      <div class="col">
        <input type="email" class="form-control" name="reply_to" id="reply_to" placeholder="user.name@example.com" required>
      </div>
    </div>
  </div>

  <!-- Display the button -->
  <!-- Transmit a hidden field for spam detection -->
  <div class="form-group">
  <button type="submit" class="btn btn-info">Submit</button>
  <input type="hidden" name="bot-field"/>
  </div>

</form>

## Connection

{% describe %}
I work hard to produce the highest quality content to serve people interested in software engineering and software testing.
Consider supporting my work in one or more of the following ways.
{% enddescribe %}

<ul>

<li><a class="major" href="{{site.baseurl}}research/papers/">Papers</a>:
Read my research papers, pick your favorite, and share it with a friend.</li>

<li><a class="major" href="{{site.baseurl}}research/presentations/">Talks</a>:
View my talks, select an engaging one, and reccomend it to someone.</li>

<li><a class="major" href="{{site.baseurl}}software/">Software</a>:
Browse my software projects, find a cool one, try it out, and star it.</li>

<li><a class="major" href="{{site.baseurl}}teaching/">Courses</a>:
Pick an interesting topic, explore it, and share what you learned with others.</li>

<li><a class="major" href="{{site.baseurl}}blog/">Blog</a>:
Find an article of interest to you and draw it to the attention of your colleagues.</li>

<li><a class="major" href="{{site.baseurl}}seed/">Survey</a>:
If you are a member of the software industry, please take this survey.</li>

<li><a class="major" href="{{site.baseurl}}service/">Service</a>:
Learn how I serve the technical community and ask me to help you.</li>

<li><a class="major" href="{{site.baseurl}}feed/index.xml">Updates</a>:
Subscribe to my Atom feed to stay updated about my work.</li>

</ul>
