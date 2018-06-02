<template>
  <header class="header">
    <router-link :to="{ path: '/addUser'}">
        <span class="left"></span> <!--添加-->
    </router-link>
    <button @click="exit()"><span class="right"></span></button>
  </header>
</template>
<script>
  import {dialogConfirm} from "../../static/cordovaplugin"

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

      dialogConfirm: function (message, title, buttonLabels, defaultText) {
        dialogConfirm(message, title, buttonLabels, defaultText);
      },

      search: function () {
        let myself = this;
        // this.axios.get('/test?test=wrong')
        this.axios.get('/ttt')
          .then(function (response) {
            console.log(response);
            myself.testText = response.data;
          }).catch(function (response) {
          console.log(response);
        });
      }
    }
  }
</script>
<style scoped>
  @import "../style/scss/_index.scss";
  .header{
    width: 100%;
    height:5rem;
    border:0.1rem solid #333;
    overflow:hidden;
  }
  .left{
    width:2rem;
    height:2rem;
    float:left;
    margin-top:1.5rem;
    background:url("../../src/assets/left.png");
  }
  .right{
    width:2rem;
    height:2em;
    float:right;
    margin-top:1.5rem;
    background:url("../../src/assets/right.png");
  }
</style>

