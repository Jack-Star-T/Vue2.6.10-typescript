import axios from 'axios'
import Cookie from 'js-cookie'
import url from './config'
import qs from 'qs'

axios.defaults.baseURL = url;
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';       //header配置

if (Cookie.get('token')) {
  axios.defaults.headers.common['Authorization'] =`Bearer ${Cookie.get('token')}`;
}

//供应商拉取公司列表
export const login= (params) => {
  return new Promise((resolve, reject) => {
    axios.post('/',params).then(res=>{
      resolve(res)})
      .catch(error=>{reject(error)});
  })
};