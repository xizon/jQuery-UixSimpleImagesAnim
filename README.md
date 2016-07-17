# jQuery UixSimpleImagesAnim - Animate though a PNG sequence using jQuery

The jquery.UixSimpleImagesAnim.js about spritely is that the image sequence is a actually one big image, that is being moved around to crate an animation.  It could simulate the CSS3 button animation for the hover effect to take place. At the same time, you can also bind the trigger.

UIUX Lab [@uiux_lab](http://twitter.com/uiux_lab)

[Author URI](http://uiux.cc)

### License
This project is licensed under the terms of the
[MIT license](https://github.com/callemall/material-ui/blob/master/LICENSE)


### Updates 

##### Version 1.0.0
Initial Release.


### Browser Support

IE7 +, Firefox, Safari, Opera, Chrome and more


### Demo

http://htmlpreview.github.io/?https://github.com/xizon/jQuery-UixSimpleImagesAnim/blob/master/demo.html


###How does it work?
```html

<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.UixSimpleImagesAnim.js"></script>
		<script>
		$(document).ready(function(){  
		
			$("#sprite1").UixSimpleImagesAnim({
				"animToLastFrameEvent": function(data){
					//code beginning...
					
				},
				"imgWidth"     : 65,
				"totalFrame"   :10, 
				"speed"        :60,
				"reverse"      :false
				
			});
		
			$("#sprite2").UixSimpleImagesAnim({
				"animToLastFrameEvent": function(data){
					//code beginning...
					
				},
				"imgWidth"     : 65,
				"totalFrame"   :10, 
				"speed"        :60,
				"reverse"      :true
				
			});
		　
		
			$("#sprite3").UixSimpleImagesAnim({
				"imgWidth"     : 65,
				"totalFrame"   :10, 
				"speed"        :60,
				"hoverEffect"  :true,
				"trigger"      :"#sprite3-trigger"
				
				
				
			});
		
		
		
			$("#sprite4").UixSimpleImagesAnim({
				"imgWidth"     : 65,
				"totalFrame"   :10,
				"speed"        :120,
				"animLoop"     :true
				
			});		
				
		
		});
		
		</script>
		<style>
		
		body{ 
			margin:0; 
			padding:50px;
			color:#fff; 
			font-size:16px; 
			background:#000;
			font-family:Arial, sans-serif;
		}
		
		.sprite1 {
			background: transparent url(images/sprite.png) 0 0 no-repeat;
			width:65px; 
			height:65px; 
			cursor: pointer;
		}
		.sprite2 {
			background: transparent url(images/sprite.png) -585px 0 no-repeat;
			width:65px; 
			height:65px; 
			cursor: pointer;
		}
		
		.im{
			color:#f00;
		}
		
		</style>
	</head>
	
	<body>
	  
		<p>
			<div class="sprite1" id="sprite1"></div>
			You need to do on a mouse move here. <span class="im">（The action run only once）</span></p>
		
		<p>
			<div class="sprite2" id="sprite2"></div>
			You need to do on a mouse move here.<span class="im">（Reverse animation and the action run only once）</span></p>
		
		<p>
			<div class="sprite1" id="sprite3"></div>
			Amazing Hover Effects <a style="background:#fff; color:#333; padding:5px; width:50px; height:18px; margin:10px; text-align:center; display:inline-block" id="sprite3-trigger">Trigger</a>
		</p>
	
		
		<p>
			<div class="sprite1" id="sprite4"></div>
			Infinite Loop Animation </p>
		
	
	
	</body>
</html>



```
