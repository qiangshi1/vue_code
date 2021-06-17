# 创建一个数据服务器----用以给vue项目01-supermall提供数据

## 搭建json服务器 

教程参考https://cpu.baidu.com/pc/1022/275122716/detail/45667201176381673/news?chk=1

### 步骤:
- 建一个db.json 文件. 写好内容
- 安装json-server: `npm install --save json-server`
- 运行json-server(由于我不是全局安装的, 所以我的运行方式可能和教程不太一样): `node_modules/.bin/json-server  --watch db.json`

## 搭建图片服务器

用nginx, 参考https://blog.csdn.net/zong596568821xp/article/details/95962979

### 避坑指南

- 一定要按教程https://blog.csdn.net/zong596568821xp/article/details/95962979的安装方式, 一定不要用`apt install nginx` 安装, 否则很多配置错乱. 
- 图片目录一定不要有中文, 用软连接也不行

### 常用命令
启动图片服务器
```shell
/usr/local/nginx/sbin/nginx 
```
停止图片服务器
```shell
/usr/local/nginx/sbin/nginx -s quit
```
启动和停止图片服务器都是后台执行的
启动json服务器
```shell
node_modules/.bin/json-server  --watch db.json
```

写了4个脚本: 
- 1_copy_dir.sh: 拷贝图片文件夹; 
- 2_img_server.sh: 启动图片服务器; 
- 3_json_server.sh: 启动json服务器; 
- 4_stop_img_server.sh: 停止图片服务器

### 其他

- 图片服务器端口: 8001
- json服务器端口: 3000
- 老师的推荐栏图片是圆形的, 可以通过http://blog.sina.com.cn/s/blog_3d730bdf0101f75n.html把方形图片切成圆形

