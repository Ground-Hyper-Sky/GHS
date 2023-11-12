	// 传入参数  拖动图上面防止误触的覆盖盒子  拖动图的ul盒子  最大截至地方
	function Scroll_Wrap(gai, scr, minrange, maxrange, initrange) {
		// 执行函数后获取盒子的最初left并保存切不可更改，作为数据使用
		const init = scr.offsetLeft;
		// 盒子点下事件
		gai.addEventListener('mousedown',() => {
			// 点下获取鼠标位置
			let FirstCilck = event.pageX;
			// 展示图ul的left值
			let BoxLeft = scr.offsetLeft;
			// 鼠标移动事件
			gai.addEventListener('mousemove',MousemoveFun)
			function MousemoveFun() {
				// 首次按下鼠标位置-当前鼠标位置=鼠标移动位置
				const MoveRange = FirstCilck - event.pageX
				// 展示图ul的left值-鼠标移动的值=需要更改的left值
				const Leftnum = BoxLeft - MoveRange 
				// 添加样式
				scr.style.left = Leftnum + 'px';
				// 设置拖动图到最大指定位置回到初始点
				if (Leftnum < minrange) {
					// 初始点	
					scr.style.left = initrange + 'px';
					// 将实时变化的展示图ul的left值更改，以便后续代码使用
					BoxLeft = initrange
					// console.log(BoxLeft)
					// 将现在的鼠标位置作为首次点击的鼠标位置
					// 以便不会出现移动距离过大风险
					FirstCilck = event.pageX
				}
				if (Leftnum > maxrange) {
					// 初始点	
					scr.style.left = initrange + 'px';
					// 将实时变化的展示图ul的left值更改，以便后续代码使用
					BoxLeft = initrange
					// console.log(BoxLeft)
					// 将现在的鼠标位置作为首次点击的鼠标位置
					// 以便不会出现移动距离过大风险
					FirstCilck = event.pageX
				}
			}
			// 鼠标弹起事件
			gai.addEventListener('mouseup',() => {
				gai.removeEventListener('mousemove',MousemoveFun)
			})
			// 鼠标移出盒子事件
			gai.addEventListener('mouseout',() => {
				gai.removeEventListener('mousemove',MousemoveFun)
				return
			})
		})
	}
	// 管理成员展示滚动
	let Cheng_Action = document.querySelector('.Cheng_Cover');
	let Cheng = document.querySelector('.cheng_gundong');
	Scroll_Wrap(Cheng_Action,Cheng,-2067);

	 // 机器展示滚动
	let JiQi_Action = document.querySelector('.JiQi_Cover');
	let JiQi = document.querySelector('.zhan_gundong_jiqi');
	Scroll_Wrap(JiQi_Action,JiQi,-5010,-215,-2610);
	// 建筑展示滚动
	let jianZhu_Action = document.querySelector('.ZhanShi_Cover');
	let JianZhu = document.querySelector('.zhan_gundong_jianzhu');
	Scroll_Wrap(jianZhu_Action,JianZhu,-5010,-215,-2610);

let nav = document.querySelector(".nav")
let nav_zhu = document.querySelector(".nav_zhu")
let nav_bar = document.querySelector(".nav_bar")
function nav_top(window_distance) {
	if (window_distance >= 80) {
		nav.style.backgroundColor = "rgba(0,0,0, .5)";
		nav_zhu.style.marginTop = "16px";
		nav_bar.style.marginTop = "16px";
	} else {
		nav.style.backgroundColor = "rgba(0,0,0,0)";
		nav_zhu.style.marginTop = "35px";
		nav_bar.style.marginTop = "35px";
	}
}
 function keyboard() {
		//屏蔽键盘事件
		document.onkeydown = function (){
			var e = window.event || arguments[0];
			//Ctrl+Shift+I
			if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
				return false;
			//Shift+F10
			}else if((e.shiftKey) && (e.keyCode == 121)){
				return false;
			//Ctrl+U
			}else if((e.ctrlKey) && (e.keyCode == 85)){
				return false;
			}
		};
		//屏蔽鼠标右键
		document.oncontextmenu = function (){
			return false;
		}
		//屏蔽鼠标选中
		document.onselectstart = function (){
			return false;
		}
		// 禁止复制
		document.onbeforecopy = function (){
			return false;
		}
		//禁止拖动
		document.ondragstart = function (){
			return false;
		}
 }
//  联系我们移动样式制作
let cotact_bilibili = document.querySelector('#lianxi_bilibili')
let cotact_qq = document.querySelector('#lianxi_QQ')
function cotact_scroll(window_distance) {
	let cotact_number = 0;
	let range_time;
	if (window_distance >= 3099) {
		let cotact_number = (window_distance - 3096)
	console.log(cotact_number)
		cotact_qq.style.marginLeft = 600 + -cotact_number + "px"
	// console.log(cotact_qq.style.marginLeft)
		cotact_bilibili.style.marginRight = 600 + -cotact_number + "px"
		if (parseInt(cotact_qq.style.marginLeft) <= 212) {
			cotact_qq.style.marginLeft = 213 + "px"
		}	
		if (parseInt(cotact_bilibili.style.marginRight) <= 212) {
			cotact_bilibili.style.marginRight = 213 + "px"
		}
	}
}
// 集体调用实时需要获取滚动距离的函数
window.onscroll = function() {
	let window_distance = document.documentElement.scrollTop;
	cotact_scroll(window_distance)
	nav_top(window_distance)
	keyboard()
}