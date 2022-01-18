/*
 * @Author: fengtingting
 * @Date: 2022-01-14 16:19:42
 * @LastEditTime: 2022-01-17 16:23:08
 * @LastEditors: fengtingting
 */
//北汽原生app打开地址
const NATIVE_OPEN_APP = 'openapp.bqapp://virtual?params=';

//微信小程序页url地址
const WX_URL = {
    PRODUCT:'/src/packages/product/index',
    SHOP:'/src/packages/shop/index',
    VIEWCAR:'/src/packages/viewCar/index',
    WEBVIEW:'/src/packages/webview/index',
    AFTERSALE:'/src/packages/afterSale/index?tab=APPLY',
    EVALUATE:'/src/packages/comment/userComment/index',
    PAY:'/src/packages/pay/payH5/index',
    CART:'/src/packages/main/cart/cartNoTab/index?tab=false',
    SEARCH:'/src/packages/search/index',
    LOGIN:'/src/packages/passport/index?from=h5',
}

const PLATFORM = {
    APP: 'APP', // 北汽APP
    WX_MINI: 'WX_MINI', //微信小程序
    WX_H5: 'WX_H5', // 微信内的H5
    H5: 'H5', // 普通H5
}

export {
    NATIVE_OPEN_APP,
    WX_URL,
    PLATFORM
}