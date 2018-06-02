<!--内部页面的头部-->
<template>
  <header class="header">
    <span class="left" @click="addUser()"></span>

    <span class="right" @click="fightExit()"></span>
  </header>
</template>
<script>
  import {exit} from "../../static/cordovaplugin"
  import {dialogPrompt} from "../../static/cordovaplugin"

  export default {
    name: 'first',
    data() {
      return {
        message: '',
        summary: '',
        id: '',
        testText: '',
      }
    },
    methods: {

      fightExit: function () {
        exit();
      },
      addUser: function () {
        let username = dialogPrompt("输入全名", "添加用户", ["是", "否"], "");
        alert(username);
      }}
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
</style>

