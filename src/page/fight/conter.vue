<template>
  <div class="Center">
      <ul>
          <li class="CenterLi">
            <router-link :to="{ path: '/test'}">
              <img src="../../../src/assets/11.png" alt="">
            </router-link>
          </li>
        <li class="CenterLi">
            <img src="../../../src/assets/22.png" alt="">
        </li>
        <li class="CenterLi">
            <img src="../../../src/assets/33.png" alt="">
        </li>
        <li class="CenterLi">
            <img src="../../../src/assets/44.png" alt="">
        </li>
      </ul>
  </div>
</template>
<style scoped>
  .Center,.Center>ul{
    width:100%;
  }
  .CenterLi{
    width:96%;
    height:13rem;
    margin:1rem 0 1rem 0.6rem;
  }
</style>
