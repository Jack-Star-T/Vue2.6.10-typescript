import Vue from 'vue'

// @ts-ignore
import moment from "moment";

moment.locale('zh-cn');

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

//例如 1000000.12  显示为 1 000 000.12
Vue.filter('price', (num:any)=>{
  num = num + "";
  num = num.replace(/[ ]/g, ""); //去除空格
  if (num == "") {
    return;
  }
  if (isNaN(num)){
    return;
  }
  //2.针对是否有小数点，分情况处理
  let index = num.indexOf(".");
  if (index==-1) {//无小数点
    let reg = /(-?\d+)(\d{3})/;
    while (reg.test(num)) {
      num = num.replace(reg, "$1,$2");
    }
  } else {
    let intPart = num.substring(0, index);
    let pointPart = num.substring(index + 1, num.length);
    let reg = /(-?\d+)(\d{3})/;
    while (reg.test(intPart)) {
      intPart = intPart.replace(reg, "$1,$2");
    }
    num = intPart +"."+ pointPart;
  }
  if(num.indexOf('.')<0){
    return num+ '.00';
  }else if(num.indexOf('.')===num.length-2){
    return num+'0';
  }else{
    return num;
  }
});

//例如 2019-12-11 10:11:00 显示为一小时后
Vue.filter('after', (value:any)=>{
  if(moment(value).diff(moment(),'days')>1){
    return moment(value).diff(moment(),'days') + '天' + moment(value).diff(moment(),'hours')%24 + '小时';
  }else if(moment(value).diff(moment(),'hours')>1){
    return moment(value).diff(moment(),'hours') + '小时' + moment(value).diff(moment(),'minutes')%60 + '分钟';
  }else if(moment(value).diff(moment(),'minutes')>1){
    return moment(value).diff(moment(),'minutes') + '分钟' + moment(value).diff(moment(),'seconds')%60 + '秒';
  }else if(moment(value).diff(moment(),'seconds')>1){
    return moment(value).diff(moment(),'seconds') + '秒';
  }else{
    return '-';
  }
});