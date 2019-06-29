import Vue from "vue";
const App=Vue.extend(require('./app.vue').default)
import './assets/images/bg.jpg'
import './assets/css/test.css'
const root = document.createElement("div");
root.id="app"
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root)
