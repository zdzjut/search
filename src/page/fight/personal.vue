<!--个人信息-->
<template>
  <div>
    <span>姓名：{{username}}</span>
    <span>余额：{{balance}}</span>
    <button @click="toModify()">修改信息</button>
    <button @click="logout()">退出登录</button>
  </div>
</template>

<script>
  import Store from '../../utils/store'

  export default {
    name: "personal",
    data() {
      return {
        username: '',
        balance: '',
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

    }
  }
</script>

<style scoped>

</style>
