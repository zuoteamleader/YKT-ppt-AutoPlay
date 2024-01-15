// ==UserScript==
// @name       【雨课堂】自动看ppt
// @version      2.2
// @namespace    自动看ppt
// @description  支持【雨课堂】自动看ppt
// @author       ZTL
// @match        *.yuketang.cn/pro/yktmanage/*
// @match        *.yuketang.cn/v2/web/studentCards/*
// @match        *://www.yuketang.cn/v2/web/studentCards/*
// @icon         https://www.yuketang.cn/static/images/favicon.ico
// @grant        GM_registerMenuCommand
// @grant	 GM_unregisterMenuCommand
// @license      CC BY-NC-SA 4.0
// @grant        GM_getValue
// ==/UserScript==

(function() {
  'use strict';

	Object.defineProperty(document, 'visibilityState', { get: function() { return 'visible' } });

  GM_registerMenuCommand('设置', () => {
    let interval = parseInt(prompt("输入间隔的时间（s）（建议不低于5s）：", "5"));
    GM_setValue('interval', interval);
  });

  // 定义一个递归函数代替循环，用于模拟向下按键事件
  function simulateKeyDown() {
      setTimeout(function() {
        let e = new Event("keydown"); // 创建一个键盘按下事件
        e.keyCode = 40; // 设置键码为向下箭头键
        document.dispatchEvent(e); // 触发事件
        simulateKeyDown(); // 递归调用函数，实现无限循环
      }, GM_getValue('interval', 5) * 1000); // 每次间隔interval秒
  }

  simulateKeyDown(); //开始模拟向下按键事件的操作
})();
