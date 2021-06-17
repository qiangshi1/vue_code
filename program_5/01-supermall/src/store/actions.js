export const addCart=(context, payload) =>{
    return new Promise((resolve) => {
      // console.log(payload);
      if (context.state.cartList.length === 0) {
        context.commit('addToCart', payload);
        let str = '增加新商品' + payload.iid;
        resolve(str);
      } else {
        // 这里也可以写find函数. 
        let find = false;
        for (let item of context.state.cartList) {
          if (item.iid === payload.iid) {
            //   console.log(item.iid);
            context.commit('addCounter', item);
            let str = '商品 ' + item.iid + ' 数量加1';
            resolve(str);
            find = true;
            break;
          }
        }
        if (find === false) {
          context.commit('addToCart', payload);
          let str = '增加新商品' + payload.iid;
          resolve(str);
        }
      }
    })
  }