<!--添加用户-->
<template>
  <div>
        <fight-header  v-bind:title="title"></fight-header>
        <div class="AddUsersB">
              <dl class="AddUsersDl">
                    <dt>用户名：</dt><dd><input v-model="username" value="" type="text" name="username" /></dd>
              </dl>
              <dl class="AddUsersDl">
                    <dt>密码：</dt><dd><input v-model="password" value="" type="text" name="password" /></dd>
              </dl>
        </div>
        <button @click="createUser()" class="AddUsersButton">提交</button>
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
    .AddUsersB{
        width:100%;
    }
    .AddUsersDl{
        width:100%;
        height:3rem;
        line-height:3rem;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
    .AddUsersDl dt{
        display: inline-block;
        width:28%;
        text-align: right;
    }
    .AddUsersDl dd{
        width:70%;
        display: inline-block;
    }
    .AddUsersDl dd>input{
        border: 0.1rem solid #ccc;
        height: 2rem;
        width: 60%;
        border-radius: 0.3rem;
    }
    .AddUsersButton{
        width:100%;
        height:3rem;
        background:#3492E9;
        border:none;
        font-size: 15px;
        letter-spacing:1rem;
        color:#fff;
        margin-top:1rem;
    }
</style>
