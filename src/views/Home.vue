<template>
  <div class="home">
    <HelloWorld msg="bb"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {Vue,Component,Watch,Prop} from 'vue-property-decorator'
import {State,Getter,Mutation,Action} from "vuex-class";

@Component({
  name:'Home',    //组件名称
  components:{HelloWorld},    //引入的组件components
})
export default class Home extends Vue{

  //data
  bb:string='ddddddd';

  @State(state=>state.base.username) username!:boolean;
  @Getter('base/username') getUsername!:boolean;
  @Mutation('base/SET_username') setUsername!:any;

  //computed计算属性
  get ComputedValue(){
    return 1;
  }

  //watch监听
  @Watch('bb', {immediate: true, deep: true})
  onChangeValue(newVal:string,oldVal:string){
      // todo...
  }

  //Prop
  @Prop({default:0}) propA?: number;       //默认值为0，?为选择
  @Prop([Number,String]) propB!: number;    //类型必须为数字或者字符串，!为必填

  //methods
  testFunction(){
    let obj={
      name:'jj',
      age:12,
    }
  }

  //生命周期
  mounted(){

  }
  created(){

  }
  updated(){
    
  }
  destroyed(){
    
  }
}
</script>

<style lang="stylus" scoped>
  .home{
    margin 0 auto
  }
</style>