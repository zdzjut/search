<!--从后台取数据,每局的数据-->
<template>
  <div>
    <table>
      <tr>
        <th v-for="user in oneRecord.users"><span v-text="user.name"></span></th>
      </tr>
      <!--rounds代表多少回合-->
      <tr v-for="round in oneRecord.rounds">
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
        // userList: [],
        // rounds: [],
      }
    },
    created: function () {
      // this.search();
    },
    methods: {
      // search: function () {
      //   let oneRecord = this.oneRecord;
      //   console.log(oneRecord);
      //   this.userList = oneRecord.users;
      //   this.rounds = oneRecord.rounds;
      //
      // }
    },
    watch: {
      oneRecord: {
        handler (val) {
          console.log('发生变化', val)
        },
        deep: true
      }
    },
    props:{
      oneRecord:{
        type:Object,
        default () {
          return {}
        }
      }
    }
  }

</script>

<style scoped>

</style>
