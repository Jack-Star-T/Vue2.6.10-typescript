import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './interceptors/index'
import './filters/index'
import "amfe-flexible";

Vue.config.productionTip = false

function initRem() {
  let cale = window.screen.availWidth > 1920 ? 2 : window.screen.availWidth / 960
  window.document.documentElement.style.fontSize = `${100 * cale}px`
}

window.addEventListener('resize', function() {
  initRem()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
