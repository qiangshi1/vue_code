import Vue from 'vue'
// 0. 导入vuex
import Vuex from 'vuex'

// 1. 安装vuex
Vue.use(Vuex)

// .2 创建vuex store对象
const store=new Vuex.Store({
    state: {
        counter: 1000,
        sporters: {
            name: 'zhangsan',
            age: 18,
            gender: 'female'
        },
        sporters2: [
            {
                name: 'wangwu',
                age: 29,
                gender: 'male'
            },
            {
                name: 'sunfei',
                age: 32,
                gender: 'female'
            },
        ],
        info: {
            name: 'ACC',
            data: '20220220'
        }

    },
    mutations: { //方法
        increment(state) { //默认参数state
            state.counter++;
        },
        decrement(state) { //默认参数state
            state.counter--;
        },
        incrementCount(state, count) { //默认参数state
            state.counter+=count;
        },
        changeSporters(state) { 
            state.sporters.name='lisi'
            console.log(state.sporters);
        },
        detailSportersInvalid(state) { 
            state.sporters['address']='beijing'
            console.log(state.sporters);
        },
        detailSportersValid(state) { 
            Vue.set(state.sporters, 'address', 'nanjing');
            // Vue.delete(state.sporters, 'address', 'nanjing'); 删除响应式
            console.log(state.sporters);
        },
        addSporters2(state) { 
            state.sporters2.push({name: 'zhouzhou', age: 22, gender: 'male'});
        },
        updateInfo(state) { 
            state.info.name='FIB';
        }
        

    },
    actions: {
        actionUpdateInfo(context){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    context.commit('updateInfo')
                }, 1000),
                resolve('actionUpdateInfo in index.js: ')
            })
        }
    },
    getters: {
        powerCounter(state){
            return state.counter*state.counter;
        },
        powerPowerCounter(state, getters){
            // return state;
            return state.counter*getters.powerCounter;
        }
    },
    modules: {
        m: {
            state: {
                m_notebook: [
                    'lenovo',
                    'dell'
                ]
            },
            getters: {
                // rootState不能直接调用父对象的state 但可以调用父对象的getters 这个好像和老师演示得不一样
                m_getAllNotebook(state, rootState){
                    // console.log(rootState);
                    return state.m_notebook[0]+' '+state.m_notebook[1]+' '+rootState.powerCounter;
                }
            }
        }
    }
})

// 3. 导出store
export default store