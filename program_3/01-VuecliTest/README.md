vue-cli初体验

# vue-cli

## 安装vue-cli

```
npm install -g @vue/cli
```

这是全局安装. 当然如果你想卸载旧版本, 可以输入:

```
npm uninstall -g @vue/cli
```

或者输入:

```
npm uninstall vue-cli -g
```

查看vue-cli版本的方法:

```
vue -V
```


## vue-cli3以上使用vue-cli2:


```
npm install -g @vue/cli-init
```

## 用vue-cli创建项目:

```
vue init webpack vuecli2test_1
```

## 对于vscode来说, 代码格式检查可以试试editorconfig插件


## 项目初始化时勾选了eslint, 但又想关掉

/config/index.js中: 修改下处字段

```
useEslint: true,
```
