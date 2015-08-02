<?php
$title = 'Image fader' ;
$stylesheets = array('style.css') ;
$js_scripts  = array('functions.js') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>

<div class="right">
  <h2>Fade an image</h2>
  <div class="blurb center">
    <table id="table_fade">
      <tbody>
        <tr>
          <th>Image url: </th>
          <td><input id="input_image_url" class="fader"  type="input" value="/images/london1.jpg"/></td>
        </tr>
        <tr>
          <th>Fade to:</th>
          <td>rgb(
            <input id="input_r" class="fader" type="input" value="0"/>,
            <input id="input_g" class="fader" type="input" value="0"/>,
            <input id="input_b" class="fader" type="input" value="0"/>
            )
          </td>
        </tr>
        <tr>
          <th>Fade top:</th>
          <td><input id="input_fade_top" class="fader" type="input" value="5"/>px</td>
        </tr>
        <tr>
          <th>Fade bottom:</th>
          <td><input id="input_fade_bottom" class="fader" type="input" value="0"/>px</td>
        </tr>
        <tr>
          <th>Fade left:</th>
          <td><input id="input_fade_left" class="fader" type="input" value="0"/>px</td>
        </tr>
        <tr>
          <th>Fade right:</th>
          <td><input id="input_fade_right" class="fader" type="input" value="0"/>px</td>
        </tr>
        <tr>
          <th></th>
          <td><button id="button_fade" class="fader" >Fade image</button></td>
        </tr>
      </tbody>
    </table>
    <canvas id="canvas_image_out" width="50" height=""/>
  </div>
</div>

<?php foot() ; ?>