import {
  request
} from "./request"

export function getDetail(id) {
  // 这里我用的是json-server服务器, 和老师的服务器接口有区别. 
  return request({
    url: id
  })
}

export class Goods {
  constructor(goods) {
    this.title = goods[0];
    this.discount = goods[1];
    this.newPrice = goods[2];
    this.oldPrice = goods[3];
    this.columns = [];
    this.columns.push(goods[4]);
    this.columns.push(goods[5]);
    this.services = [];
    this.services.push(goods[6].services[0]);
    this.services.push(goods[6].services[1]);
    this.services.push(goods[6].services[2]);
    this.services.push(goods[6].services[3]);
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(paramInfo) {
    this.sizes = paramInfo.sizes;
    this.infos = paramInfo.infos;
    this.image = paramInfo.image;
  }
}

export function getRecommand(type, page){
  return request({url:'/goods'+'-'+type+'-'+page,})
}