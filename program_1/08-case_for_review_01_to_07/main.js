const app = new Vue({
    el: '#app',  
    data: { 
        books:[
            {
                id: 1,
                name: '<算法导论>',
                date:'2020-01-01',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '<UNIX编程艺术>',
                date:'2020-01-01',
                price: 8500.00,
                count: 1
            },
            {
                id: 3,
                name: '<编程珠玑>',
                date:'2020-01-01',
                price: 850.00,
                count: 1
            },
            {
                id: 4,
                name: '<算法导论>',
                date:'2020-01-01',
                price: 805.00,
                count: 1
            }
        ]
    },
    methods: {
        getFinalPrice(price){
            return '$'+price.toFixed(2);
        },
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--
        },
        removeHandle(index){
            //删除index
            this.books.splice(index,1);
        }
    },
    filters:{
        showPrice(price){
            return '$'+price.toFixed(2);
        }
    },
    computed:{
        totalPrice(){
            let total_pirce=0;
            // 第一种for循环
            // for(let i=0;i<this.books.length;i++){
            //     total_pirce+=this.books[i].price*this.books[i].count;
            // }

            // 第二种for循环
            // for(let i in this.books){
            //     total_pirce+=this.books[i].price*this.books[i].count;
            // }

            // 第三种for循环
            // for(let book of this.books){
            //     total_pirce+=book.price*book.count;
            // }

            // 用reduce实现第四种for循环
            total_pirce=this.books.reduce(function(prev,n){ //prev是上一次返回的值
                return prev+n.price*n.count;
            },0);

            // 高阶函数范式编程
            // 找出所有大于5的元素并组成数组
            // function也可以简写成箭头函数=>
            let nums=[1,3,6,7,8,9];
            let newNums=nums.filter(function(n){
                return n>5; //必须返回布尔值
            });
            console.log(newNums);

            //所有元素乘以2
            let newNums2=nums.map(function(n){
                return n*2; //必须返回布尔值
            });
            console.log(newNums2);

            //对数组中所有元素汇总
            // 数组中所有元素求和
            let newNums3=nums.reduce(function(prev,n){ //prev是上一次返回的值
                return prev+n;
            },0); //0会传给prev
            console.log(newNums3);

            
            return total_pirce;
        }
    }
})