	// 鼠标拖动展示封装
	function Scroll_Wrap(gai, scr) {
		// 盒子点下事件
		gai.addEventListener('mousedown',() => {
			// 点下获取鼠标位置
			let FirstCilck = event.pageX
			// 展示图ul的left值
			let BoxLeft = scr.offsetLeft
			// 鼠标移动事件
			gai.addEventListener('mousemove',MousemoveFun)
			function MousemoveFun() {
				// 首次按下鼠标位置-当前鼠标位置=鼠标移动位置
				const MoveRange = FirstCilck - event.pageX
				// 展示图ul的left值-鼠标移动的值=需要更改的left值
				const Leftnum = BoxLeft - MoveRange
				console.log(BoxLeft)
				scr.style.left = Leftnum + 'px';
				if (scr.style.left === "-1808px") {
					scr.style.left = 0 + 'px';
					BoxLeft = 0
					FirstCilck = event.pageX
				}
			}
			// 鼠标弹起事件
			gai.addEventListener('mouseup',JianZhuKillFun)
			// 鼠标移出盒子事件
			gai.addEventListener('mouseleave',JianZhuKillFun)
			// 移除鼠标移动事件封装
			function JianZhuKillFun() {
				gai.removeEventListener('mousemove',MousemoveFun)
			}
		})
	}
	// 管理成员展示滚动
	let Cheng_Action = document.querySelector('.Cheng_Cover');
	let Cheng = document.querySelector('.cheng_gundong');
	Scroll_Wrap(Cheng_Action,Cheng);
	
	 // 机器展示滚动
	let JiQi_Action = document.querySelector('.JiQi_Cover');
	let JiQi = document.querySelector('.zhan_gundong_jiqi');
	Scroll_Wrap(JiQi_Action,JiQi);
	// 建筑展示滚动
	let jianZhu_Action = document.querySelector('.ZhanShi_Cover');
	let JianZhu = document.querySelector('.zhan_gundong_jianzhu');
	Scroll_Wrap(jianZhu_Action,JianZhu);
	
	const But_popup = () => {
		// 点击英语弹出敬请期待
		const Ick = document.querySelector('.click');
		Ick.onclick = function () {
			alert("敬请期待昂！");
		}
		//点击论坛弹出敬请期待
		const Forum = document.querySelector('.forum');
		Forum.onclick = function () {
			alert("是的,我是鸽子,我咕咕咕了;什么?敬请期待,不存在的。");
		};
	}
	But_popup()
