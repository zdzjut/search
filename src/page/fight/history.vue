//历史
<template>
  <div class="data-list">
    <fight-header v-bind:title="title"></fight-header>
    <table class="this-page">
      <tr>
        <th style="width: 20%">序号</th>
        <th style="width: 25%">用户</th>
        <th style="width: 35%">时间</th>
        <th style="width: 20%">操作</th>
      </tr>
      <tr v-for="record in history">
        <td><span>{{record.id}}</span></td>
        <td><span v-for="user in (record.users).slice(1,5)">{{user.name}}&nbsp;</span></td>
        <td><span>{{record.date}}</span></td>
        <td>
          <router-link :to="{ path: '/historyDataList/'+record.id}">
            <span class="btn">查看</span>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import FightHeader from "../../components/fightHeader"


  export default {
    name: "new-game",
    data() {
      return {
        history: [],
        title: '历史列表',
      }
    },
    created: function () {
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
    height: 2.2rem;
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
