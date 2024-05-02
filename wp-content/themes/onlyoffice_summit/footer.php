			<footer class="footer">
				<div class="container">
					<div class="footer__inner">
						<a href="/" class="footer__logo">
							<img src="<?php echo ONLYOFFICE_IMG_DIR ?>/logo.svg" alt="OnlyOffice Logo" />
						</a>
						<?php 
							wp_nav_menu([
								'menu'            => 'footer_menu',
								'container'       => 'false',
								'menu_class'      => 'footer_menu',
								'echo'            => true,
								'fallback_cb'     => 'wp_page_menu',
								'items_wrap'      => '<ul class="footer__menu">%3$s</ul>',
								'depth'           => 1,
							]);
						?>
					</div>
				</div>
			</footer>
		</div>		
    <?php wp_footer(); ?>
	</body>
</html>
