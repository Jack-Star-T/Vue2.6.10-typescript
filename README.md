

> ### 基于Vue3.0+Typescript构建的空白项目，包括css样式的初始化，以及基本常用的axios,vue-router,模块化使用vuex，element-ui已经按需引入配置好，还有axios拦截器，axios请求的全局loaindg加载，路由组件懒加载，以及对于不同环境的基本Url封装，还附带了一些常用的方法，以及包括打包优化的cdn引入，代码压缩，图片压缩，关闭map等打包优化都已配置完成,关于ts的使用，要使用修饰符，在Home.vue中，常用的使用方法我也都已经列举出来了

> #### 关于作者:cooldream
> #### 个人网站:https://www.cooldream.fun
> #### 个人简书博客地址:https://www.jianshu.com/u/9985e2c26c3a
> #### 个人掘金博客地址: https://juejin.im/user/5d4c28015188253b1e3de80d

### 文件目录结构如下
<pre>
├─ src    //主文件
│  ├─ api    //接口文件夹
|  |  |- config.js    //后端接口地址的配置,将测试、开发、生产环境分开
|  |  └─ user.js      //接口文件，配置了token请求头，具体接口根据需求修改
│  ├─ assets   //资源文件   
│  ├─ components   //公用组件
│  ├─ directive   //vue自定义指令
|  ├─ filters      //存放过滤器文件，自带了手机号加密，手机号格式化，时间日期处理
|  ├─ interceptors    //存放axios拦截器配置，写入了接口调用的loading加载以及http状态码报错拦截
|  ├─ interface    //放置公用的接口，对数据进行类型限制
|  ├─ layout      //布局文件，通过子路由渲染方式实现，具体HTML布局根据需求修改  
|  ├─ mixins      //混入文件，配置了一个平滑滚动的方法
|  ├─ plugins     //外部插件文件夹，配置了按需引入的element-ui
|  ├─ reg    //存放正则以及校验的文件夹
|  |  |- reg.ts      //存放正则表达式，自带了传真，邮箱，qq，手机号，银行卡号，固定电话，密码强度校验正则
|  |  └─ validator.ts      //存放element-ui自定义校验，自带了传真，邮箱，qq，手机号，银行卡号，固定电话，密码强度自定义校验
|  ├─ router      //路由文件
|  ├─ store       //vuex全局变量文件
|  |  |- index.ts      //store主文件
|  |  └─ module     //store模块文件夹
|  |  |  └─ user.ts      //存放user相关的全局变量
|  ├─ stylus   //css预处理器文件夹
|  |  |- reset.styl      //样式初始化文件,自带了非标准盒子，a标签清除下划线，清除内外边距，禁止图片拖拽等效果
|  |  └─ color.styl     //颜色变量文件
|  ├─ utils   //公用方法文件夹
|  |  |- area.ts      //存放省市区三级地区的数据
|  |  |- array.ts      //存放数组相关的公用方法，自带了两个元素交换位置，元素前进后退一格，元素置顶或末尾，去重，删除指定元素操作
|  |  └─ object.ts    //存放对象相关的公用方法，自带了对象清空所有值的方法
|  ├─ views   //页面文件夹
|  ├─ main.ts   //主配置文件
|  ├─ babel.config.js   //babel配置文件，写入了element-ui按需加载的配置
|  ├─ package.json   //npm的包管理文件
|  ├─ tsconfig.json   //ts配置文件
|  ├─ vue.config.js   //vue配置文件
</pre>



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
