	// 鼠标拖动展示封装
	
	// 传入参数  拖动图上面防止误触的覆盖盒子  拖动图的ul盒子  最大截至地方
	function Scroll_Wrap(gai, scr, maxstopleft) {
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
				if (Leftnum < maxstopleft) {
					// 初始点
					scr.style.left = parseFloat(init) + 'px';
					// 将实时变化的展示图ul的left值更改，以便后续代码使用
					BoxLeft = parseFloat(init)
					// 将现在的鼠标位置作为首次点击的鼠标位置
					// 以便不会出现移动距离过大风险
					FirstCilck = event.pageX
				}
				// 设置拖动图到最小指定位置回到最截止点
				// 要留活动空间所以需要+20px作为活动区域
				if (Leftnum > parseFloat(init) + 20) {
					// 截至点
					scr.style.left = maxstopleft + 20 + 'px';
					// 将实时变化的展示图ul的left值更改，以便后续代码使用
					BoxLeft = maxstopleft + 20
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
	Scroll_Wrap(Cheng_Action,Cheng,-1720);
	 // 机器展示滚动
	let JiQi_Action = document.querySelector('.JiQi_Cover');
	let JiQi = document.querySelector('.zhan_gundong_jiqi');
	Scroll_Wrap(JiQi_Action,JiQi,-2610);
	// 建筑展示滚动
	let jianZhu_Action = document.querySelector('.ZhanShi_Cover');
	let JianZhu = document.querySelector('.zhan_gundong_jianzhu');
	Scroll_Wrap(jianZhu_Action,JianZhu,-2610);
	
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
