---
title: SEED&#58; Educational discussions with software engineers
layout: defaults
description: Do you work in the software industry? Please participate in this survey!
image: /download/images/8608133415_35de14d034_z.jpg
---

{% capture page_title %} {{page.title}} {% endcapture %}
{% include _jumbotrons/head_jumbotron.html title=page_title subtitle="learning from leaders in" highlight="the software industry" %}

{% assign size = site.baseurl | size | minus: 1 %}

## Overview

Do you work in the software industry? Are you interested in sharing your
knowledge and experience with up-and-coming members of your field? Do you want
to influence the way academics teach and conduct research? If so, then please
fill out this <a href="#seedsurvey">survey</a>.

To learn the details of why I am interviewing you through this survey, I
encourage you to read the [introduction to the SEED project]({{ site.baseurl |
slice: 0, size }}{% post_url 2017-07-05-Introducing-SEED %}). In a nutshell, the
SEED project's aim is to enable both aspiring members of the software industry
and the academics who teach them to receive advice from those who are already a
part of this exciting field.

In addition to requesting your biographical information, the SEED survey only
asks you to answer three questions, requiring perhaps one or two paragraphs for
each response. While the time that you invest in this survey will be minimal, I
anticipate that students will greatly benefit from the advice that you share.

After you complete this survey, I will copy-edit your responses and publish them
on my [blog]({{site.baseurl}}blog/), enabling me to incorporate your advice into
the [teaching]({{site.baseurl}}teaching/) of my courses and my
[research]({{site.baseurl}}research/) with students. At the end of every year,
I will release a retrospective that reports on the key lessons shared by
all of the interviewees and makes suggestions for ways in which educators can
improve their teaching and research and students can improve their learning.

Since many people in industry have already completed the survey, I am publishing
their interviews on my [blog]({{site.baseurl}}blog/). Of course, you can
[contact]({{site.baseurl}}contact/) me with any questions or comments that you
have about this initiative.

<a name="seedsurvey"></a>

<form name="seedsurvey" method="POST" action="/seedthanks/" netlify-honeypot="bot-field" netlify>

  <!-- Request the name -->
  <div class="form-group">
    <label for="name">Name</label>
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

  <!-- Request the company -->
  <div class="form-group">
    <label for="company_name">Company</label>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" name="company_name" id="company_name" placeholder="Company name" required>
      </div>
    </div>
  </div>

  <!-- Request the job title -->
  <div class="form-group">
    <label for="title_name">Job Title</label>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" name="title_name" id="title_name" placeholder="Your job title" required>
      </div>
    </div>
  </div>

  <!-- Request the web site -->
  <div class="form-group">
    <label for="web_site">Web Site</label>
    <div class="row">
      <div class="col">
        <input type="url" class="form-control" name="web_site" id="web_site" placeholder="Your web site (LinkedIn is fine)" required>
      </div>
    </div>
  </div>

  <!-- Request the fun fact about the company -->
  <div class="form-group">
    <label for="question_fact">What is one fun fact that you can share about your company or a current project?</label>
    <div class="row">
      <div class="col">
        <textarea type="text" class="form-control" name="question_fact" id="question_fact" rows="5" placeholder="Share a fun fact about your company or your current project" required></textarea>
      </div>
    </div>
  </div>

  <!-- Request the greatest challenge that is faced -->
  <div class="form-group">
    <label for="question_challenge">What is the greatest challenge that you face when working in your field?</label>
    <div class="row">
      <div class="col">
        <textarea type="text" class="form-control" name="question_challenge" id="question_challenge" rows="5" placeholder="Share the greatest challenge that you face in your field" required></textarea>
      </div>
    </div>
  </div>

  <!-- Request the point of advice -->
  <div class="form-group">
    <label for="question_advice">What is one point of advice that you can give to people who plan to enter your field?</label>
    <div class="row">
      <div class="col">
        <textarea type="text" class="form-control" name="question_advice" id="question_advice" rows="5" placeholder="Share a point of advice to someone who intends to enter your field" required></textarea>
      </div>
    </div>
  </div>

  <!-- Ask if copy-editing is acceptable -->
  <div class="form-group">
    <div class="row">
      <div class="col">
        <div class="checkbox">
          <input type="checkbox" name="copyedit" id="copyedit">
        </div>
      </div>
      <div class="col-10">
        <label for="copyedit">Do you allow minimal copy-editing of your responses?</label>
      </div>
    </div>
  </div>

  <!-- Ask how long it took to complete this survey -->
  <div class="form-group">
    <label for="time">How many minutes did it take you to complete this survey?</label>
    <div class="row">
      <div class="col">
        <input type="number" class="form-control" name="time" id="time" min=1 step=1 placeholder="Time to completion in minutes" required>
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
