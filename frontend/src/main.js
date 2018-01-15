// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// icons
import 'vue-awesome/icons/user'
import 'vue-awesome/icons/lock'
import 'vue-awesome/icons/envelope'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'flag-icon-css/css/flag-icon.css'
import lodash from 'lodash'
import Icon from 'vue-awesome/components/Icon'
import Gravatar from 'vue-gravatar'

Vue.use(BootstrapVue)
Vue.prototype.$_ = lodash
Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.component('v-gravatar', Gravatar)

// filters
Vue.filter('lower', function (value) {
  if (!value) return ''
  return value.toLowerCase()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
