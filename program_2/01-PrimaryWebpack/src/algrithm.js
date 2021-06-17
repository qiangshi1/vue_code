function add(n1,n2){
    return n1+n2
}
function muti(n1,n2){
    return n1*n2
}

// webpack识别导出的对象、函数、方法
module.exports = {
    add,
    muti
}