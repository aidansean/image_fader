<?php
$title = 'Image fader' ;
$stylesheets = array('style.css') ;
$js_scripts  = array('functions.js') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>

<div class="right">
  <h3>Fade an image</h3>
  <div class="blurb">
    <table>
      <tbody>
        <tr>
          <th>Image url: </th>
          <td><input id="input_image_url" type="input" value="http://www.aidansean.com/images/london1.jpg"/></td>
        </tr>
        <tr>
          <th>Fade to:</th>
          <td>rgb(
            <input id="input_r" type="input" value="0"/>,
            <input id="input_g" type="input" value="0"/>,
            <input id="input_b" type="input" value="0"/>
            )
          </td>
        </tr>
        <tr>
          <th>Fade top:</th>
          <td><input id="input_fade_top" type="input" value="5"/>px</td>
        </tr>
        <!--
        <tr>
          <th>Fade bottom:</th>
          <td><input id="input_fade_bottom" type="input" value="0"/>px</td>
        </tr>
        <tr>
          <th>Fade left:</th>
          <td><input id="input_fade_left" type="input" value="0"/>px</td>
        </tr>
        <tr>
          <th>Fade right:</th>
          <td><input id="input_fade_right" type="input" value="0"/>px</td>
        </tr>
        -->
        <tr>
          <th></th>
          <td><input id="submit_make" type="submit" value="Fade image" /></td>
        </tr>
      </tbody>
    </table>
    <canvas id="canvas_image_out" width="50" height=""/>
  </div>
</div>

<?php foot() ; ?>