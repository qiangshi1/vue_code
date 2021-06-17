// 首页的网络请求, 相当于对axios再做了一层封装

import {request} from "./request" //注意不要倒入成了全局变量

export function getHomeMultiData(){
    return request({url:'/res',})
}

export function getHomeGoods(type, page){
    // 这里我用的是json-server服务器, 没有做到像老师那样的添加params的效果, 我是把type和page拼接到url中去的
    return request({url:'/goods'+'-'+type+'-'+page,})
}