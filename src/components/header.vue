<template>
  <header class="header">
    <router-link :to="{ path: '/addUser'}"><span class="left"></span></router-link>
    <span class="mid">  <img src="../../src/assets/logo.png" alt=""></span>
    <span class="right" @click="fightExit()"></span>
  </header>
</template>
<script>
  import {exit} from "../../static/cordovaplugin"

  export default {
    name: 'first',
    methods: {
      fightExit: function () {
        exit();
      }
    }
  }
</script>
<style scoped>
  @import "../style/scss/_index.scss";

  .header {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    text-align: center;
  }

  .left {
    width: 2rem;
    height: 2rem;
    float: left;
    margin-top: 1.5rem;
    margin-left:1rem;
    background: url("../../src/assets/left.png");
  }
  .mid {
    width: 3rem;
    height: 3rem;
    display: inline-block;
    margin-top: 1.5rem;
    /*background: url("../../src/assets/logo.png") ;*/
    /*background-size:100% 100%;*/
  }

  .right {
    width: 2rem;
    height: 2em;
    float: right;
    margin-top: 1.5rem;
    margin-right:1rem;
    background: url("../../src/assets/right.png") ;
  }
</style>

