<template>
  <Layout>
    <div class="about-wrapper">
      <h2 class="is-size-3">About Us</h2>
      <p>Thanks for stopping by our little corner of the web. As you've undoubtedly noticed, we make make memes with a centrist/right slant.</p>

      <p>☑️ If you are interested in submitting a meme, please send it to thememedepot@protonmail.com</p>

      <div class="hr"></div>
      <h3 class="is-size-4">Get In Touch ✏️</h3>
      <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/thememedepot@protonmail.com" method="post">
        <fieldset id="fs-frm-inputs">
          <label for="full-name">Name</label>
          <input type="text" name="name" id="full-name" placeholder="John Doe" required="">
          <label for="email-address">Email Address</label>
          <input type="email" name="_replyto" id="email-address" placeholder="johndoe@email.com" required="">
          <label for="message">Message</label>
          <textarea rows="5" name="message" id="message" placeholder="your message..." required=""></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
        </fieldset>
        <input type="submit" value="Send">
      </form>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
 
 <style lang="scss" scoped>
@import "../assets/scss/styles.scss";
.about-wrapper {
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
}

.hr {
  height: 4px;
  width: 20%;
  background-color: #eee;
  margin: 4rem auto 4rem auto;
  transform: rotate(-5deg);
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
input,
textarea {
  display: block;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  border-radius: 3px;
  border: 1px solid #ddd;

  &:focus {
    outline: none !important;
    border-color: $orange;
  }
}

input[type="submit"] {
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  background-color: $orange;
  border: 0;
  cursor: pointer;
  width: auto;
  color: #fff;
  border-radius: 3px;

  &:hover {
    background-color: darken($orange, 7%);
  }
}
</style>
 