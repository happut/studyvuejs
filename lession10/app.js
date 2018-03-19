var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "app one content"
    },
    methods: {


    },
    computed: {
        greet: function () {
            return "hello App One"
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "app two content"
    },
    methods: {


        changeTitle: function () {
            one.title = "已经改名了"
        }
    },
    computed: {
        greet: function () {
            return "hello App Two"
        }
    }
});


two.title = "哎呦我去"

