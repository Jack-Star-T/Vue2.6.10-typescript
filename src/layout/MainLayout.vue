<template>
    <div>
        <span>{{tip}}</span>
        <router-view />
    </div>
</template>

<script lang="ts">
import {Vue} from 'vue-property-decorator'

export default class MainLayout extends Vue{
    tip:string='主布局文件，子路由套用即可享有布局文件的布局效果'
}
</script>

<style lang="stylus" scoped>

</style>
