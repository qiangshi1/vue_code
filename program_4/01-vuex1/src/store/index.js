import Vue from 'vue'
// 0. 导入vuex
import Vuex from 'vuex'

// 1. 安装vuex
Vue.use(Vuex)

// .2 创建vuex store对象
const store=new Vuex.Store({
    state: {
        counter: 1000

    },
    mutations: { //方法
        increment(state) { //默认参数state
            state.counter++;
        },
        decrement(state) { //默认参数state
            state.counter--;
        }
    }
})

// 3. 导出store
export default store