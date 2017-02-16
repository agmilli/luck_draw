w();
window.addEventListener('resize',w)
function w(){
	var deviceWidth=document.documentElement.clientWidth;
	if(deviceWidth>750){
		deviceWidth=750;
	}else if(deviceWidth<320){
		deviceWidth=320;
	}
	document.documentElement.style.fontSize=(deviceWidth/7.5)+'px';
}	