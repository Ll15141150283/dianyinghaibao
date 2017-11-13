
window.onload = function() {
	
	var contents = document.getElementById('contents');
	var imgs = contents.getElementsByClassName('pic');
	var cons = contents.getElementsByClassName('content');
	
	contents.onclick = function(e) {
		
		e = e || window.event;
		var currObj = e.target || e.srcElement;
		
		if (currObj.nodeName != 'IMG')
			return;
		
		if(imgs.length != cons.length)
			return;
			
		for(var i = 0;i < imgs.length;i ++) {
			
			if(imgs[i] == currObj.parentNode) {
				cons[i].style.visibility = 'visible';
				currObj.style.border = '5px solid yellow';				
			} else {
				cons[i].style.visibility = 'hidden';
				imgs[i].firstChild.style.border = '5px solid #fff';
			}
		}

		
	}
	
}
