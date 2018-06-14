<!--继续-->
<template>
  <div class="data-list">
    <fight-header v-bind:title="title"></fight-header>

    <table class="this-page">
      <tr>
        <th>用户</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      <!--rounds代表多少回合-->
      <tr v-for="record in history">
        <!--round里有4个-->
        <td><span v-for="user in (record.users).slice(1,5)">{{user.name}}&nbsp;</span></td>
        <td><span>{{record.date}}</span></td>
        <td>
          <router-link :to="{ path: '/game/'+record.id}">
            <span class="btn">继续</span>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import FightHeader from "../../components/fightHeader"

  export default {
    name: "continueGame",
    data() {
      return {
        title: '正在进行列表',
        history:[],
      }
    },
    created:function () {
      this.showHistory();
    },
    methods: {
      showHistory: function () {
        let myurl = '/fight/showRecordList';
        this.axios.get(myurl).then((response) => {
          let history = response.data.data;
          this.$set(this, 'history', history);
        }).catch(function (response) {
          console.log(response);
        });
      }
    },
    components: {
      FightHeader
    }
  }
</script>

<style scoped>
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
  .btn{
    color: blue;
  }
</style>
