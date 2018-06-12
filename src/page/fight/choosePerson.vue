//新的一局
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    <router-link :to="{ path: '/game/1'}">
        <h1>前往列表 </h1>
    </router-link>
    <div class="SelectUsers">
        <select-time v-bind:times="times"  v-on:child-say="timemuch"></select-time>
        <div class="SelectUsersC">
            <img src="../../assets/top.png" alt="">
                <ul class="SelectUsersCenter">
                    <li class="SelectUsersCDiv" v-for="user in users">
                        <div class="checkbox-box">
                            <input name="1" type="checkbox" value="user.id" checked/>
                            <span></span>
                        </div>
                        <label v-text="user.name"></label>
                    </li>
                </ul>

            <img src="../../assets/bottom.png" alt="">
        </div>
        <commit-button></commit-button>
    </div>
  </div>
</template>

<script>

  import FightHeader from "../../components/fightHeader"
  import SelectTime from '../../components/function/select-time.vue'
  import CheckBox from '../../components/function/check-box'
  import CommitButton from '../../components/function/commit-button'

  export default {
    name: "choose-person",
    data() {
      return {
        title: '选择人员',
        times:[10,5,20,50,1],
        users:[],
        chosen:[],
        timemuch:1,
      }
    },
    created:function () {
      this.showAll();
    },
    methods: {
      showAll:function () {
        let myself = this;
        let myurl = '/fight/showUserList';
        this.axios.get(myurl).then(function (response) {
          myself.users = response.data.data;

        }).catch(function (response) {
          console.log(response);
        });
      }
    },
    components: {
      FightHeader,SelectTime,CheckBox,CommitButton
    }
  }
</script>

<style scoped>
    .SelectUsers{
        width:100%;
        text-align: center;
    }
    .SelectUsersC{
        width:90%;
        height:auto;
        margin-left: 4%;
        margin-top:1rem;
    }
    img{width:100%;}

    .SelectUsersCDiv{
        float: left;
        width: 48%;
        margin-bottom:0.1rem;
    }
    .SelectUsersCDiv label{
        font-size: 1.4rem;
    }
    .SelectUsersCenter{width:100%;overflow: hidden;}
    .checkbox-box{
        display: inline-block;
        width:1.5rem;
        height:1.5rem;
        border-radius: 0.3rem;
        margin-right:1rem;
        position: relative;
        border:0.2rem solid #1aafcc;
        background:#1aafcc;
        vertical-align:middle;
    }
    .checkbox-box input{
        opacity: 0;
        position: absolute;
        top:0;
        left:0;
        z-index:10;
    }
    .checkbox-box span{
        width:1.5rem;
        height:1.5rem;
        position: relative;
    }
    .checkbox-box span:after{
        content:"\00a0";
        display: inline-block;
        border:0.3rem solid #fff;
        border-top-width:0;
        border-right-width:0;
        width:1.2rem;
        height:0.8rem;
        -webkit-transform:rotate(-50deg);
        -moz-transform:rotate(-50deg);
    }
    .checkbox-box input[type="checkbox"] + span{opacity: 0;}
    .checkbox-box input[type="checkbox"]:checked + span{opacity: 1;}
</style>
