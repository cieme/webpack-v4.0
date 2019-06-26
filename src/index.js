import Vue from "vue";
import APP from './app.vue';
import './assets/images/bg.jpg'
import './assets/css/test.css'
const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    render: (h) => h(APP)
}).$mount(root)