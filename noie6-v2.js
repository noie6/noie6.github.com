
function showforie6(){
	var str="\
	<div style='width:660px;margin:0px auto;text-align:center;height:50px;overflow:hidden'>\
		<div style='float:left;color:#333333;padding:5px 10px 0px 10px;line-height:23px;background:#CCFF99'>\
			<div style='font-size:16px;font-weight:bold;'>\
				������ʹ�õ�������汾���ͣ�\
			</div>\
			<div style='font-size:14px'>\
				��վ�ݲ�֧������������������ظ��°汾�������\
			</div>\
		</div>\
		<div style='float: left;height:100%;background:#99CC33; padding:16px;'>\
			 <a style='text-decoration:none;font-size:20px;color:#333366'\	href='http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie-8' target='_blank'>\
			�����°汾IE�����\
			</a>\
		</div>\
		<div style='float:right;margin:10px;'\
		onclick="+"\"javascript:this.parentNode.style.display='none'; return false;"+"\"><a href='#'>�ر�</a>\
		</div>\
	</div>";
	var bodyElement = document.body;
	bodyElement.innerHTML = str + bodyElement.innerHTML;
}
setTimeout(showforie6,1000);