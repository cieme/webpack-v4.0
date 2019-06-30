import Vue from "vue/dist/vue";
// const App=Vue.extend(require('./App.vue').default)
// Vue.component("App", require('./App.vue').default);
// const App = require('./App.vue').default;
import App from "./App.vue"
import './assets/images/bg.jpg'
import './assets/css/test.css'
import './assets/css/test.styl'
Vue.config.productionTip = false,
  new Vue({
    render: h => h(App)
    // components : {App} 
  }).$mount('#app')