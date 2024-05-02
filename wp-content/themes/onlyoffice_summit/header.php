<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link type="image/x-icon" href="<?php echo ONLYOFFICE_IMG_DIR ?>/favicon.svg" rel="shortcut icon" />
		<link type="Image/x-icon" href="<?php echo ONLYOFFICE_IMG_DIR ?>/favicon.svg" rel="icon" />
		<title><?php wp_title() ?></title>
    <?php wp_head(); ?>
	</head>
	<body>
		<div class="wrapper">
			<header class="header">
				<div class="container">
					<div class="header__inner">
						<a href="/" class="header__logo">
							<img src="<?php echo ONLYOFFICE_IMG_DIR ?>/logo.svg" alt="OnlyOffice Logo"/>
						</a>
						<div class="header__links">
              <?php 
								wp_nav_menu([
									'menu'            => 'header_menu',
									'container'       => 'false',
									'menu_class'      => 'header__menu',
									'echo'            => true,
									'fallback_cb'     => 'wp_page_menu',
									'items_wrap'      => '<ul class="header__menu">%3$s</ul>',
									'depth'           => 1,
								]);
							?>
							<a href="/registration" class="header__register">
								<span class="button header__register-btn-pc">register</span>
								<span class="button header__register-btn-mobile"></span>
							</a>
						</div>
					</div>
				</div>
			</header>