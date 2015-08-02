<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/image_fader" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=image_fader" ;
$project = new project_object("image_fader", "Image fader", "https://github.com/aidansean/image_fader", "http://aidansean.com/projects/?tag=image_fader", "image_fader/images/project.jpg", "image_fader/images/project_bw.jpg", "This is a simple script that fades an image to a given color and transparency.  It's used to make images for use in web design (for example, a background image that needs to fade to match the background color.)", "Images,Tools,Web design", "canvas,HTML,JavaScript") ;
?>