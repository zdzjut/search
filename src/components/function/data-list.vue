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
        <td v-for="(one,index) in round.slice(0,5)">
          <!--round[0]代表序号-->
          <span :class="{win:index===round[5],lose:index===round[5]*-1}">{{one}}</span>
        </td>
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
    //   /** 如果需要传参数进spanClass,那就在methods创建方法。computed内创建的属性不接受参数 */
    //   spanClass () {
    //     // 在这里面你可以输出result中的内容看看
    //     let className = {
    //       cola: this.oneRecord.result[round[0]].no===one&& this.oneRecord.result[round[0]].win===1
    //     };
    //     return className
    //   }
    // },
    watch: {
      oneRecord: {
        handler(val) {
          console.log('发生变化', val)
        },
        deep: true
      }
    },
    props: {
      oneRecord: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }

</script>

<style scoped>
  .win {
    color: #ff2626;
  }

  .lose {
    color: #21c800;
  }
</style>
