# 用vue-cli3(以上)创建项目

```
vue create vueclitest_3
```

## 配置node依赖

1. `vue ui`
`vue ui` 还可以做更多的工作

3. 找到隐藏目录修改
并非免配置, 而是配置隐藏了.

2. 创建vue.config.js文件

## 其他

1. 箭头函数的基本写法(ES6语法)
```js
const obj={
    bbb function(参数列表){
        xxx;
        yyy;
    }
    bbb(参数列表){
        xxx;
        yyy;
    }
    // 箭头函数和上边的意思是一样的
    bbb = (参数列表) => {
        xxx;
        yyy;
    }
    //如果是一个参数的话, 小括号可以省略
    bbb = 参数列表 => {
        xxx;
        yyy;
    }
    //如果函数体里边是一行代码的话, 可以写成下边的
    bbb = 参数列表 => xxx;
}
```

2. 箭头函数的this
```js
const obj={ 
    // 这两个打印的是不一样的
    // this会一层层向外查找
    bbb = (参数列表) => {
        console.log(this); 
    }
    bbb = 参数列表 => console.log(this);
}
```
然而还是不太懂