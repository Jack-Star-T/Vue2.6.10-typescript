import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { 
    Message,
    Button
} from 'element-ui'

Vue.use(Button)


Vue.prototype.$message = Message
