---
title: SEED&#58; Educational discussions with software engineers
layout: defaults
---

# {{ page.title }}

<!-- Include header image -->
{% include _popovers/image_reference.html image="8608133415_35de14d034_z.jpg" content="<a title='SEED PODS' href='https://flickr.com/photos/meloart/8608133415'>flickr photo</a> by <a href='https://flickr.com/people/meloart'>meloart</a> shared under a <a href='https://creativecommons.org/licenses/by-nc-nd/2.0/'>CC (BY-NC-ND) license</a> </small>" label="CC (BY-NC-ND)" %}

{% assign size = site.baseurl | size | minus: 1 %}

{% describe %}
Do you work in the software industry? Are you interested in sharing your knowledge and experience with up-and-coming
members of your field? Do you want to influence the way academics teach and conduct research? If so, then please fill
out this <a href="#seedsurvey">survey</a>.
{% enddescribe %}

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
[research]({{site.baseurl}}research/)  with students. At the end of 2018, I will
release a retrospective in which I report on the key lessons taught by all of
the interviewees and make suggestions for ways in which educators like me can
improve their teaching and research.

Please [contact]({{site.baseurl}}contact/) me with any questions or comments
that you have about this initiative.

<a name="seedsurvey"></a>

{% comment %} <form method="POST" action="https://getsimpleform.com/messages?form_api_token=036ec14e0a86e2bf39ae488655d68c50" data-toggle="validator" data-feedback='{"success": "fa-check", "error": "fa-times"}' role="form"> {% endcomment %}

<form method="POST" action="https://getsimpleform.com/messages?form_api_token=036ec14e0a86e2bf39ae488655d68c50" role="form">

  <div class="form-group has-feedback">
    <label for="name">Name</label>
    <div class="row">
      <div class="col-sm-6">
        <input type="text" class="form-control" name="name" id="name" placeholder="Your name" data-required-error="Please fill out this field" required/>
      </div>
      <div class="col-sm-6">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="reply_to">Email</label>
    <div class="row">
      <div class="col-sm-6">
        <input type="email" class="form-control" name="reply_to" id="reply_to" placeholder="user.name@example.com" data-error="Please enter a valid email address" data-required-error="Please fill out this field" required/>
      </div>
      <div class="col-sm-6">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="company_name">Company</label>
    <div class="row">
      <div class="col-sm-6">
        <input type="text" class="form-control" name="company_name" id="company_name" placeholder="Company name" data-required-error="Please fill out this field" required/>
      </div>
      <div class="col-sm-6">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="title_name">Job Title</label>
    <div class="row">
      <div class="col-sm-6">
        <input type="text" class="form-control" name="title_name" id="title_name" placeholder="Your job title" data-required-error="Please fill out this field" required/>
      </div>
      <div class="col-sm-6">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="web_site">Web Site</label>
    <div class="row">
      <div class="col-sm-6">
        <input type="url" class="form-control" name="web_site" id="web_site" placeholder="Your web site (LinkedIn is fine)" data-error="Please enter a valid URL" data-required-error="Please fill out this field" required/>
      </div>
      <div class="col-sm-6">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="question_fact">What is one fun fact that you can share about your company or a current project?</label>
    <div class="row">
      <div class="col-sm-7">
        <textarea type="text" class="form-control" name="question_fact" id="question_fact" rows="5" placeholder="Share a fun fact about your company or your current project" data-required-error="Please fill out this field" required></textarea>
      </div>
      <div class="col-sm-5">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="question_challenge">What is the greatest challenge that you face when working in your field?</label>
    <div class="row">
      <div class="col-sm-7">
        <textarea type="text" class="form-control" name="question_challenge" id="question_challenge" rows="5" placeholder="Share the greatest challenge that you face in your field" data-required-error="Please fill out this field" required></textarea>
      </div>
      <div class="col-sm-5">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="question_advice">What is one point of advice that you can give to people who plan to enter your field?</label>
    <div class="row">
      <div class="col-sm-7">
        <textarea type="text" class="form-control" name="question_advice" id="question_advice" rows="5" placeholder="Share a point of advice to someone who intends to enter your field" data-required-error="Please fill out this field" required></textarea>
      </div>
      <div class="col-sm-5">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <div class="row">
      <div class="col-xs-1">
        <div class="checkbox">
          <input type="checkbox" name="copyedit" id="copyedit">
        </div>
      </div>
      <div class="col-xs-11">
        <label for="copyedit">Do you allow minimal copy-editing of your responses?</label>
      </div>
    </div>
  </div>

  <div class="form-group has-feedback">
    <label for="time">How many minutes did it take you to complete this survey?</label>
    <div class="row">
      <div class="col-sm-6">
        <input type="number" class="form-control" name="time" id="time" min=1 step=1 placeholder="Time to completion in minutes" data-error="Please enter a whole number of minutes" required/>
      </div>
      <div class="col-sm-6">
        <div class="help-block with-errors">&nbsp;</div>
      </div>
    </div>
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-info">Submit</button>
    <input type="hidden" name="redirect_to" value="http://www.cs.allegheny.edu/sites/gkapfham/seedthanks/"/>
    <input type="hidden" name="_subject" value="Submission to the SEED Project"/>
    <input type="hidden" name="_format" value="plain"/>
  </div>

</form>
