/*
 * @Author: fengtingting
 * @Date: 2022-01-14 14:06:50
 * @LastEditTime: 2022-01-17 13:58:20
 * @LastEditors: fengtingting
 */
//判断当前环境
function getCurrentEnv(exp: string): boolean {
  let reg = new RegExp(exp, "g");
  return reg.test(navigator.userAgent);
}

function getVisitUrl(url: string, id?: number | string) {
  return;
}
//本地环境
const BeiqiAppEnv: boolean = getCurrentEnv("bqapp"); //北汽app
const BeiqiAndroidEnv: boolean = getCurrentEnv("android"); //北汽app 安卓
const BeiqiIOSEnv: boolean = getCurrentEnv("iPhone"); //北汽app ios
const StandardAndroidEnv: boolean = getCurrentEnv("(Android);?[s/]+([d.]+)?"); //普通android设备
const StandardIOSEnv = getCurrentEnv("(iPhonesOS)s([d_]+)"); //普通ios设备
const WxEnv = getCurrentEnv("micromessenger"); //微信环境

export {
  getCurrentEnv,
  getVisitUrl,
  BeiqiAppEnv,
  BeiqiAndroidEnv,
  BeiqiIOSEnv,
  StandardAndroidEnv,
  StandardIOSEnv,
  WxEnv,
};
