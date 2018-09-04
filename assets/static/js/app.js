// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"


// Import Vue components
import App from "../components/App"
import my_profile from "../components/my_profile"
import commands from "../components/commands"
import routers from "../components/routers"
import nvrs from "../components/nvrs"

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/my_profile',
      name: 'my_profile',
      component: my_profile,
    },
    {
      path: '/commands',
      name: 'commands',
      component: commands,
    },
    {
      path: '/routers',
      name: 'routers',
      component: routers,
    },
    {
      path: '/nvrs',
      name: 'nvrs',
      component: nvrs,
    }
  ],
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});