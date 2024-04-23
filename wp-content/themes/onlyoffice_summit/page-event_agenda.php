<?php
/*
Template Name: Event Agenta
*/
?>
<?php get_header(); ?>
<main class="main">
    <img class="vectors" src="<?php echo ONLYOFFICE_IMG_DIR ?>/top-vectors.svg" alt="three vectors" />
    <div class="container">
        <section class="event__agenda">
            <h1 class="agenda__title">Event agenda</h1>
            <div class="events__date--list">
                <div class="event__date--item">
                    <h3 class="event_date">July 9, 2024</h3>
                    <div class="events__list">
                        <div class="event">
                            <p class="event__hour">10:00</p>
                            <p class="event__name">Opening ceremony</p>
                        </div>
                        <div class="event">
                            <p class="event__hour">12:00</p>
                            <p class="event__name">
                                Refining document collaboration: when flexibility matters
                                (by Jack Crown, Development, and Helen White, PR)
                            </p>
                        </div>
                        <div class="event">
                            <p class="event__hour">14:00</p>
                            <p class="event__name">
                                Discovering the new integration: ONLYOFFICE DocSpace &
                                Zoom (by Kate Smith, Product Architect)
                            </p>
                        </div>
                        <div class="event">
                            <p class="event__hour">16:00</p>
                            <p class="event__name">
                                Community – the driven force of open-source projects (by
                                Morissa Tracy, Marketing)
                            </p>
                        </div>
                    </div>
                </div>
                <div class="event__date--item">
                    <h3 class="event_date">July 10, 2024</h3>
                    <div class="events__list">
                        <div class="event">
                            <p class="event__hour">11:00</p>
                            <p class="event__name">
                                Partner/sponsor presentation (to be announced later)
                            </p>
                        </div>
                        <div class="event">
                            <p class="event__hour">13:00</p>
                            <p class="event__name">
                                Open-Source Office Software – Panel Discussion
                            </p>
                        </div>
                        <div class="event">
                            <p class="event__hour">15:00</p>
                            <p class="event__name">Booth Workshops</p>
                        </div>
                        <div class="event">
                            <p class="event__hour">17:00</p>
                            <p class="event__name">Closing ceremony</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<?php get_footer(); ?>