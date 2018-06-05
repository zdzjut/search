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
        <router-link :to="{ path: '/newGame'}">
          <img src="../../../src/assets/44.png" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {warn} from "../../../static/cordovaplugin"
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
        // user: user:{id:1,name:'hello'}
      let user=  Store.getMap("user");
      if (user==null||user===undefined){
        this.$router.push({path: '/login'})
      }else {
        this.$router.push({path: '/choosePerson'})
      }
      },
    },
    components: {
      FightHeader
    }
  }
</script>
<style scoped>
  .Center, .Center > ul {
    width: 100%;
  }

  .CenterLi {
    width: 96%;
    height: 13rem;
    margin: 1rem 0 1rem 0.6rem;
  }
  .CenterLi img{
    width:100%;
  }
</style>
