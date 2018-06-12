<!--首页-->
<template>
  <div>
    <headoo></headoo>
    <body-list></body-list>
    <h5 class="reminder">如果本软件不好用，也请付费</h5>
    <!--<data-list></data-list>-->
    <!--v-bind:myurl="myurl"-->
  </div>
</template>
<script>

  import Headoo from '../../components/header'
  import First from '../../components/first.vue'
  import BodyList from './bodyList.vue'
  import DataList from '../../components/function/data-list.vue'

  export default {
    name: "index",
    data() {
      return {
        // myurl:'/ttt',
      }
    },
    components: {
      Headoo, First, BodyList, DataList
    },
  }
</script>
<style scoped>
    .reminder{
        width:100%;
        height:4rem;
        line-height:4rem;
        font-size: 1.5rem;
        color:#e4393c;
        text-align: center;
    }
</style>
