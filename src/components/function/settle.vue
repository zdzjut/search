<template>
  <div>
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
  </div>
</template>

<script>
  import {showLongCenter} from "../../../static/cordovaplugin"
  import {warn} from "../../../static/cordovaplugin"
  import Store from "../../utils/store";

  export default {
    name: "result",
    data() {
      return {
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
    methods: {
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
        let myself = this;

        this.axios.get(myurl).then(function (response) {
          if (response.data.result === 1) {
            myself.$router.push({path: '/game/'+myself.recordId});
          }
        }).catch(function (response) {
        });
      },
      exitGame: function () {
        warn("退出后被其他人继续记账", "退出", "OK");
        let myself = this;
        let myurl = '/fight/exitGame?recordId=' + this.recordId;
        this.axios.get(myurl).then(function (response) {
          if (response.data.result === 1) {
            myself.$router.push({path: '/'})
          }
        }).catch(function (response) {
        });
      },
      showUser: function () {
        let myself = this;
        let myurl = '/fight/showRecord/?recordId=' + this.recordId;
        this.axios.get(myurl).then(function (response) {
          let oneRecord = response.data.data;
          let tempUsers = oneRecord.users;
          let one = {id: -1, name: '选择地主'};
          tempUsers.splice(0, 1, one);
          myself.users = tempUsers;
        }).catch(function (response) {
          console.log(response);
        });
      }

    },
    created: function () {
      this.showUser()
    },

    props: ['recordId']

  }
</script>

<style scoped>

</style>
