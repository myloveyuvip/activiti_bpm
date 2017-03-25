var msg = {
        alert : function(msg) {
            layer.msg(msg, {
                icon : 6,
                time : 2000
            })
        },
        warn : function(msg) {
            layer.msg(msg, {
                icon : 7,
                time : 2000
            })
        },
        error : function(msg) {
            layer.msg(msg, {
                icon : 5,
                time : 2000
            })
        },
        load : function(closeLoad) {
            if (closeLoad) {
                layer.closeAll('loading');
            } else {
                layer.load();
            }
        },
        tips : function(msg, target) {
            return layer.tips(msg, target, {
                time : 60000,
                tips : [ 2, '#ddd' ]
            })
        },
        confirm : function(msg,callback){
            return layer.confirm(msg,{icon:3,title:"确认信息"},callback);
        }
};

//验证模块
var Valid = {
        isNotNull : function(selector, flag){
            var $el = $(selector);
            if(!$el.val()){
                $el.parents(".form-group").addClass("has-error").find(".error-msg").text("不可为空");
                flag = false;
            }
            return flag;
        },
        error : function(selector, msg){
            $(selector).parents(".form-group").addClass("has-error").find(".error-msg").text(msg);
        }
}

		//子页面函数
		function OpenNewIframe (url,text) {
		    window.parent.ChildOpenIframe(url, text)
		}


//手机号验证
var isMobile = function(gets){
	if(/^1[345678]\d{9}$/.test(gets)){
		return true;
	}
	return false;
}

//分数验证
var isScore = function(gets){
	if(/^\d*(\.\d{1})?$/.test(gets)){
		return true;
	}
	return false;
}
require(['jquery'], function(){
	return true;
	var number = /[0-9]?/
	//添加标签属性--实现只能输入有效的整型数字非0打头
	$("[number-type='int']").keydown(function(event){
		if ($(this).val() && $(this).val() === "0" && event.keyCode < 106 && event.keyCode > 95) {
			$(this).val(event.key);
			return false;
		}
		//有效输入
		if (event.keyCode < 106 && event.keyCode > 95) {
			return true;
		}
		//删除键输入
		if (event.keyCode == 8) {
			return true;
		}
		return false;
	})
	
	//添加标签属性--实现只能输入有效的浮点型数字非0打头
	$("[number-type='double']").keydown(function(event){
		//第一个数字为0的时候直接替换
		if ($(this).val() && $(this).val() === "0" && event.keyCode < 106 && event.keyCode > 95) {
			$(this).val(event.key);
			return false;
		} 
		if (!$(this).val() && event.keyCode == 110) {
			$(this).val("0" + event.key);
			$(this).attr("double",true);
			return false;
		} 
		//有效输入
		if (event.keyCode < 106 && event.keyCode > 95) {
			return true;
		}
		if (!$(this).attr("double") && event.keyCode == 110) {
			$(this).attr("double",true);
			return true;
		}
		if (event.keyCode == 8) {
			if (number.test($(this).val())) {
				$(this).removeAttr("double");
			}
			return true;
		}
		return false;
	})
})

/**
 * 日期格式化
 *
 * @param date
 * @param fmt
 */
Date.prototype.Format = function (fmt) {
	// 日期格式化
	var o = {
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"h+": this.getHours(), // hour
		"m+": this.getMinutes(), // minute
		"s+": this.getSeconds(), // second
		"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
		"S": this.getMilliseconds()
		// millisecond
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}