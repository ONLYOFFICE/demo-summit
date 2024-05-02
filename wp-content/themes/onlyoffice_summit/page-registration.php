<?php
/*
Template Name: Registration
*/
?>
<?php get_header(); ?>

<main class="main main-register">
  <section class="register">
    <div class="container">
      <div class="register__wrapper">
        <h1 class="register__title">Registration</h1>
        <h3 class="register__subtitle">ONLYOFFICE Summit 2024 – Free Visitor Registration</h3>
        <p class="register__description">
          The data collected is for admittance and event management for
          ONLYOFFICE Summit 2024. We do not share your details with any
          third party.
        </p>
      </div>
      <div class="register__form-text">Fill out the form and we will contact you with all the required details as soon as possible.</div>
      <?php
        $page_id = 19;
        $page = get_post($page_id);
        echo apply_filters('the_content', $page->post_content);
      ?>
    </div>
  </section>
</main>
<?php get_footer(); ?>