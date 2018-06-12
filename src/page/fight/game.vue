<!--新的一局-->
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <settle v-bind:recordId="recordId"></settle>
    <data-list v-bind:myurl="myurl"></data-list>

  </div>
</template>

<script>

  import FightHeader from "../../components/fightHeader"
  import DataList from '../../components/function/data-list.vue'
  import Settle from '../../components/function/settle.vue'

  export default {
    name: "game",
    data() {
      return {
        title: '新的一局',
        recordId: -1,
        myurl: '',

      }
    },
    created: function () {
      this.setRecordId();
    },
    methods: {
      setRecordId: function () {
        //接收传递过来的参数
        let id = this.$route.params.recordId;
        this.recordId = id;
        this.myurl = '/fight/showRecord/?recordId=' + id;
      },
    },
    components: {
      FightHeader, DataList, Settle
    }
  }
</script>

<style scoped>

</style>
