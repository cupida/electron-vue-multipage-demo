import Vue from 'vue'

import App from './App'
import router from './router'

import ElementUI from 'element-ui'; //  目前demo最高只兼容element-ui@2.8.2
import 'element-ui/lib/theme-chalk/index.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
