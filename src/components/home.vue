<template>
  <div>
    <router-link :to="{ path: '/content'}" class="btn">添加用户</router-link>
    <router-link :to="{ path: '/content'}" class="btn">新一局</router-link>
    <router-link :to="{ path: '/content'}" class="btn">继续</router-link>
    <router-link :to="{ path: '/content'}" class="btn">查看历史战况</router-link>
    <router-link :to="{ path: '/content'}" class="btn">查看个人信息</router-link>
    <router-link :to="{ path: '/content'}" class="btn">退出</router-link>

    <input type="button" value="添加用户" onclick="addUser()"><div style="height: 10px"></div>
    <input type="button" value="新一局" onclick="toChoose()"><div style="height: 10px"></div>
    <input type="button" value="继续" onclick="goOn()"><div style="height: 10px"></div>
    <input type="button" value="查看历史战况" onclick="toShowHistoryList()"><div style="height: 10px"></div>
    <input type="button" value="查看个人信息" onclick="toUser()"><div style="height: 10px"></div>
    <input type="button" value="退出"><div style="height: 10px"></div>

    <br/>
    <textarea>{{ message }}</textarea>
    <br/>

    <textarea>{{ summary }}</textarea>
    <br/>
    <router-link :to="{ path: '/content'}" class="btn">跳转到content</router-link>
    <br/>
    <router-link :to="{ path: '/todolist'}">跳转到todolist</router-link>
  </div>
</template>

<script>
  export default {
    name: 'first',
    data() {
      return {
        message: '',
        summary: '',
        id: ''
      }
    },
    methods: {
      up: function () {
        this.$api.get(`up/${this.id}`, null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      },

      down: function () {
        this.$api.get(`down/${this.id}`, null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      },
      search: function () {
        this.$api.get(`search/${this.id}`, null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      },
      first: function () {
        this.$api.get('first', null, r => {
          this.message = r.data.message;
          this.summary = r.data.summary
        });
      }
    }
  }
</script>

<style scoped>
  textarea{
    width: 80%;
  }
  .btn{
    background-color: deepskyblue;
  }

</style>
