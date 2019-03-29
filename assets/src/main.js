import "semantic-ui-css/semantic.css";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from "jquery";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/dataTables.semanticui.min.css';
import './assets/theme/base/vendors.bundle.css';
import './assets/theme/style.bundle.css';
import './assets/css/personal.css';
// import './assets/js/custom.js';

import {Vuetable, VuetablePagination, VuetablePaginationDropDown, VuetablePaginationInfo, VuetableFieldCheckbox} from "vuetable-2";
Vue.component("vuetable", Vuetable);
Vue.component("vuetable-pagination", VuetablePagination);
Vue.component("vuetable-pagination-dropdown", VuetablePaginationDropDown);
Vue.component("vuetable-pagination-info", VuetablePaginationInfo);
Vue.component('vuetable-field-checkbox', VuetableFieldCheckbox);
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
	load: {
		key: "AIzaSyBfX46k9qCXNL6WR8wu8Jmb8yF4WxrpuUM",
		libraries: "places"
	}
});

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    setScrollBar: () => {
      let tableWidth = document.querySelector("table.vuetable").offsetWidth;
      let tableWrapper = document.querySelector("div.table-responsive").offsetWidth;
      document.querySelector("div.top-horizontal-scroll").style.width = tableWidth + "px";
      document.querySelector("div.top-scrollbar").style.width = tableWrapper + "px"
    }
  }
})

let user_id =  $("#app").attr("data-user")

new Vue({
  router,
  store,
  data: {
    user_id: user_id
  },
  render: h => h(App)
}).$mount('#app')
