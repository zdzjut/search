<!--添加用户-->
<template>
  <div>
    <fight-header  v-bind:title="title"></fight-header>
    用户名： <input v-model="username"/>
    密码： <input v-model="password"/>
    <button @click="createUser()">提交</button>
  </div>
</template>

<script>

  import {warn} from "../../../static/cordovaplugin"
  import FightHeader from "../../components/fightHeader"

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
      createUser: function () {
        let username = this.username;
        let password = this.password;
        let myurl = '/fight/addUser?username=' + username + '&password=' + password;
        this.axios.get(myurl).then(function (response) {
          warn(response.data.message, "添加用户结果", "OK")
        }).catch(function (response) {
        });
      },
    },
    components:{
      FightHeader
    }
  }
</script>

<style scoped>

</style>
