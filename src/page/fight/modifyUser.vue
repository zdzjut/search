<!--添加用户-->
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <div class="AddUsersB">
      <dl class="AddUsersDl">
        <dt>用户名：</dt>
        <dd><input v-model="username" value="" type="text" name="username"/></dd>
      </dl>
      <dl class="AddUsersDl">
        <dt>密码：</dt>
        <dd><input v-model="password" value="" type="text" name="password" placeholder="请输入新密码"/></dd>
      </dl>
    </div>
    <commit-button v-bind:myurl="myurl"></commit-button>

  </div>
</template>

<script>
  import {warn} from "../../../static/cordovaplugin"
  import FightHeader from "../../components/fightHeader"
  import CommitButton from "../../components/function/commit-button"
  import Store from '../../utils/store'


  export default {
    name: "addUser",
    data() {
      return {
        username: '',
        password: '',
        title: '修改用户',
        myurl: '',
      }
    },
    created: function () {
      this.showUser();
    },
    methods: {
      showUser: function () {
        let user = Store.getMap("user");
        this.username = user.name;
      },
      modify: function () {
        let user = Store.getMap("user");
        let id = user.id;
        console.log("id:" + id);
        this.username = user.name;
        this.password = user.password;
        let myurl = '/fight/modify?id=' + id + '&username=' + user.name + ' &password=' + user.password;
        this.axios.get(myurl).then(function (response) {
          if (response.data.result === 1) {
            let user = response.data.data;
            Store.setMap("user", user);
            // warn(response.data.message, "修改用户名密码", "OK");
            alert("修改成功");
          }
          this.$router.push({path: '/person'})
        }).catch(function (response) {
        });
      },
    },
    components: {
      FightHeader, CommitButton
    }
  }
</script>

<style scoped>
  .AddUsersB {
    width: 100%;
  }

  .AddUsersDl {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .AddUsersDl dt {
    display: inline-block;
    width: 28%;
    text-align: right;
  }

  .AddUsersDl dd {
    width: 70%;
    display: inline-block;
  }

  .AddUsersDl dd > input {
    border: 0.1rem solid #ccc;
    height: 2rem;
    width: 60%;
    border-radius: 0.3rem;
  }

  .AddUsersButton {
    width: 100%;
    height: 3rem;
    background: #3492E9;
    border: none;
    font-size: 15px;
    letter-spacing: 1rem;
    color: #fff;
    margin-top: 1rem;
  }

  .AddUsersB {
    width: 100%;
  }

  .AddUsersDl {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .AddUsersDl dt {
    display: inline-block;
    width: 28%;
    text-align: right;
  }

  .AddUsersDl dd {
    width: 70%;
    display: inline-block;
  }

  .AddUsersDl dd > input {
    border: 0.1rem solid #ccc;
    height: 2rem;
    width: 60%;
    border-radius: 0.3rem;
  }

  .AddUsersButton {
    width: 100%;
    text-align: center;
  }

  .AddUsersButton button {
    width: 65%;
    height: 3rem;
    background: #3492E9;
    border: none;
    font-size: 15px;
    letter-spacing: 1rem;
    color: #fff;
    margin-top: 1rem;
    border-radius: 0.5rem;
  }
</style>
