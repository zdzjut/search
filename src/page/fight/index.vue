<!--首页-->
<template>
  <div>
    <Header></Header>
    <!--<First></First>-->
    <BodyList></BodyList>
    <!--<data-list v-bind:myurl="myurl"></data-list>-->
  </div>
</template>
<script>

  import Header from '../../components/header'
  import First from '../../components/first.vue'
  import BodyList from './bodyList.vue'
  import DataList from '../../components/function/data-list.vue'

  export default {
    name: "index",
    data() {
      return {
        myurl:'/ttt',
      }
    },
    components: {
      Header, First, BodyList, DataList
    },
  }
</script>
