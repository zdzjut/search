//新的一局
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <div class="SelectUsers">
      <select-time v-on:muchtime="showTimeMuch"></select-time>
      <div class="SelectUsersC">
        <img src="../../assets/top.png" alt="">
        <ul class="SelectUsersCenter">
          <li class="SelectUsersCDiv" v-for="user in users">
            <div class="checkbox-box">
              <input type="checkbox" v-on:click="chooseArray(user.id)"/>
              <span></span>
            </div>
            <label v-text="user.name"></label>
          </li>
        </ul>

        <img src="../../assets/bottom.png" alt="">
      </div>
      <div class="SelectUsersF">
        <button @click="choosePerson()">提交</button>
      </div>
    </div>
  </div>
</template>

<script>

  import FightHeader from "../../components/fightHeader"
  import SelectTime from '../../components/function/select-time.vue'
  import CheckBox from '../../components/function/check-box'
  import CommitButton from '../../components/function/commit-button'
  import Store from "../../utils/store";
  import {warn} from "../../../static/cordovaplugin"

  export default {
    name: "choose-person",
    data() {
      return {
        title: '选择人员',
        users: [],
        chosen: [],
        timemuch: 10,
      }
    },
    created: function () {
      this.showAll();
    },
    methods: {
      showAll: function () {
        let myurl = '/fight/showUserList';
        this.axios.get(myurl).then((response) => {
          this.users = response.data.data;

        }).catch(function (response) {
          console.log(response);
        });
      },
      choosePerson: function () {
        let chosen = this.chosen;
        if (chosen.length !== 4) {
          return;
        }
        let user = Store.getMap("user");
        let myurl = '/fight/choosePerson?users=' + chosen.toString() + '&times=' + this.timemuch + '&loginUserId=' + user.id;
        this.axios.get(myurl).then((response) => {
          if (response.data.result === 1) {
            this.$router.push({path: '/game/' + response.data.data.id})
          } else {
            warn(response.data.message, "选人错误", "OK");
          }
        }).catch(function (response) {
          console.log(response);
        });
      },
      chooseArray: function (id) {
        let chosen = this.chosen;
        let index = chosen.indexOf(id);
        //-1代表不存在  如果存在，删除
        if (index === -1) {
          chosen.push(id);
        } else {
          chosen.splice(index, 1);
        }
      },
      showTimeMuch(data) {
        this.timemuch = data.timemuch;
      }
    },
    components: {
      FightHeader, SelectTime, CheckBox, CommitButton
    }
  }
</script>

<style scoped>
  .SelectUsers {
    width: 100%;
    text-align: center;
  }

  .SelectUsersC {
    width: 90%;
    height: auto;
    margin-left: 4%;
    margin-top: 1rem;
  }

  img {
    width: 100%;
  }

  .SelectUsersCDiv {
    float: left;
    width: 48%;
    margin-bottom: 0.1rem;
  }

  .SelectUsersCDiv label {
      font-size: 1.4rem;
      display: inline-block;
      width:5rem;
  }

  .SelectUsersCenter {
    width: 100%;
    overflow: hidden;
  }

  .checkbox-box {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.3rem;
    margin-right: 1rem;
    position: relative;
    border: 0.2rem solid #1aafcc;
    background: #1aafcc;
    vertical-align: middle;
  }

  .checkbox-box input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .checkbox-box span {
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
  }

  .checkbox-box span:after {
    content: "\00a0";
    display: inline-block;
    border: 0.3rem solid #fff;
    border-top-width: 0;
    border-right-width: 0;
    width: 1.2rem;
    height: 0.8rem;
    -webkit-transform: rotate(-50deg);
    -moz-transform: rotate(-50deg);
  }

  .checkbox-box input[type="checkbox"] + span {
    opacity: 0;
  }

  .checkbox-box input[type="checkbox"]:checked + span {
    opacity: 1;
  }

  .SelectUsersF {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .SelectUsersF button {
    width: 18rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    background: #3492E9;
    color: #fff;
    font-size: 15px;
    margin-top: 3rem;
  }
</style>
