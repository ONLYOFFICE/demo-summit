<?php get_header(); ?>
<main class="main main-error">
  <section class="error">
    <div class="container">
      <div class="error__wrapper">
        <img class="error__img" src="<?php echo ONLYOFFICE_IMG_DIR ?>/404.svg" alt="error-img" aria-hidden="true">
        <h1 class="error__title">404 error</h1>
        <p class="error__description">It seems you clicked on an invalid link, or entered an address that is not on this website.</p>
        <a href="/" class="error__button button button--primary">Go to home page</a>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>