<!--内部页面的头部-->
<template>
  <header class="header">
    <span class="left" @click="back()"></span>
    <span class="mid" v-text="title"></span>
  </header>
</template>
<script>
  export default {
    title: 'fightHeader',
    data() {
      return {
        message: '',
        title: '',

      }
    },
    methods: {
      back: function () {
        history.back();
      },

    },
    props: ["title"]

  }
</script>
<style scoped>
  @import "../style/scss/_index.scss";

  .header {
    width: 100%;
    height: 5rem;
    border: 0.1rem solid #333;
    overflow: hidden;
  }

  .left {
    width: 2rem;
    height: 2rem;
    float: left;
    margin-top: 1.5rem;
    background: url("../../src/assets/left.png");
  }

  .right {
    width: 2rem;
    height: 2em;
    float: right;
    margin-top: 1.5rem;
    background: url("../../src/assets/right.png");
  }
  .mid {
    width: 2rem;
    height: 2rem;
    display: inline-block;
    margin-top: 1.5rem;
  }
</style>

