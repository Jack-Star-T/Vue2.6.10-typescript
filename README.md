

> ### 基于Vue2.6.10+Typescript构建的空白项目，包括css样式的初始化，以及基本常用的axios,vue-router,模块化使用vuex，element-ui已经按需引入配置好，还有axios拦截器，axios请求的全局loaindg加载，路由组件懒加载，以及对于不同环境的基本Url封装，还附带了一些常用的方法，以及包括打包优化的cdn引入，代码压缩，图片压缩，关闭map等打包优化都已配置完成,关于ts的使用，要使用修饰符，在Home.vue中，常用的使用方法我也都已经列举出来了，（现已新增首屏渲染loding效果，效果可以参考于我的个人网站，我的**个人网站将于不久开源**，请多多支持）

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

## 目录详解

这里会讲到所有目录的意义，大多都是很基础的东西

- #### api
  主要是存放api接口相关配置的文件夹，现在的前后端分离，主要就是通过前端调用后台的接口，实现前后台的通信交互。首先 `config.js` 是对于接口地址 `baseUrl` 的配置，毕竟现在项目环境有很多，一个本地开发，一个测试环境，一个生产环境，也就是所谓的正式环境，如果，公司较大，可能还不止上述的这三种项目环境，我这边是通过 `window.location.hostname` 来判断当前是哪个环境的，还有一种方法是使用 `process.env.NODE_ENV` 来判断当前的使用环境。然后在 `user.js` 中引入了上面定义的 `baseUrl` 进行接口根地址配置，并且，做了token塞入请求头，定义了一个 `login` 登录接口，一般只需要改三处，请求方式，即这边写的 `post` ，请求方式常用的有 `post` 发送数据， `get` 拉取数据 , `put` 更新数据 ， `delete` 删除数据，还有后面的url `/login`，也就是接口请求地址，这个也是需要根据实际改的，还有一个是 `params` ，如果采用路由拼接的方式，可以使用 `qs.stringify(params)` 进行格式转换

- #### assets

  存放资源文件的地方，一般是`js` , `css` , `images` 这三种，不过现在图片一般使用第三方服务了，至于`js`,一般也都是引用插件，公用方法放在了`utils`文件夹下，至于`css`，我也都存放在 `stylus`下面了，一般没有第三方图片存放的，将图片放在这里，`webpack` 可以弄个图片压缩，这样子包大小就能变小
  
- #### components

  一般存放公用组件，组件最主要一点是可以复用，减少代码量，对于耦合性较高的地方，维护起来就很方便，比方说，你的获取验证码是一个公共组件，现在，产品说，获取验证码的样式需要改一下，本来你如果有三四个页面都用到了获取验证码，你要改三四个地方，而用了组件，改一处，所有引用这个组件的地方都将生效，大大减少了维护带来的成本。而且，父子组件可以通过 `props` , `$emit` , `slot` , `$refs` , `$attrs` , `$listeners` , `eventBus` 等方式传值，具体的方法可以参考我这一篇博客[一篇文章看懂Vue.js的11种传值通信方式](https://juejin.im/post/6844904148748468232)
  
- #### filters
  vue中的过滤器，主要是将文本的渲染进行格式化，我自带了时间，手机号，金额三位分割的过滤器，如果你不需要可以直接删除，我们来拿第一个 `formatMobile`来举例子，比方说现在 `data` 里有一个变量 `mobile` 值为17857094521，本来 `{{mobile}}` 那么显示为 17857094521 ，使用了过滤器之后，`{{mobile | formatMobile}}`，那么显示为 178****4521
  
- #### interceptors
  `axios` 的拦截器统一配置，可以在发起请求，拿到服务器相应的时候做统一的拦截处理，我这边自带了 `element-ui` 的 `loading` 加载，在发起请求的时候开启 `loading` 加载，在拿到服务器响应 `response` 的同时，将 `loading` 加载关闭。同时，对于常见的 `http` 状态码进行了错误拦截，特别是 401 ，一般是用户身份认证过期，一般先将用户信息清空，然后再写上 window.location.href = `${window.location.origin}`在加上对应路由跳转至登录页。
  
  这边推荐一个插件，那就是`qs`，我这个项目里已安装，它可以将 `json` 格式的数据转为路由拼接的形式，即将{name:'jack',age:24}转为?name='jack&age=24',只需要在要使用的地方 `import qs from 'qs'` 引入，然后使用`qs.stringify(params)`，就可以将参数 `params` 从json格式转为路由拼接啦。可以在axios请求拦截器的前面做一个判断，一般get方式都是路由拼接的，所以判断 `request.methods==='get'`，然后使用 `qs.stringify` 格式化请求参数，或者是在 `api` 接口文件夹下将需要格式化的接口直接单独格式化
  
- #### interface
  
  类似于 `java` 中接口的概念，定义了这个数据里面的具体参数的数据类型，可以有效控制传入参数的数据类型，数据格式，我这边只定义了一个屏幕大小的宽高接口，有需要数据格式定义的请写这里
  
- #### layout 
  
  布局文件，在路由中，使用子路由的概念，即 `children` 中的路由，将都渲染在该布局路由的 `<router-view />`下，可以很轻松地将很多布局类似的页面，提取其中相同部分，直接做成布局页面，如果有需要，可以修改和添加，需要沿用布局的子路由写在其 `children` 路由下即可
  
- #### mixins
  
  vue中的混入，在引用的时候，会将 `data` , `methods` , `watch` , 生命周期等，所有都和当前页面(组件)共享，生命周期混入先执行，组件后执行,`data` , `methods` , `watch` 等会被组件覆盖，生命周期是不会覆盖的，记住，混入比组件优先执行，这也是为什么 `data` ，方法等会被覆盖的原因，可以将获取验证码的js，以及用户登录拉取信息，用户登录以后的权限路由跳转等，都封装在混入中，毕竟，真个系统的获取验证码，用户权限是一套全站通用的逻辑，一处改，处处改
  
- #### plugins

  使用插件的文件夹，下面定义了个 `element.ts` ，主要是所有对于 `element-ui` 的按需引入的组件都可以在这里注册，别的插件可以再新增一个 `index.ts`，将别的引用插件写入这里，但是别忘记在 `main.ts` 中引入这个新定义的 `index.js`哦
  
- #### reg 
  
  正则也是一个全站通用的逻辑，并且在网站中用到的地方很多，这个文件夹下有两个，一个 `reg.ts` ，用于存放正则表达式，一个是 `validator.ts` ，用于存放 `element-ui` 的表单自定义校验，里面附带了邮箱，手机号，qq，邮编，传真等校验，建议使用前先验证一下，毕竟有些验证规则可能存在随着时间更新的可能性
  
- #### router
  
  这个文件夹想必大家都清楚，路由文件嘛，主要可以用于登录权限的校验，比方说没登录，别的页面进不去，只能去注册登录页面，这边自带了每次进入页面将当前页面的标题改为 `meta` 信息里的 `title`,还有一个是页面跳转返回顶部，有些页面可能要返回上一个页面的时候，返回之前浏览的位置，例如淘宝的商品列表页 -> 商品详情页 -> 商品列表页，肯定是希望回到上次浏览的地方，而不是从头开始，这种时候，`keep-alive` 的作用就展现出来了，关于 `keep-alive` 的使用可以查看我的这一篇博客[浅析Vue系列之(一)详解keep-alive](https://juejin.im/post/6844904084479164424)，另外，ios手机的 `keep-alive` 可能存在页面虽然缓存了，但是无法滚动到上次浏览的位置，具体解决方法就是在将要缓存的页面的 `meta` 信息中的 `savedPosition` 设置为 `true`，毕竟具体的滚动方法我已经在 `scrollBehavior` 中做好了相关配置
  
- #### store
  
  也就是大家所熟悉的 `vuex` ，我个人理解就是在整个网站中的全局变量，在任何页面都可以拿到 `vuex` 中保存的变量值,并且，我是模块化使用的，比方说我要拿 `user` 模块中的 `username` 信息，只需要在vue页面中写入`this.$store.state.user.username` 即可拿到信息,只需要`this.$store.getters['user/username']`即可拿到`getters`里面的信息，`getters`你可以理解为 `state` 的计算属性，而运行`this.$store.commit('user/SET_username','jack');` 即可将全局变量 `username` 的值改为jack
  
- #### stylus
  
  三大css预处理器之一，另外两个分别是`less` 和 `sass`，我个人比较喜欢 `stylus` ，所以，这边就用的它，主要就两个文件，一个是 `reset.styl` ,对网站的所有样式进行初始化，初始化的好处就是可以让页面在不同的浏览器下不会出现太大的差别，毕竟，不同浏览器的css初始值是不一样的，不做css样式初始化就很容易出现在不同的浏览器显示的样子不一样的尴尬局面。还有一个是 `color.styl` ，可以设置颜色变量，在需要使用的页面进行 `@import 'stylus/color.styl'` ,即可使用里面的颜色变量，好处就是当网站整体要变换风格的时候，改改这个颜色配置下的颜色就可以了，关于这点还是很方便的。此外，一般插件由于跟我们的ui图界面风格不一样，有的时候需要改插件样式，你可以自己新建文件，写在这里。
  
  需要注意的是，有一个很轻松就能改变插件样式的方法，那就是深度选择器，在`stylus` 下是在样式的前面加上 `>>>` ，而 `less` 下是使用 `/deep/`
  
- #### utils
  
  这里一般存放公用的方法，比方说是统一的数组，获取滚动条高度，文档高度，对象等处理方法，我这边自带了很多对于滚动条和文档，以及数组的公用方法，有需要使用的可以看下这里
  
- #### views

  这里也就是存放所有视图页面的地方啦，也就是平时所说的页面，`Home.vue`中可以看一看，列举了生命周期，`data` , `methods` , `computed` , 'vuex' 等使用方法，`vuex` 也可以遵循我上面 `vuex` 板块中所提及的使用方法，这个主要还是看个人喜好吧

- #### vue.config.js

  主要就是对于`webpack` 打包优化配置的文件，我这边做了代码压缩，gzip压缩，首屏loading加载效果，公共代码抽离，cdn加速，首屏loading加载如果要改效果，可以修改 `components/Skeleton/index.vue` 这个文件，具体的打包优化方案可以查看我的这一篇博客[Vue3.0(Vue-cli4)项目打包性能优化实践](https://juejin.im/post/6844904071896236040)
