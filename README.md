<!--
 * @Author: fengtingting
 * @Date: 2022-01-14 13:54:10
 * @LastEditTime: 2022-01-19 09:23:46
 * @LastEditors: fengtingting
-->
## 小程序和app内嵌H5 sdk

## 背景
sdk开发主要解决h5嵌入到小程序和原生APP中的交互，本插件主要是赋能商业化项目，

## 项目结构
root
--|
  |-- dist 发布文件
  |-- src
     |-- index.ts 入口文件
     |-- nativeapp h5在原生app交互接口
     |-- wxapp h5在微信小程序交互接口
     |-- utils 
     |-- static 静态变量文件
  |-- package.json
  |-- tsconfig.json ts配置文件

```

## 打包发布
* 打包: `npm run build`
* 登录: `jnpm: npm login `
* 版本升级:`npm run version`
* 发布: `npm run release`

## 本地调试
`npm link`