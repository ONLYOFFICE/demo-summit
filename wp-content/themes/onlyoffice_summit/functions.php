<?php
  define("ONLYOFFICE_THEME_ROOT", get_template_directory_uri());
  define("ONLYOFFICE_IMG_DIR", ONLYOFFICE_THEME_ROOT . "/images");

  add_action("wp_enqueue_scripts", "theme_add_scripts");

  function theme_add_scripts() {
    wp_enqueue_style("style-css", get_template_directory_uri()."/css/style.css");
    wp_enqueue_style("agenda-css", get_template_directory_uri()."/css/agenda.css");
    wp_enqueue_style("register-css", get_template_directory_uri()."/css/register.css");
    wp_enqueue_style("sponsor-css", get_template_directory_uri()."/css/sponsor.css");
    wp_enqueue_style("layout-css", get_template_directory_uri()."/css/layout.css");
    wp_enqueue_style("invalid", get_template_directory_uri()."/css/404.css");
    wp_enqueue_style("font-css", get_template_directory_uri()."/dist/css/font.css");
    wp_enqueue_script("oo-script", get_template_directory_uri() . "/js/index.js", "1.0", ["in_footer" => true]);
  } 

  add_theme_support("menus");

  add_filter("nav_menu_css_class", "special_nav_class", 10, 3);

  function special_nav_class($classes, $item, $args){
    if ($args->menu==="header_menu") {
      $classes[] = "header__menu-item";
      if($item->current) {
        $classes[] = " active";
      }
    }
    if ($args->menu==="footer_menu") {
      $classes[] = "footer__menu-item";
      if ($item->current) {
        $classes[] = " active";
      }
    }    
    return $classes;
  }
?>