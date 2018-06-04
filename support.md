---
title: Support
layout: defaults
---

# {{ page.title }}

<!-- Include header image -->
{% include _popovers/image_reference.html image="15373329032_668c8184e9_z.jpg" content="<a title='Light bulbs' href='https://flickr.com/photos/126725739@N05/15373329032'>flickr photo</a> shared by <a href='https://flickr.com/people/126725739@N05'>peachesh</a> under a <a href='https://creativecommons.org/licenses/by/2.0/'>CC (BY) license</a> </small>" label="CC (BY)" %}

## Subscription

Please subscribe to my mailing list! Instead of selling your email or bombarding you with spam, I will send you several
informative and useful updates each year. <br>

  <!-- <div class="form-group has-feedback"> -->
  <!--   <label for="name">Name</label> -->
  <!--   <div class="row"> -->
  <!--     <div class="col-sm-6"> -->
  <!--       <input type="text" class="form-control" name="name" id="name" placeholder="Your name" data-required-error="Please fill out this field" required/> -->
  <!--     </div> -->
  <!--     <div class="col-sm-6"> -->
  <!--       <div class="help-block with-errors">&nbsp;</div> -->
  <!--     </div> -->
  <!--   </div> -->
  <!-- </div> -->


<form method="POST" action="https://getsimpleform.com/messages?form_api_token=036ec14e0a86e2bf39ae488655d68c50" class="form-inline" data-toggle="validator" data-feedback='{"success": "fa-check", "error": "fa-times"}' role="form">
  <!-- Create the input field for the name -->
    <div class="form-group has-feedback">
      <label for="name" class="col">Name</label>
      <div class="row">
        <div class="col-sm-10">
          <input type="text" class="form-control col" name="name" id="name" placeholder="Your Name" required/>
        </div>
        <div class="col-sm-2">
          <span class="fa form-control-feedback col" aria-hidden="true"></span>
        </div>
    </div>
  </div>
  <!-- Create the input field for the email address -->
  <div class="form-group has-feedback">
    <label for="reply_to" class="col">Email</label>
    <div class="row">
      <div class="col-sm-10">
        <input type="email" class="form-control col" name="reply_to" id="reply_to" placeholder="user.name@example.com" required/>
      </div>
      <div class="col-sm-2">
        <span class="fa form-control-feedback col" aria-hidden="true"></span>
      </div>
    </div>
  </div>
  <input type="hidden" name="redirect_to" value="http://www.cs.allegheny.edu/sites/gkapfham/emailthanks/"/>
  <input type="hidden" name="_subject" value="Updates from Gregory M. Kapfhammer"/>
  <input type="hidden" name="_format" value="plain"/>
    <!-- Create the button -->
    <div class="form-group row">
      <div class="col">
      <button type="submit" class="btn btn-info">Subscribe</button>
      </div>
    </div>
</form>

## Connection

{% describe %}
I work hard to produce the highest quality content to serve people interested in software engineering, software testing,
and data science. Consider supporting my work in one or more of the following ways.
{% enddescribe %}

<ul class="fa-ul">

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}research/papers/">Papers</a>:
Read my research papers, pick your favorite, and share it with a friend.</li> <p>

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}research/presentations/">Presentations</a>:
View my talks, select an engaging one, and reccomend it to someone.</li> <p>

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}software/">Software</a>:
Browse my software projects, find a cool one, try it out, and star it.</li.> <p>

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}teaching/">Courses</a>:
Pick an interesting topic, explore it, and share what you learned with others.</li> <p>

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}blog/">Blog</a>:
Find an article of interest to you and draw it to the attention of your colleagues.</li> <p>

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}seed/">Survey</a>:
If you are a member of the software industry, please take this survey.</li> <p>

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}service/">Service</a>:
Learn more about how I serve the technical community and ask me to help you.</li> <p>

<li><i class="fa-li fa fa-lightbulb-o fa-lg"></i><a class="major" href="{{site.baseurl}}feed/">Updates</a>:
Subscribe to my Atom feed so that you can stay updated about new developments.</li> <p>

</ul>
