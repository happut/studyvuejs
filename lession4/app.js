//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {

    },
    methods: {
        logName: function () {
            console.info("正在输入名字...")
        },
        logAge: function () {
            console.info("正在输入年龄...")
        }
    }
});

/*
 * el element 需要获取的元素，一定是html中的根容器元素
 * data 用于数据的存储
 * method 用于各种方法
 * data-binding 给属性绑定值
 */