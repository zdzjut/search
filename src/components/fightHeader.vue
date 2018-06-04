<!--内部页面的头部-->
<template>
  <header class="header">
    <span class="AddUsersL" @click="back()"></span>
    <span class="AddUsersR" v-text="title"></span>
  </header>
</template>
<script>


  export default {
    title: 'fightHeader',
    data() {
      return {
        message: '',

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
    height: 4rem;
    background:#3492E9;
  }
  .AddUsersL{
    display: inline-block;
    width:2rem;
    height:2rem;
    margin:1rem 0 0 1rem;
    background: url("../assets/back.png");
    float:left;
  }
  .AddUsersR{
    display: inline-block;
    width: 85%;
    height:4rem;
    line-height:4rem;
    color:#fff;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }
</style>

