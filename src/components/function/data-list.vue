<!--从后台取数据-->
<template>
  <div>
    <table>
      <tr>
        <th v-for="user in userList"><span v-text="user"></span></th>
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
        // userList: ['序号', 'A', 'B', 'C', 'D'],
        // rounds: [
        //   [2, 20, 20, 20, -60], [1, 10, 10, 10, -30]
        // ],
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
        let myurl = this.myurl;
        this.axios.get(myurl).then(function (response) {
          //设定每局结构， { user-list ,list{record-list} },user 第一个是序号
          myself.userList = response.data.userList;
          myself.list = response.data.list;

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
