<template>
    <div class="skeleton-box">
        <ul style="--line-count: 9">
            <li v-for="v in 9" :key="v" :class="`line-${v}`" :style="`--line-index: ${v}`"></li>
        </ul>
        <div class="loading-span">心动加速中，请稍等!</div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from "vue-property-decorator";

    @Component({
        name:'Skeleton'
    })
    export default class Skeleton extends Vue{

    }
</script>

<style lang="stylus" scoped>
.skeleton-box{
    font-size 24px
    display flex
    align-items center
    justify-content center
    width 100%
    min-height 100vh
    flex-direction column
    --level 4
    @media (max-width 768px){
        --level 1
    }
    ul {
        display: flex;
        justify-content: space-between;
        width: calc(150px * var(--level));
        height: calc(10px * var(--level));
        list-style none
        li {
            --count: calc(var(--line-index) / var(--line-count) * .5turn);
            --time: calc((var(--line-index) - 1) * 40ms);
            border-radius: calc(5px * var(--level));
            width: calc(10px * var(--level));
            height: calc(10px * var(--level));
            background-color: #3c9;
            filter: hue-rotate(var(--count));
            animation-duration: 1s;
            animation-delay: var(--time);
            animation-iteration-count: infinite;
        }
        .line-1,
        .line-9 {
            animation-name: line-move-1;
        }
        .line-2,
        .line-8 {
            animation-name: line-move-2;
        }
        .line-3,
        .line-7 {
            animation-name: line-move-3;
        }
        .line-4,
        .line-6 {
            animation-name: line-move-4;
        }
        .line-5 {
            animation-name: line-move-5;
        }
    }
    .loading-span{
        margin-top calc(70px * var(--level) +10px)
        font-size 24px
        color transparent
        background: linear-gradient(90deg, #35c7c2, #45bfe7, #61b3ff, #85a7ff, #ad9aff, #d58fff, #f887fe, #ff83de, #ff83b6);
        background-size 180% 100%
        background-clip text
        animation myMove 2s infinite
        @media (max-width 768px){
            font-size 16px
        }
    }
}
@keyframes line-move-1 {
    0%,
    10%,
    90%,
    100% {
        height: calc(10px * var(--level));
    }
    45%,
    55% {
        height: calc(30px * var(--level));
        transform: translate3d(0, calc(-15px * var(--level)), 0);
    }
}
@keyframes line-move-2 {
    0%,
    10%,
    90%,
    100% {
        height: calc(10px * var(--level));
    }
    45%,
    55% {
        height: calc(60px * var(--level));
        transform: translate3d(0, calc(-30px * var(--level)), 0);
    }
}
@keyframes line-move-3 {
    0%,
    10%,
    90%,
    100% {
        height: calc(10px * var(--level));
    }
    45%,
    55% {
        height: calc(80px * var(--level));
        transform: translate3d(0, calc(-40px * var(--level)), 0);
    }
}
@keyframes line-move-4 {
    0%,
    10%,
    90%,
    100% {
        height: calc(10px * var(--level));
    }
    45%,
    55% {
        height: calc(90px * var(--level));
        transform: translate3d(0, calc(-30px * var(--level)), 0);
    }
}
@keyframes line-move-5 {
    0%,
    10%,
    90%,
    100% {
        height: calc(10px * var(--level));
    }
    45%,
    55% {
        height: calc(90px * var(--level));
        transform: translate3d(0, calc(-20px * var(--level)), 0);
    }
}
@keyframes myMove{
    0%{
        background-position 0 0
    }
    50%{
        background-position 100% 100%
    }
    100%{
        background-position 0 0
    }
}
</style>