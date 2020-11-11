import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
import { Table, TableColumn,Button } from 'element-ui';
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
