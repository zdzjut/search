//新的一局
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <h1>选4个人</h1>
  </div>
</template>

<script>

  import FightHeader from "../../components/fightHeader"

  export default {
    name: "choose-person",
    data() {
      return {
        title: '选择聚众人员',
      }
    },
    methods: {

    },
    components: {
      FightHeader
    }
  }
</script>

<style scoped>

</style>
