/*
 * @Author: fengtingting
 * @Date: 2022-01-14 14:03:13
 * @LastEditTime: 2022-01-18 10:13:00
 * @LastEditors: fengtingting
 */
import native from './nativeapp';
import wxapp from './wxapp';
import {PLATFORM} from './static';
import {BeiqiAppEnv,BeiqiAndroidEnv,BeiqiIOSEnv,StandardAndroidEnv,StandardIOSEnv, WxEnv} from './utils';


//当前h5页面所在平台
let platform:string = null;

//获取当前平台环境
function getPlatForm() {
    return new Promise((resolve:any) => {
        if(platform) {
            console.log('platform',platform);
            return resolve(platform);
        }
        //北汽app
        if(BeiqiAppEnv){
            platform = PLATFORM.APP;
            console.log('platform',platform);
            return resolve(platform);
        }
        //微信环境
        if(WxEnv){
            if ((window as any).__wxjs_environment === "miniprogram") {
                platform = PLATFORM.WX_MINI;
                resolve(PLATFORM.WX_MINI);
            } else {
                wxapp.getWxEnv((res:any)=>{
                    platform = res.miniprogram?PLATFORM.WX_MINI:PLATFORM.WX_H5;
                    console.log('platform',platform);
                    resolve(platform)
                })
            }
        }else {
            platform = PLATFORM.H5;
            console.log('platform',platform);
            resolve(platform);
        }
    })
}

//1.h5调用原生app方法
/**
 * 设置原生app title
 * @param title 
 */
function setAppTitle(title:string){
    getPlatForm().then((platform:string)=>{
        if(platform === PLATFORM.APP) {
            native.setTitle(title)
        }
    })
}

/**
 * 原生app分享
 * @param params 
 */
function shareAppPage(params:any) {
    getPlatForm().then((platform:string)=>{
        if(platform === PLATFORM.APP){
            native.sharePage(params)
        }
    })
}

/**
 * 原生app分享海报
 * @param params 
 */
function sharePosterAppPage(params:any) {
    getPlatForm().then((platform:string)=>{
        if(platform === PLATFORM.APP){
            native.sharePage(params)
        }
    })
}

/**
 * 原生app打电话
 * @param number 电话号码
 */
function makeAppPhoneCall(number:number|string){
    getPlatForm().then((platform:string)=>{
        if(platform === PLATFORM.APP){
            native.phoneCall(number)
        }
    })
}

//2.h5调用小程序方法
/**
 * 设置小程序分享内容
 * @param params 
 */
function setWxShareContent(params:any) {
    wxapp.sharePage(params)
}

/**
 * 支持嵌入到小程序里的H5页面通过小程序进行微信支付
 * @param {*} orderId
 */
function openWxPay(orderId:number|string){
    getPlatForm().then((platform:string)=>{
        if(platform === PLATFORM.WX_MINI){
            wxapp.openWxPay(orderId);
        }
    })
}

//3.小程序和原生app共同调用方法
/**
 * 跳转小程序|app商品详情页
 * @param skuId 
 */
function openProduct(skuId:number|string){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.openAppProduct(skuId);
                break;
            case PLATFORM.WX_MINI:
                wxapp.openWxProduct(skuId);
                break;
            default:
                native.openAppProduct(skuId);
                break;
        }
    })
}

/**
 * 跳转APP/小程序店铺详情页面
 * @param {number|string} shopId 店铺shopId
 */
function openShop(shopId:number|string){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.openAppShop(shopId);
                break;
            case PLATFORM.WX_MINI:
                wxapp.openWxShop(shopId);
                break;
            default:
                native.openAppShop(shopId);
                break;
        }
    })
}

/**
 * 跳转APP/小程序售后页
 */
function openAfterSale(){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.openAppAfterSale();
                break;
            case PLATFORM.WX_MINI:
                wxapp.openWxAferSale();
                break;
            default:
                native.openAppAfterSale();
                break;
        }
    })
}

/**
 * 打开评价
 * @param orderId 
 * @param skuId 
 */
function openEvaluate(orderId:number|string, skuId:number|string){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.openAppEvaluate(orderId, skuId);
                break;
            case PLATFORM.WX_MINI:
                wxapp.openWxEvaluate(orderId, skuId);
                break;
            default:
                native.openAppEvaluate(orderId, skuId);
                break;
        }
    })
}

/**
 * 打开购物车
 */
function openCart(){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.openCart();
                break;
            case PLATFORM.WX_MINI:
                wxapp.openCart();
                break;
            default:
                native.openCart();
                break;
        }
    })
}

/**
 * 打开搜索页
 */
function openSearch(keywords:any){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.openSearch(keywords);
                break;
            case PLATFORM.WX_MINI:
                wxapp.openSearch(keywords);
                break;
            default:
                native.openSearch(keywords);
                break;
        }
    })
}

/**
 * 打开登录页
 */
function openPassport(){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.openPassport();
                break;
            case PLATFORM.WX_MINI:
                wxapp.openPassport();
                break;
            default:
                native.openPassport();
                break;
        }
    })
}

/**
 * 返回上一页
 */
function goBack(){
    getPlatForm().then((platform:string)=>{
        switch (platform) {
            case PLATFORM.APP:
                native.goBack();
                break;
            case PLATFORM.WX_MINI:
                wxapp.goBack();
                break;
            default:
                native.goBack();
                break;
        }
    })
}

/**
 * 支持站外H5唤起app再打开当前H5
 * @param {*} url
 */
// function openAppH5FromOutsite(url:string) {
//     getPlatForm().then(function (platform) {
//       if (platform === PLATFORM.H5) {
//         // 尝试唤醒APP
//         native.openAppM(url);
//       }
//     })



export default {
    getPlatForm,

    //nativeapp
    setAppTitle,
    shareAppPage,
    sharePosterAppPage,
    makeAppPhoneCall,

    //wxapp
    setWxShareContent,
    openWxPay,

    //common
    openProduct,
    openShop,
    openAfterSale,
    openEvaluate,
    openCart,
    openSearch,
    openPassport,
    goBack,
    
    //normal h5
    // openAppH5FromOutsite,

}