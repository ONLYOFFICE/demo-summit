<?php get_header(); ?>
<main class="main">
    <img class="vectors" src="<?php echo ONLYOFFICE_IMG_DIR ?>/top-vectors.svg" alt="three vectors" />
    <section class="invalid">
        <div class="container">
        <img src="<?php echo ONLYOFFICE_IMG_DIR ?>/404.svg" alt="agenda date">
            <h1 class="invalid__title">404 error</h1>
            <p class="invalid__description">
            It seems you clicked on an invalid link, or entered an address that is not on this website.
            </p>
            <a href="/" class="home-page"
          ><button>go to home page</button></a>
        </div>
    </section>
   
</main>
<?php get_footer(); ?>