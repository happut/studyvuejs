Vue.component("greeting", {
    template: `
    <p>
        {{name}}:给大家介绍一下我的电脑：@pc
        <button @click="changeName">改名</button>
    </p>
    
    `,
    data: function () {
        return {
            name: "mac"
        }
    },
    methods: {
        changeName: function () {
            this.name = "henry"
        }
    }
})


var one = new Vue({
    el: "#vue-app-one",
});

var two = new Vue({
    el: "#vue-app-two",
});

