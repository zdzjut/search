<!--从后台取数据,每局的数据-->
<template>
  <div class="data-list">

    <table class="this-page">
      <tr>
        <th v-for="user in oneRecord.users"><span v-text="user.name"></span></th>
      </tr>
      <tr v-for="round in oneRecord.rounds">
        <td v-for="(one,index) in round.slice(0,5)">
          <!--round[0]代表序号，round[5]代表结果-->
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
      return {}
    },
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

  .data-list {
    text-align: center;
    width: 100%;
  }

  .this-page {
    font-size: 1.5rem;
    width: 100%;
    border: 0;
  }

  .this-page th {
    background-color: #B8D7FF;
    color: #000000
  }

  .this-page, .this-page th, .this-page td {

    /*padding:4px;*/
    border-collapse: collapse;
  }

  .this-page, .this-page th, .this-page td {

  }

  .this-page th, .this-page td {
    width: 20%;
    height: 2.2rem;
  }

  .this-page tr {
    /*border: 1px solid #d6e8fe;*/
  }

  .this-page tr:nth-child(odd) {
    background-color: #e7f1fe;
  }

  .this-page tr:nth-child(even) {
    background-color: #fdfdfd;
  }
</style>
