<!--首页-->
<template>
  <div>
    <Header></Header>
    <BodyList></BodyList>
    <h5>如果本软件不好用，也请付费</h5>
    <!--<data-list></data-list>-->
    <!--v-bind:myurl="myurl"-->
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
        // myurl:'/ttt',
      }
    },
    components: {
      Header, First, BodyList, DataList
    },
  }
</script>
