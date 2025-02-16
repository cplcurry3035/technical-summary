$(function () {
    checkbrowse();
});

function checkbrowse() {
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息  
                MicroMessenger: u.indexOf('MicroMessenger') > -1, //微信浏览器  
                trident: u.indexOf('Trident') > -1, //IE内核  
                presto: u.indexOf('Presto') > -1, //opera内核  
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端  
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器  
                iPad: u.indexOf('iPad') > -1, //是否iPad  
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    if (browser.versions.MicroMessenger) {
        if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad)
            $("#live_weixin").attr("src", "static/live_weixin_tosafari.png");
        else
            $("#live_weixin").attr("src", "static/live_weixin.png");
        $(".weixin-tip").show();
    }
    else if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
        // TODO 此处写ios的下载地址
        window.location =  
    }
    else if (browser.versions.android) {
        // 此处写Andoird 的下载地址
        window.location =  
    }
    else {
        $(".openbrowse").hide();
        $("#qrcodediv").show();
    }
}