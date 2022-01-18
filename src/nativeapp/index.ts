/*
 * @Author: fengtingting
 * @Date: 2022-01-14 14:11:41
 * @LastEditTime: 2022-01-17 17:13:35
 * @LastEditors: fengtingting
 */
import {BeiqiAppEnv,BeiqiAndroidEnv,BeiqiIOSEnv,StandardAndroidEnv,StandardIOSEnv} from '../utils';
import {NATIVE_OPEN_APP} from '../static';
import { NativeParams,ShareNativeParams} from './NativeBridge';
/**
 * 调用app原生方法
 * @param apiName 方法名
 * @param params  参数
 */
function callNativeAPI(apiName:string,params:any):void{
    console.log('callNativeAPI',apiName,params);
    try {
        if(BeiqiAndroidEnv){
            if((window as any)['CallNative']){
                params = (typeof params === 'object')? JSON.stringify(params):params;//参数转化为JSON字符串
                (window as any)['CallNative'][apiName](params);//调用绑定在window上的原生app的方法
            }
        } else if(BeiqiIOSEnv){
            // WKWebView
            (window as any)['webkit']['messageHandlers']&&(window as any)['webkit']['messageHandlers'][apiName].postMessage(params);
        }
    } catch (error) {
        console.log('catch',error)
    }
}
/**
 * OPENAPP协议，打开APP原生页或者唤醒app
 * @param params 
 */
function openApp(params:any):void{
    const _params = JSON.stringify(params);
    const path = NATIVE_OPEN_APP+encodeURIComponent(_params);
    console.log('openApp');
    if(BeiqiAppEnv){
        location.assign(path);
    } else if(StandardAndroidEnv){
        const iframe = document.createElement('div');
        iframe.style.visibility = 'hidden';
        iframe.innerHTML = 
        `<iframe src=${path} scrolling="no" width="1" height="1"></iframe>`;
        document.body.appendChild(iframe);
        setTimeout(function(){
            console.log('openApp','timeout');
        },1200)
    } else if(StandardIOSEnv){
        setTimeout(() => {
            const a = document.createElement('a');
            a.setAttribute('href',path);
            a.style.display = 'none';
            document.body.appendChild(a);
            const e = document.createEvent('HTMLEvents');
            e.initEvent('click', !1,!1);
            a.dispatchEvent(e);
        }, 0);
    }
}
/**
 * 通过webview的方式唤起
 * @param url 
 */
function openAppM(url:string):void{
    const params:NativeParams = {
        category: 'jump',
        des: 'webview',
        m: url,
    }
    openApp(params)
}
/**
 * 打开App商品详情页
 * @param skuId 
 */
function openAppProduct(skuId:string|number):void {
    const params:NativeParams = {
        category: 'jump',
        des: 'skudetail',
        skuId: skuId,
      }
      openApp(params)
}
/**
 * 打开APP店铺
 * @param skuId
 */
function openAppShop(shopId:string|number):void {
    const params:NativeParams = {
      category: 'jump',
      des: 'shop',
      shopId: shopId,
    }
    openApp(params)
  }
  
  /**
   * 打开APP售后
   * @param orderId
   */
  function openAppAfterSale() {
    const params:NativeParams = {
      category: 'jump',
      des: 'aftersale'
    }
    openApp(params)
  }

  /**
 * 打开APP评价
 * @param orderId
 * @param skuId
 */
function openAppEvaluate(orderId:string|number, skuId:string|number):void {
    const params:NativeParams = {
      category: 'jump',
      des: 'evaluate',
      orderId: orderId,
      skuId: skuId,
    }
    openApp(params)
}

/**
 * 打开购物车
 */
function openCart() {
    const params:NativeParams = {
      category: 'jump',
      des: 'shoppingcart'
    }
    openApp(params);
  }
  
  /**
   * 打开搜索
   */
  function openSearch(keyword:string):void {
    const params:NativeParams = {
      category: 'jump',
      des: 'search',
      keyword: keyword
    };
    openApp(params);
  }
/**
 * 打开登陆
 */
function openPassport() {
    const params:NativeParams = {
      category: 'jump',
      des: 'login'
    }
    openApp(params);
  }

/**
 * 唤起APP的原生分享
 * @param params
 * @param {string} title   标题
 * @param {string} content 正文内容
 * @param {string} pic 图片链接
 * @param {string} url 页面url
 * @param {string} posterImageUrl: posterImageUrl, //海报背景链接
 */
function sharePage(params:any) {
  if (params == null) return;
  const { title, content, pic, url, posterImageUrl} = params
  const shareParams:ShareNativeParams = {
    shareTitle: title,
    shareDesc: content,
    shareImgUrl: pic,
    shareChannels: ['wechat', 'copyLink','sharePoster'],//为空都展示
    shareUrl: url,
    //小程序信息
    miniProgram: {
      disableforward: 0,
      miniprogramType: 2,
      userName: 'gh_913d6eac8618',
      path: '/src/packages/webview/index?targetUrl=' + encodeURIComponent(url),
      webpageUrl: url,
    },
    //海报信息
    posterInfo: {
      style: 0, //(0:表示活动页/看车/发现 1：表示商品详情，2：表示店铺)，为空则展示活动页样式，
      posterImageUrl: posterImageUrl, //海报背景链接
      // posterUrl: url, // 海报链接
    }
  }
  callNativeAPI('share', shareParams)
}
  

/**
 * 设置APP顶部title
 * @param title
 */
function setTitle(title:string) {
    callNativeAPI('setTitle', title)
  }
  
function phoneCall(number:number|string) {
    callNativeAPI('phoneCall', number)
}
/**
 * 回到上一页
 */
function goBack() {
    const params:NativeParams = {
        category: 'jump',
        des: 'goback'
    }
    openApp(params);
}


export  default{
    openAppM,
    openAppProduct,
    openAppShop,
    openAppAfterSale,
    openAppEvaluate,
    openPassport,
    openCart,
    openSearch,
    sharePage,
    setTitle,
    phoneCall,
    goBack

}
