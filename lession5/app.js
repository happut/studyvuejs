//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name: "",
        age: ""
    },
    methods: {
        logName: function () {
            console.info(this.$refs.name)
        },
        logAge: function () {
            
        }
    }
});

/*
 * el element 需要获取的元素，一定是html中的根容器元素
 * data 用于数据的存储
 * method 用于各种方法
 * data-binding 给属性绑定值
 */