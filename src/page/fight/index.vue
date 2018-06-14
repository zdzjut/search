<!--首页-->
<template>
  <div>
    <headoo></headoo>

    <ul>
      <li v-for="test in testlist">
        <div v-bind="testlist1">

          <span :class='{sprite:true,cola:test===testlist1[1]}'>{{test}}</span>
        </div>
      </li>
    </ul>
    <body-list></body-list>
    <h5 class="reminder">如果本软件不好用，也请付费</h5>
  </div>
</template>
<script>

  import Headoo from '../../components/header'
  import BodyList from './bodyList.vue'
  import DataList from '../../components/function/data-list.vue'

  export default {
    name: "index",
    data() {
      return {
        testlist: [1, 2, 3, 4, 5, 6, 7],
        testlist1: [1, 2, 3, 4, 1, 0, 1],
      }
    },
    components: {
      Headoo, BodyList, DataList
    },
  }
</script>
<style scoped>
  .reminder {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    color: #e4393c;
    text-align: center;
  }


  .sprite {
    color: #1380cb;
    font-size: 38px;
  }  .cola {
       color: crimson;
     }
</style>
