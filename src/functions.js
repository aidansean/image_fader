var canvas  = null ;
var context = null ;

function start(){
  Get('submit_make').addEventListener('click', make_image) ;
  canvas = Get('canvas_image_out') ;
  context = canvas.getContext('2d') ;
}

function make_image(){
  var url = Get('input_image_url').value ;
  var img = new Image() ;
  img.onload = function(){
    var fade_t = Get('input_fade_top'   ).value ;
    //var fade_b = Get('input_fade_bottom').value ;
    //var fade_l = Get('input_fade_left'  ).value ;
    //var fade_r = Get('input_fade_right' ).value ;
    
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
        
        r = Math.floor((r_fade*(fade_t-i)+i*r)/fade_t) ;
        g = Math.floor((g_fade*(fade_t-i)+i*g)/fade_t) ;
        b = Math.floor((b_fade*(fade_t-i)+i*b)/fade_t) ;
        
        image_data.data[k+0] = r ;
        image_data.data[k+1] = g ;
        image_data.data[k+2] = b ;
      }
    }
    
    // Need to add fades for bottom, left and right
    
    
    
    context.putImageData(image_data, 0, 0) ;
  }
  img.src = url ;
}

function Get(id){ return document.getElementById(id) ; }
