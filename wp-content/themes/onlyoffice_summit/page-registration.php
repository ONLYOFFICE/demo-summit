<?php
/*
Template Name: Registration
*/
?>
<?php get_header(); ?>

<main class="main">
    <img class="vectors" src="images/top-vectors.svg" alt="three vectors" />
    <div class="container">
        <section class="register">
            <h1 class="register__title">Registration</h1>
            <h3 class="register__subtitle">
                ONLYOFFICE Summit 2024 – Free Visitor Registration
            </h3>
            <p class="register__description">
                The data collected is for admittance and event management for
                ONLYOFFICE Summit 2024. We do not share your details with any
                third party.
            </p>
            <?php
                $page_id = 19; // замените 123 на ID вашей страницы
                $page = get_post($page_id);
                echo apply_filters('the_content', $page->post_content);
            ?>            
        </section>
    </div>
</main>
<?php get_footer(); ?>