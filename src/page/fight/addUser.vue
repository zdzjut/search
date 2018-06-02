<!--添加用户-->
<template>
  <div>
  <h1>添加用户</h1>
  用户名： <input v-model="username"/>
  密码： <input v-model="password"/>
  <button @click="createUser()">提交</button>
  </div>
</template>

<script>

  import {warn} from "../../../static/cordovaplugin"

  export default {
    name: "addUser",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      createUser: function () {
        let username = this.username;
        let password = this.password;
        let myurl = '/fight/addUser?username=' + username + '&password=' + password;
        this.axios.get(myurl).then(function (response) {
          warn(response, "添加用户结果", "OK")
        }).catch(function (response) {
        });
      },
    }
  }
</script>

<style scoped>

</style>
