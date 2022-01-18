/*
 * @Author: fengtingting
 * @Date: 2022-01-14 16:55:38
 * @LastEditTime: 2022-01-17 16:20:35
 * @LastEditors: fengtingting
 */
declare type Category = 'jump';
declare type Dec = 'webview'|'skudetail'|'shop'|'aftersale'|'evaluate'|'shoppingcart'|'search'|'login'|'goback';
declare type Style = 0|1|2;
declare type Channel = 'wechat'|'copyLink'|'sharePoster'

export interface NativeParams {
    category:Category,//分类
    des:Dec, //描述
    skuId?:string|number,
    shopId?:string|number, //店铺id
    orderId?:string|number, //订单号
    keyword?:string, //搜索关键字
    m?:string, //webview内嵌的url

}
export interface ShareNativeParams {
    shareTitle: string,
    shareDesc: string,
    shareImgUrl: string,
    shareChannels: Array<Channel>,//为空都展示
    shareUrl: string,
    //小程序信息
    miniProgram: {
      disableforward: number,
      miniprogramType: number,
      userName:string,
      path: string,
      webpageUrl: string,
    },
    //海报信息
    posterInfo?: {
      style: Style, //(0:表示活动页/看车/发现 1：表示商品详情，2：表示店铺)，为空则展示活动页样式，
      posterImageUrl: string, //海报背景链接
    }
}
//定义原生类调用方法
// declare class NativeBridge {
//     constructor();
//     callNativeAPI(api)

// }

