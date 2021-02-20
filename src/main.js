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
import Acceuil from './Acceuil.vue'
import CreerCompte from './CreerCompte.vue'
import Connexion from './Connexion.vue'
import PasswordOubliee from './PasswordOubliee.vue'
import Aide from './Aide.vue'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Acceuil },
  { path: '/CreerCompte', component: CreerCompte },
  { path: '/Connexion', component: Connexion },
  { path: '/PasswordOubliee', component: PasswordOubliee },
  { path: '/Aide', component: Aide }
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
