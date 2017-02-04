window.onresize = doLayout;

onload = function () {
    var webview = document.querySelector('webview');
    webview.addEventListener(
        'loadcommit',
        function (e) { return injectCss(e); });
    webview.addEventListener(
        'loadstop',
        function (e) { return injectCss(e); });

    doLayout();
    webview.focus();

}

/**
 * 更新webview的高宽
 */
function doLayout() {
    var webview = document.querySelector('webview');
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var webviewWidth = windowWidth;
    var webviewHeight = windowHeight;

    webview.style.width = webviewWidth + 'px';
    webview.style.height = webviewHeight + 'px';
}

/**
 * 注入自定义css样式，让微信聊天窗口铺满
 */
function injectCss(e) {
    var webview = document.querySelector('webview');
    webview.insertCSS({ 'file': 'wechat-inject.css', runAt: 'document_start' });
}