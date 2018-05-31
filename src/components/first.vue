<template>
  <div>
    <input type="text" value="" v-model="id"/>
    <button @click="deep()">Take picture</button>
    <button @click="camera('myImage',null)">Take picture</button>
    <img id="myImage"/>
    <button @click="fetch('myImage1',null)">fetch picture</button>
    <img id="myImage1"/>
    <a href="javascript:void(0)" v-on:click="search">搜索</a>
    <a href="javascript:void(0)" v-on:click="up">上一条</a>
    <a href="javascript:void(0)" v-on:click="down">下一条</a>
    <a href="javascript:void(0)" v-on:click="first">最新一条</a>
    <br/>
    <textarea>{{ message }}</textarea>
    <br/>

    <textarea>{{ summary }}</textarea>
    <br/>
    <router-link :to="{ path: '/content'}">跳转到content</router-link>
    <br/>
    <router-link :to="{ path: '/todolist'}">跳转到todolist</router-link>
  </div>
</template>

<script>

  import {capturePictures} from "../../static/cordovaplugin"
  import {fetchPictures} from "../../static/cordovaplugin"
  import {dialogBeep} from "../../static/cordovaplugin"


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
      deep:function () {
        dialogBeep();
      },
      camera:function(imageId,url){
        capturePictures(imageId,url);
      },
      fetch:function(imageId,url){
        fetchPictures(imageId,url);
      },
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
</style>
