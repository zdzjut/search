<!--从后台取数据-->
<template>
  <div>
    <table>
      <tr>
        <th v-for="user in userList"><span v-text="user"></span></th>
      </tr>
      <tr v-for="record in list">
        <td v-for="one in record"><span v-text="one"></span></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "data-list",
    data() {
      return {
        userList: ['序号', 'A', 'B', 'C', 'D'],
        list: [
          [2, 20, 20, 20, -60], [1, 10, 10, 10, -30]
        ],
        isFinished:false,
        myurl: '',
      }
    },
    created: function () {
      this.search();
    },

    // methods: {
    //   search: function () {
    //     let myself = this;
    //     let myurl = this.myurl;
    //     this.axios.get(myurl).then(function (response) {
    //       //设定每局结构， { user-list ,list{record-list} },user 第一个是序号
    //       let userList = response.data.userList;
    //       let list = response.data.list;
    //       for (let listElement of list) {
    //         listElement
    //       }
    //       myself.dataToList = response.data;
    //     }).catch(function (response) {
    //       console.log(response);
    //     });
    //   }
    // },
    // // 传递数据，本组件标签传递过去后 v-bind：props 对应的值，就能传递相应的数据过来
    // props: ['myurl']
  }

</script>

<style scoped>

</style>
