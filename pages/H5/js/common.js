	// 下拉
	let icon = document.querySelector('.icon');
	let icon_ = document.querySelector('.icon_');
	let oP = document.getElementsByClassName('la');
	let oUl = document.getElementsByClassName('la_la');
	onload = function () {
	    let i;
	    for (i=0;i<oP.length;i++)
	    {
	        oP[i].index=i;
	        oP[i].onclick = function() {
	            if(oUl[this.index].style.display == 'block')
	            {
					icon.innerHTML = '';
					icon_.innerHTML = '';
	                oUl[this.index].style.display = 'none';
	            }
	            else{
					icon.innerHTML = '';
					icon_.innerHTML = '';
	                for(var i=0;i<oUl.length;i++)
	                {
	                    oUl[i].style.display='block';
	                }
	                oUl[this.index].style.display='block';
	            }
			}
	    }	
	}
  // ----------------------------------------------------------------------------------------------------------------
  
	// 点击英语弹出敬请期待
	let ick = document.querySelector('.click');//英语一
	let ick_ = document.querySelector('.click_');//英语二
	//下拉框
	let oU_ = document.getElementsByClassName('.la_la_');//下拉框二
	ick.onclick = function () {
		alert("论坛我都咕咕咕了,你还想要英文网页?");
	}
	ick_.onclick = function () {
		alert("论坛我都咕咕咕了,你还想要英文网页?");
	}
	// -----------------------------------------------------------------------------------------------------------------
	//点击论坛弹出敬请期待
	let forum = document.querySelector('.forum');
	let forum_ = document.querySelector('.forum_');
	forum.onclick = function () {
		alert("是的,我是鸽子,我咕咕咕了;什么?敬请期待,不存在的。");
	};
	forum_.onclick = function () {
		alert("是的,我是鸽子,我咕咕咕了;什么?敬请期待,不存在的。");
	};
// -----------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------
	// 展示图片滚动
	// let smoo = document.querySelector('.zhan_gundong');
	// let smoo_ = document.querySelector('.zhan_gundong1');
	// let lll = smoo.children[0]
	// let wid = null;
	// let left = 0;
	// let left_ = 0;
	
	// let stop;
	// let stop_;
	// smoo.innerHTML += smoo.innerHTML;
	// smoo_.innerHTML += smoo_.innerHTML;
	//  // 机器图片滚动
	// 	stop = setInterval(function(){

	// 	left -= 3
	// 	if (left === -(4 * 900)) {
	// 		left = 0;
	// 	}
	// 	smoo.style.left = left + 'px';
	//  },10);
	 
	//  smoo.onmouseover = function() {
	//  		clearInterval(stop);
	//  }
	//  smoo.onmouseout = function() {
	// 	 stop =  setInterval(function(){
	// 	 		left -= 3
	// 	 		if (left === -(4 * 900)) {
	// 	 			left = 0;
	// 	 		}
	// 	 		smoo.style.left = left + 'px';
	// 	 },10);
	//  }
	 
	//  // 建筑图片滚动
	//  	stop_ = setInterval(function(){
	//  	left_ -= 3
	//  	if (left_ === -(4 * 900)) {
	//  		left_ = 0;
	//  	}
	//  	smoo_.style.left = left_ + 'px';
	//   },10);
	//  smoo_.onmouseover = function() {
	//  	 	clearInterval(stop_);
	//  }
	//  smoo_.onmouseout = function() {
	//  	stop_ =  setInterval(function(){
	//  	left_ -= 3
	//  	if (left_ === -(4 * 900)) {
	//  		left_ = 0;
	//  	}
	//  	smoo_.style.left = left_ + 'px';
	//   },10);}
	// 成员旋转木马轮播图
