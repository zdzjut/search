<!--个人信息-->
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <span>姓名：{{username}}</span>
    <span>余额：{{balance}}</span>
    <button @click="toModify()">修改信息</button>
    <button @click="logout()">退出登录</button>
  </div>
</template>

<script>
  import Store from '../../utils/store'
  import FightHeader from '../../components/fightHeader'

  export default {
    name: "personal",
    data() {
      return {
        username: '',
        balance: '',
        title: '个人信息',
      }
    },
    created: function () {
      this.showUser();
    },
    methods: {
      toModify: function () {
        this.$router.push({path: '/modifyUser'});
      },
      logout: function () {
        Store.removeMap("user");
        this.$router.push({path: '/'});
      },
      showUser: function () {
        let user = Store.getMap("user");
        this.username=user.name;
        this.balance=user.balance;

      }

    },
    components:{
      FightHeader
    },
  }
</script>

<style scoped>

</style>
