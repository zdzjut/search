<template>
  <div class="Center">
    <ul>
      <li class="CenterLi">
        <!--<router-link :to="{ path: '/choosePerson'}">-->
        <img src="../../../src/assets/11.png" alt="" @click="checkUser()">
        <!--</router-link>-->
      </li>
      <li class="CenterLi">
        <router-link :to="{ path: '/continueGame'}">
          <img src="../../../src/assets/22.png" alt="">
        </router-link>
      </li>
      <li class="CenterLi">
        <router-link :to="{ path: '/newGame'}">
          <img src="../../../src/assets/33.png" alt="">
        </router-link>
      </li>
      <li class="CenterLi">
        <img src="../../../src/assets/44.png" alt="" @click="checkPersonal()">
      </li>
    </ul>
  </div>
</template>

<script>
  import FightHeader from "../../components/fightHeader"
  import Store from "../../utils/store";


  export default {
      name: "addUser",
      data() {
          return {
              username: '',
              password: '',
              title: '添加用户',
          }
      },
      methods: {
          checkUser: function () {
//开发时放开
              this.$router.push({path: '/choosePerson'})

              /* let user = Store.getMap("user");
        if (user == null || user === undefined) {
          this.$router.push({path: '/login'})
        } else {
          this.$router.push({path: '/choosePerson'})
        }*/
          },
          checkPersonal: function () {
//开发时放开
              this.$router.push({path: '/choosePerson'})
              /*let user = Store.getMap("user");
        if (user == null || user === undefined) {
          this.$router.push({path: '/login'})
        } else {
          this.$router.push({path: '/personal'})
        }
      },*/
          },
          components: {
              FightHeader
          }
      }
  }
</script>
<style scoped>
  .Center, .Center > ul {
    width: 100%;
  }

  .CenterLi {
    width: 96%;
    margin: 1rem 0 1rem 0.6rem;
  }

  .CenterLi img {
    width: 100%;
  }
</style>
