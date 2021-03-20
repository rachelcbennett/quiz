import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock2 from './mock2.js'

Vue.config.productionTip = false

let data = {
    people: mock2,
    friends:[],
    non_friends:mock2.slice(0),
    firstVisit: true,
    score: 0,
    average_score:0,
    name: null,
    bio: null,
    attempts:0
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
