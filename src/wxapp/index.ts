/*
 * @Author: fengtingting
 * @Date: 2022-01-14 14:11:22
 * @LastEditTime: 2022-01-17 18:43:31
 * @LastEditors: fengtingting
 */

import {WX_URL} from '../static';
const wx = require("weixin-js-sdk");

/**
 * 打开商品详情页
 * @param skuId 
 */
function openWxProduct(skuId: number | string) {
    const url = `${WX_URL}?skuId=${skuId}`;
    console.log("wx openWxProduct", url);
    wx.miniProgram.navigateTo({
        url:url
    })
}

/**
 * 打开店铺页
 * @param venderId 
 */
function openWxShop(venderId: number | string) {
    const url = `${WX_URL.SHOP}?venderId=${venderId}`;
    console.log("wx openWxShop", url);
    wx.miniProgram.navigateTo({
        url:url
    })
}

/**
 * 打开看车页
 * @param seriesId 
 */
function openWxViewCar(seriesId: number | string) {
    const url = `${WX_URL.VIEWCAR}?seriesId=${seriesId}`;
    console.log("wx openWxViewCar", url);
    wx.miniProgram.navigateTo({
        url: url,
    });
}

/**
 * 在小程序中打开H5页面，通过webview的方式嵌入
 * @param url 
 */
function openWxH5(url: string) {
    const _url = `${WX_URL.WEBVIEW}?targetUrl=${encodeURIComponent(url)}`
    console.log("wx openWxH5", _url);
    wx.miniProgram.navigateTo({
        url:_url
    })
}

/**
 * 打开售后
 */
function openWxAferSale() {
    console.log("wx openWxAfterSale", WX_URL.AFTERSALE);
    wx.miniProgram.navigateTo({
        url:WX_URL.AFTERSALE
    })
}

/**
 * 打开评价
 * @param {*} orderId
 * @param {*} skuId
 */
function openWxEvaluate(orderId:number|string,skuId:number|string){
    const url = `${WX_URL.EVALUATE}?orderId=${orderId}&skuId=${skuId}`;
    console.log("wx openWxEvaluate", url);
    wx.miniProgram.navigateTo({
        url:url
    })
}

/**
 * h5打开小程序的微信支付
 * @param {*} orderId
 */
function openWxPay(orderId:number|string) {
    const url = `${WX_URL.PAY}?orderId=${orderId}&from=h5`;
    console.log('wx openWxPay',url);
    wx.miniProgram.navigateTo({
        url:url
    })
}

/**
 * 打开小程序购物车
 */
function openCart(){
    console.log('wx openCart',WX_URL.CART);
    wx.miniProgram.navigateTo({
        url:WX_URL.CART
    })
}

/**
 * 打开搜索结果页
 * @param keywords 
 */
function openSearch(keywords:any){
    const url = `${WX_URL.SEARCH}?keywords=${encodeURIComponent(keywords)}&from=h5`
    console.log('wx openSearch',url);
    wx.miniProgram.navigateTo({
        url:url
    })
}

/**
 * 打开登陆
 */
function openPassport() {
    console.log('wx openPassport',WX_URL.LOGIN);
    wx.miniProgram.navigateTo({
        url:WX_URL.LOGIN
    })
}

/**
 * 向小程序发送分享的内容
 * @param {string} title   标题
 * @param {string} pic 图片链接
 * @param {string} url 页面url
 */
function sharePage(param:any) {
    if(!param){
        wx.miniProgram.postMessage({data:null})
        return;
    }
    const {title, pic, url} = param;
    console.log('wx sharePage',param);
    wx.miniProgram.postMessage({
        data:{
            shareTitle: title,
            sharePicUrl: pic,
            shareUrl: url,
        }
    })
}

/**
 * 获取当前微信环境，小程序还是微信浏览器
 * @param cb 回调函数
 */
 function getWxEnv(cb:any){
    wx.miniProgram.getEnv(cb);
 }
/**
 * 小程序web-view可以调用的js-sdk的方法说明
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */
function goBack() {
    wx.miniProgram.navigateBack();
}

export default {
    openWxProduct,
    openWxShop,
    openWxViewCar,
    openWxH5,
    openWxAferSale,
    openWxEvaluate,
    openWxPay,
    openCart,
    openSearch,
    openPassport,
    sharePage,
    getWxEnv,
    goBack,


}