<template>
  <header class="header">
    <router-link :to="{ path: '/test'}">
        <span class="left"></span>
    </router-link>
    <router-link :to="{ path: '/test'}">
      <span class="right"></span>
    </router-link>
  </header>
</template>
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

