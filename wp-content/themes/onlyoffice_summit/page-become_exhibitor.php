<?php
/*
Template Name: Become exhibitor
*/
?>
<?php get_header(); ?>

<main class="main main-become-exhibitor">
  <section class="networking">
    <div class="container">
      <h1 class="networking__title">Become exhibitor / sponsor</h1>
      <h3 class="networking__subtitle">
        Become an exhibitor or sponsor of ONLYOFFICE Summit 2024
      </h3>
      <ul class="networking__items">
        <li class="networking__item" style="background-image: url('<?php echo ONLYOFFICE_IMG_DIR ?>/high-value-networking.svg')">
          <b>High-value networking:</b> connect with industry leaders and decision-makers
        </li>
        <li class="networking__item" style="background-image: url('<?php echo ONLYOFFICE_IMG_DIR ?>/unforced-organic-networking.svg')">
          <b>Unforced organic networking:</b> build relationships naturally in a relaxed and in-formal atmosphere
        </li>
        <li class="networking__item" style="background-image: url('<?php echo ONLYOFFICE_IMG_DIR ?>/expert-attendees.svg')">
          <b>Expert attendees:</b> showcase your solutions to key healthcare decision-makers that are relevant to your offerings
        </li>
        <li class="networking__item" style="background-image: url('<?php echo ONLYOFFICE_IMG_DIR ?>/post-event-reception.svg')">
          <b>Post-event drinks/food reception:</b> network and unwind with peers in a closed-door environment
        </li>
      </ul>
    </div>
  </section>
  <section class="documents">
    <div class="container">
      <h3 class="documents__title">Please find here all <span>important</span> documents to download</h3>
      <div class="documents__img">
        <?php
          $page_id = 15; 
          $page = get_post($page_id);
          echo apply_filters('the_content', $page->post_content);
        ?>  
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>