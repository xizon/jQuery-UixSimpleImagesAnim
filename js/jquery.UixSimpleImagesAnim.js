/*! 
 
 * jQuery UixSimpleImagesAnim
 
 * The jquery.UixSimpleImagesAnim.js about spritely is that the image sequence is a actually one big image, that is being moved around to crate an animation.  It could simulate the CSS3 button animation for the hover effect to take place. At the same time, you can also bind the trigger.
 
 * @author:      UIUX Lab
 * @author URI:  http://uiux.cc
 * @version:     1.0.0
 * @licensing:   Licensed under the GPL3.0.

 */
(function($){
	$.fn.UixSimpleImagesAnim=function(options){
		var settings=$.extend({
            "animToLastFrameEvent": function () {
               
            },
			"imgWidth":0,
			"totalFrame":12,
			"speed":50,
			"reverse":false,
			"hoverEffect":false,
			"trigger":"#ho",
			"animLoop":false

		}
		,options);
		this.each(function(){
			
			var $this=$(this),
			    $imgWidth=settings.imgWidth,
				$totalFrame=settings.totalFrame,
				$speed=settings.speed,
				$reverse=settings.reverse,
				$hoverEffect=settings.hoverEffect,
				$trigger=settings.trigger,
				$animLoop=settings.animLoop;
				
				
				
				var _tW = 1;
				var _tWTotal = $imgWidth * $totalFrame;
				
				$($trigger).bind("mouseenter",function(){
					$this.trigger("mouseover");
					
				});
				
				$($trigger).bind("mouseout",function(){
					$this.trigger("mouseout");
				});	

				
				
				if ($animLoop == false){
					
						if ($hoverEffect == false){
							
								function dAnim(){
									if ($reverse == false){
										var sAnim = setInterval(function(){
											var _taniW = -($imgWidth * _tW);
											$this.css("background-position", _taniW + "px 0");
											
											//stop
											if (_taniW <= -(($imgWidth*$totalFrame) - $imgWidth)){
												clearInterval(sAnim);
												settings.animToLastFrameEvent();
											}
											
											
											_tW ++;
						
										},$speed);
										
					
									}else{
										var sAnim_R = setInterval(function(){
					
											$this.css("background-position", - (Math.floor(_tWTotal) - Math.floor($imgWidth * _tW)) + "px 0");
						
											//stop
											if (- (Math.floor(_tWTotal) - Math.floor($imgWidth * _tW)) == 0){
												clearInterval(sAnim_R);
												settings.animToLastFrameEvent();
											}
											
											
											_tW ++;
						
										},$speed);
					
									}

								}
								
								
								var mouseProtection = false;
								$this.bind("mouseover",function(){
									if (!mouseProtection){
											mouseProtection = true;
											dAnim();
										
									}
								});
						

							
						}else{
								var _taniW;
								var _tW1AnimStop1 = false;
								var _tW1AnimStop2 = false;
								var _tMouseoutStop = true;
								
								//out
								function mtAnim(){
									if (_tW1AnimStop2 == false){
										_tW1AnimStop2 = true;
										var _tW2 = 1;
										var sAnim_R = setInterval(function(){
					
											$this.css("background-position", Math.floor(_taniW) + Math.floor($imgWidth * _tW2) + "px 0");
										
											//stop
											if (Math.floor(_taniW) + Math.floor($imgWidth * _tW2) == 0){
												clearInterval(sAnim_R);
												_tW1AnimStop2 = false;
												_tMouseoutStop = true;
								
							
											}
											
											
											_tW2 ++;
						
										},$speed);
									}	
									
								}
								
								
								//over
								function moAnim(){
									
									if (_tW1AnimStop1 == false){
											_tW1AnimStop1 = true;
											_tW1AnimStop2 = true;
											_tMouseoutStop = true;
											var _tW1 = 1;
											var sAnim = setInterval(function(){
												_taniW = -($imgWidth * _tW1);
												$this.css("background-position", _taniW + "px 0");
												
												//stop
												if (_taniW <= -(($imgWidth*$totalFrame) - $imgWidth)){
													clearInterval(sAnim);
													_tW1AnimStop1 = false;
													_tW1AnimStop2 = false;
													_tMouseoutStop = false;
													
													
													//mouseOut
													$this.mouseout(function(){
														mtAnim();	
													});	
		
													
													
													
												}
												
												
												_tW1 ++;
							
											},$speed);
							
									}	
									
								}
								
								$this.bind("mouseover",function(){
								    moAnim();
								});
		
								$($trigger).bind("mouseover",function(){
								    if(_tMouseoutStop == false){
										mtAnim();	
									}
								});

							  
		
						}
						
		
					
				}else{
					
					
					var sAnim = setInterval(function(){
						var _taniW = -($imgWidth * _tW);
						$this.css("background-position", _taniW + "px 0");
						
						
						if (_taniW <= -(($imgWidth*$totalFrame))){
							$this.css("background-position",  "0 0");
							_tW = 0;


						}
						
						
						_tW ++;
	
					},$speed);
					
					
				}
				
				
						
	
		

			
		})
	}
})(jQuery);