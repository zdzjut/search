<!--历史详情列表-->
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>

    <data-list :oneRecord="oneRecord"></data-list>

  </div>
</template>

<script>
  import FightHeader from "../../components/fightHeader"
  import DataList from "../../components/function/data-list"

  export default {
    name: "history-data",
    data() {
      return {
        title: '历史记录详情',
        oneRecord: {users: [], rounds: []},

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
        let myurl = '/fight/showRecord/?recordId=' + id;
        this.axios.get(myurl).then((response) => {
          let one = response.data.data;
          this.$set(this, 'oneRecord', one);
        }).catch(function (response) {
          console.log(response);
        });
      },
    },
    components: {
      FightHeader,DataList
    },


  }

</script>

<style scoped>

</style>
