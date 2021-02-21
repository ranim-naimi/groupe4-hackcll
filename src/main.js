import Vue from 'vue'
import App from './App.vue'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.devtools = true;
/*import Vuex from 'vuex'
Vue.use(Vuex)
import { store } from './store'
*/

//router
//import routes from './router/index.js'

import VueRouter from 'vue-router'
import CreateAccounts from './CreateAccounts.vue'
import login from './login.vue'
import Contacts from './Contacts'
import HomeCLL from './HomeCLL'
import Abouts from './Abouts'
import Gestion from './Gestion'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeCLL },
  { path: '/CreateAccounts', component: CreateAccounts },
  { path: '/login', component: login },
  { path: '/Contacts', component: Contacts },
  { path: '/Abouts', component: Abouts },
  { path: '/Gestion', component: Gestion }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  router,
 //store,
  render: h => h(App),
}).$mount('#app')
