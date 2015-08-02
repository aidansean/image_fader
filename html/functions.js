var canvas  = null ;
var context = null ;

function start(){
  Get('button_fade').addEventListener('click', make_image) ;
  canvas = Get('canvas_image_out') ;
  context = canvas.getContext('2d') ;
}

function make_image(){
  var url = Get('input_image_url').value ;
  var img = new Image() ;
  img.onload = function(){
    var fade_t = Get('input_fade_top'   ).value ;
    var fade_b = Get('input_fade_bottom').value ;
    var fade_l = Get('input_fade_left'  ).value ;
    var fade_r = Get('input_fade_right' ).value ;
    
    var r_fade = Get('input_r').value ;
    var g_fade = Get('input_g').value ;
    var b_fade = Get('input_b').value ;
    
    var w = this.width  ;
    var h = this.height ;
    canvas.width  = w ;
    canvas.height = h ;
    
    context.drawImage(this, 0, 0, w, h) ;
    
    var image_data = context.getImageData(0,0,w,h) ;
    for(var i=0 ; i<fade_t ; i++){
      for(var j=0 ; j<w ; j++){
        var k = (w*i+j)*4 ;
        var r = image_data.data[k+0] ;
        var g = image_data.data[k+1] ;
        var b = image_data.data[k+2] ;
        var f = (fade_t-i)/fade_t ;
        
        image_data.data[k+0] = r_fade*f + r*(1-f) ;
        image_data.data[k+1] = g_fade*f + g*(1-f) ;
        image_data.data[k+2] = b_fade*f + b*(1-f) ;
      }
    }
    for(var i=h-fade_b ; i<h ; i++){
      for(var j=0 ; j<w ; j++){
        var k = (w*i+j)*4 ;
        var r = image_data.data[k+0] ;
        var g = image_data.data[k+1] ;
        var b = image_data.data[k+2] ;
        var f = (h-i)/fade_b ;
        
        image_data.data[k+0] = r_fade*(1-f) + r*f ;
        image_data.data[k+1] = g_fade*(1-f) + g*f ;
        image_data.data[k+2] = b_fade*(1-f) + b*f ;
      }
    }
    
    for(var i=0 ; i<h ; i++){
      for(var j=0 ; j<fade_l ; j++){
        var k = (w*i+j)*4 ;
        var r = image_data.data[k+0] ;
        var g = image_data.data[k+1] ;
        var b = image_data.data[k+2] ;
        var f = (fade_l-j)/fade_l ;
        
        image_data.data[k+0] = r_fade*f + r*(1-f) ;
        image_data.data[k+1] = g_fade*f + g*(1-f) ;
        image_data.data[k+2] = b_fade*f + b*(1-f) ;
      }
    }
    for(var i=0 ; i<h ; i++){
      for(var j=w-fade_r ; j<w; j++){
        var k = (w*i+j)*4 ;
        var r = image_data.data[k+0] ;
        var g = image_data.data[k+1] ;
        var b = image_data.data[k+2] ;
        var f = (w-j)/fade_r ;
        
        image_data.data[k+0] = r_fade*(1-f) + r*f ;
        image_data.data[k+1] = g_fade*(1-f) + g*f ;
        image_data.data[k+2] = b_fade*(1-f) + b*f ;
      }
    }
    
    context.putImageData(image_data, 0, 0) ;
  }
  img.src = url ;
}

function Get(id){ return document.getElementById(id) ; }
