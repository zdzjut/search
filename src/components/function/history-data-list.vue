<!--历史详情列表-->
<template>
  <div>
    <table>
      <tr>
        <th v-for="user in userList"><span v-text="user.name"></span></th>
      </tr>
      <!--rounds代表多少回合-->
      <tr v-for="round in rounds">
        <!--round里有4个-->
        <td v-for="one in round"><span v-text="one"></span></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "data-list",
    data() {
      return {
        userList: [],
        rounds: [],
      }
    },
    created: function () {
      this.search();
    },

    methods: {
      search: function () {
        let myself = this;
        let myurl = this.myurl+'?recordId=1';
        this.axios.get(myurl).then(function (response) {
          //设定每局结构， { user-list ,list{record-list} },user 第一个是序号
          myself.userList = response.data.data.users;
          myself.rounds = response.data.data.rounds;

        }).catch(function (response) {
          console.log(response);
        });
      }
    },
    // 传递数据，本组件标签传递过去后 v-bind：props 对应的值，就能传递相应的数据过来
    props: ['myurl']
  }

</script>

<style scoped>

</style>
