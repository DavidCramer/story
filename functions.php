<?php

/**
 * Enqueues styles.
 */
function wp_story_enqueue_styles() {
	wp_enqueue_style( 'wp_story_ratings', get_template_directory_uri() . '/assets/dist/css/main.css' );
}
add_action( 'wp_enqueue_scripts', 'wp_story_enqueue_styles' );
