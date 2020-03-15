import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

// scss style
import './assets/scss/index.scss';

Vue.config.productionTip = false;
// axios
// Vue.prototype.$http = axios;
// TODO 待解决问题VueAxios,axios顺序不会报错，axios,VueAxios会报错
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
