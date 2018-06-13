<!--新的一局-->
<template>
  <div>
    <fight-header v-bind:title="title"></fight-header>
    地主: <select v-model="landowner">
    <option v-for="user in users" v-bind:value="user.id">
      {{ user.name }}
    </option>
  </select>
    倍数: <select v-model="multiply">
    <option v-for="ti in times" v-bind:value="ti.value">
      {{ ti.name }}
    </option>
  </select>
    <button @click="takeNote()">提交</button>
    <button @click="exitGame()">退出</button>


    <data-list :oneRecord="oneRecord"></data-list>

  </div>
</template>

<script>

  import FightHeader from "../../components/fightHeader"
  import DataList from '../../components/function/data-list.vue'
  import Settle from '../../components/function/settle.vue'
  import {warn} from "../../../static/cordovaplugin"
  import {showLongCenter} from "../../../static/cordovaplugin"
  import Store from "../../utils/store";


  export default {
    name: "game",
    data() {
      return {
        title: '新的一局',
        recordId: '',
        oneRecord: {users: [], rounds: []},
        landowner: -1,
        multiply: 0,
        users: [],
        times: [
          {name: '输赢倍数', value: 0},
          {name: '赢', value: 1},
          {name: '输', value: -1},
          {name: '赢两倍', value: 2},
          {name: '输两倍', value: -2},
          {name: '赢四倍', value: 4},
          {name: '输四倍', value: -4},
          {name: '赢八倍', value: 8},
          {name: '输八倍', value: -8},
        ],

      }
    },
    created: function () {
      this.setRecordId();
    },
    methods: {
      setRecordId: function () {
        //接收传递过来的参数
        let id = this.$route.params.recordId;
        this.recordId = id;
        let myurl = '/fight/showRecord/?recordId=' + id;
        this.axios.get(myurl).then((response) => {
          let one = response.data.data;
          this.$set(this, 'oneRecord', one);
          let tempUsers = one.users;
          tempUsers.splice(0, 1, {id: -1, name: '选择地主'});
          this.users = tempUsers;
        }).catch(function (response) {
          console.log(response);
        });
      },
      takeNote: function () {
        let landowner = this.landowner;
        if (landowner === -1 || landowner == null || landowner === undefined) {
          showLongCenter('地主没选好！');
          return;
        }
        let multiply = this.multiply;
        if (multiply === 0 || multiply == null || multiply === undefined) {
          showLongCenter('倍数没选好！');
          return;
        }
        let user = Store.getMap("user");
        if (user == null) {
          showLongCenter('未登录！');
          return;
        }
        let myurl = '/fight/takeNote?recordId=' + this.recordId + '&landowner=' + landowner + '&times=' + multiply + '&loginUserId=' + user.id;

        this.axios.get(myurl).then((response) => {
          if (response.data.result === 1) {
            let one = response.data.data;
            this.$set(this, 'oneRecord', one);
          }
        }).catch(function (response) {
        });
      },
      exitGame: function () {
        warn("退出后无法继续记账", "退出", "OK");
        let user = Store.getMap("user");
        let myurl = '/fight/exit?recordId=' + this.recordId+ '&loginUserId=' + user.id;
        this.axios.get(myurl).then((response) => {
          if (response.data.result === 1) {
            this.$router.push({path: '/'})
          }
        }).catch(function (response) {
        });
      },

    },
    components: {
      FightHeader, DataList, Settle
    }
  }
</script>

<style scoped>

</style>
