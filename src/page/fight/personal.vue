<!--个人信息-->
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <span class="span-name">姓名：{{username}}</span><br/>
    <span class="span-name">余额：{{balance}}</span><br/>
    <button @click="toModify()" class="btn">修改信息</button><br/>
    <button @click="logout()" class="btn">退出登录</button><br/>
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
        let myurl = '/fight/showUser?id=' + user.id;
        this.axios.get(myurl).then((response) => {
          if (response.data.result === 1) {
            user = response.data.data;
            this.username = user.name;
            this.balance = user.balance;
          }

        })
      }
    },
    components: {
      FightHeader
    },
  }
</script>

<style scoped>
  .btn{
    width:10rem;
    height:3rem;
    background: url("../../assets/sure.png");
    border:none;
    border-radius: 0.5rem;
    color:#fff;
    font-size: 15px;
    margin-top:1rem;
    margin-left: 0.5rem;
  }
  .span-name {
    font-size: 2rem;
    font-weight: bold;
  }
</style>
