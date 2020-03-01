import {Vue} from 'vue-property-decorator'

//平滑滚动
export default class scroll extends Vue{
    scrollToTarget (target:any, animation:boolean = true) {
        let timer:any="";
        if (!animation) {
          document.body.scrollTop = document.documentElement.scrollTop = 0
          return
        }
        let currentNum = document.body.scrollTop || document.documentElement.scrollTop
        let t = 0
        clearInterval(timer)
        let dir = 1
        if (target > currentNum) {
          dir = -1
        }
        timer = setInterval(() => {
          // 匀加速运动
          t++
          currentNum -= (2 * t * dir)
          document.body.scrollTop = document.documentElement.scrollTop = currentNum
          if ((dir === 1 && currentNum <= target) || (dir === -1 && currentNum >= target)) {
            document.body.scrollTop = document.documentElement.scrollTop = target
            clearInterval(timer)
          }
        }, 16.7)
      }
}