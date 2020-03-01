import axios from 'axios'
import {Loading,Message} from "element-ui";

let loading:any;
function startLoading() {    //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background:'rgba(255,255,255,0)',
    customClass:'spinner-color'
  })
}
function endLoading() {    //使用Element loading-close 方法
  loading.close();
}


//请求数据拦截器
axios.interceptors.request.use((request:any) => {
  startLoading();
  return request
}, (err:any) => {
  if (err && err.request) {
    switch (err.request.status) {
      case 400: err.message = '请求错误(400)'; break;
      case 401: err.message = '身份认证信息已过期，请重新登录!'; break;
      case 403: err.message = '拒绝访问(403)'; break;
      case 404: err.message = '请求出错(404)'; break;
      case 408: err.message = '请求超时(408)'; break;
      case 500: err.message = '服务器错误(500)'; break;
      case 501: err.message = '服务未实现(501)'; break;
      case 502: err.message = '网络错误(502)'; break;
      case 503: err.message = '服务不可用(503)'; break;
      case 504: err.message = '网络超时(504)'; break;
      case 505: err.message = 'HTTP版本不受支持(505)'; break;
      default: err.message = `连接出错(${err.response.status})!`;
    }
  } else {
    err.message = '连接服务器失败!'
  }
  Message.error(err.message);
  return Promise.reject(err);
});

//接收响应拦截器
axios.interceptors.response.use((response: any) => {
  endLoading();
  return response
}, (err:any) => {
  endLoading();
  if (err && err.response) {
    switch (err.response.status) {
      case 400: err.message = '请求错误(400)'; break;
      case 401: err.message = '身份认证信息已过期，请重新登录!'; break;
      case 403: err.message = '拒绝访问(403)'; break;
      case 404: err.message = '请求出错(404)'; break;
      case 408: err.message = '请求超时(408)'; break;
      case 500: err.message = '服务器错误(500)'; break;
      case 501: err.message = '服务未实现(501)'; break;
      case 502: err.message = '网络错误(502)'; break;
      case 503: err.message = '服务不可用(503)'; break;
      case 504: err.message = '网络超时(504)'; break;
      case 505: err.message = 'HTTP版本不受支持(505)'; break;
      default: err.message = `连接出错(${err.response.status})!`;
    }
    err.message = '连接服务器失败!'
  }
  Message.error(err.message);
  return Promise.reject(err);
});

