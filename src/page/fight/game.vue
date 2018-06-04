//新的一局
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <data-list></data-list>
    <!--v-bind:myurl="myurl"-->

  </div>
</template>

<script>

  import FightHeader from "../../components/fightHeader"
  import DataList from '../../components/function/data-list.vue'

  export default {
    name: "game",
    data() {
      return {
        title: '新的一局',
        // myurl:'/ttt',

      }
    },
    created:function () {
      this.test();
    },
    methods: {
      test:function () {
        alert(this.$route.params.id);
      }
  },
    components: {
      FightHeader,DataList
    }
  }
</script>

<style scoped>

</style>
