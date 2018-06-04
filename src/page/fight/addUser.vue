<!--添加用户-->
<template>
  <div class="AddUsers">
    <nav>
        <span></span>
        <p>添加用户</p>
    </nav>
    <div class="AddUsersB">
        <dl class="AddUsersDl">
          <dt>用户名：</dt>
          <dd>
              <input v-model="username" value="" type="text" name="username" />
          </dd>
        </dl>
        <dl class="AddUsersDl">
          <dt>密码：</dt>
          <dd>
              <input v-model="password" value="" type="text" name="password" />
          </dd>
        </dl>
    </div>
    <div class="AddUsersButton">
      <button @click="createUser()">提交</button>
    </div>
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
    .AddUsers{width:100%;}
    .AddUsers nav{
      width:100%;
      height:4rem;
      background:#3492E9;
      text-align: center;
    }
    nav>span{
      display: inline-block;
      width:2rem;
      height:2rem;
      border:1px solid #333;
      margin:1rem 0 0 1rem;
      float:left;
    }
    nav>p{
      display: inline-block;
      width: 80%;
      height:4rem;
      line-height:4rem;
      color:#fff;
      font-size: 15px;
      font-weight: bold;
    }
</style>
