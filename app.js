//实例化vue对象
new Vue({
    el: "#vue-app",
    data: {
        name: "Mr Wu",
        job: "web developer",
        website: "http://wangfei.ml",
        websiteTag: "<a href='http://wangfei.ml'>wangfei</a>"
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ' ' + this.name + ' !'
        }
    }
});

/*
 * el element 需要获取的元素，一定是html中的根容器元素
 * data 用于数据的存储
 * method 用于各种方法
 * data-binding 给属性绑定值
 */