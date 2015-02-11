var imgUrls = ['img/loading.png','img/03bg.jpg','img/button.png','img/cloud.png','img/dialogue.png','img/input_box.png','img/kiwi-1.png','img/fabu.png','img/pop.png','img/share.png'];
var imgs = [];
var sum = 0;
var _w = $(window).width();
var _h = $(window).height();
function check(){
	sum++;
	var percent = sum/imgUrls.length * 100;
	$('#processBar').width(percent + '%');
	$('#processValue').html(percent.toFixed(0)+'%');
	if(sum == imgUrls.length){
		$('#loadMask').hide();
	}
}

for (var i=0;i<imgUrls.length;i++) {
	imgs[i] = new Image();
	imgs[i].src = imgUrls[i];
	imgs[i].onload = check;
};

