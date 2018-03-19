//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {

    },
    computed: {
        addToA: function () {
            console.info("addToA")
            return this.a + this.age
        },
        addToB: function () {
            console.info("addToB")
            return this.b + this.age
        },
        test: function () {
            console.info("test")
            return this.b + Date.now()
        }
    }
});

/*
 * el element 需要获取的元素，一定是html中的根容器元素
 * data 用于数据的存储
 * method 用于各种方法
 * data-binding 给属性绑定值
 */