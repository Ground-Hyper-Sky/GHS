	// 展示图片滚动
	let smoo = document.querySelector('.zhan_gundong');
	let smoo_ = document.querySelector('.zhan_gundong1');
	
	let left = 0;
	let left_ = 0;
	
	let stop;
	let stop_;
	
	smoo.innerHTML += smoo.innerHTML;
	smoo_.innerHTML += smoo_.innerHTML;
	
	 // 机器图片滚动
	 let whith = document.getElementsByClassName('whith').offsetWidth;
	// let lil = document.querySelector('.zhan_gundong');
	// let lll = lil.children[0]
	// let wid = null;
		 // setInterval(function () {

		 // },1000);
		stop = setInterval(function(){
			let wid = lll.clientWid;
			console.log(wid);
		left -= 3
		if (left === -(4 * wid)){
			left = 0;
		};
		smoo.style.left = left + 'px';
	 },10);
	 smoo.onmouseover = function() {
	 		clearInterval(stop);
	 }
	 smoo.onmouseout = function() {
		 stop =  setInterval(function(){
		 		left -= 10
		 		if (left === -(4 * wid)) {
		 			left = 0;
		 		}
		 		smoo.style.left = left + 'px';
		 },10);
	 }
	 
	 // 建筑图片滚动
	 	stop_ = setInterval(function(){
	 	left_ -= 3
	 	if (left_ === -(4 * 900)) {
	 		left_ = 0;
	 	}
	 	smoo_.style.left = left_ + 'px';
	  },10);
	 smoo_.onmouseover = function() {
	 	 	clearInterval(stop_);
	 }
	 smoo_.onmouseout = function() {
	 	stop_ =  setInterval(function(){
	 	left_ -= 3
	 	if (left_ === -(4 * 900)) {
	 		left_ = 0;
	 	}
	 	smoo_.style.left = left_ + 'px';
	  },10);}