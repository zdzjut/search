<!--继续-->
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <button @click="test()">测试</button>
  </div>
</template>

<script>
  import FightHeader from "../../components/fightHeader"

  export default {
    name: "continueGame",
    data() {
      return {
        title: '正在进行列表',
      }
    },
    methods: {
      test: function () {
        this.$router.push({path: '/game/2'})

      }
    },
    components: {
      FightHeader
    }
  }
</script>

<style scoped>

</style>
