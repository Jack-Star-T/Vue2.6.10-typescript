import Vue from 'vue'

//例如 18045486451 显示为180****6451
Vue.filter('formatMobile', (value:string)=>{
  let re=/(\d{3})\d{4}(\d{4})/;
  return value.replace(re,'$1****$2');
});

//例如 18045486451 显示为 180 4548 6451
Vue.filter('mobileSpace', (value:string)=>{
  return value.replace(/(\d{3})(\d{4})/, "$1 $2 ");
});

//例如 2019-12-11 10:11:00 显示为2019-12-11
Vue.filter('date', (value:string)=>{
  return value.split(' ')[0];
});

//例如 2019-12-11 10:11:00 显示为10:11:00
Vue.filter('time', (value:string)=>{
  return value.split(' ')[1];
});
