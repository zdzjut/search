<template>
  <div>
    <input type="text" value="" v-model="id"/>
    <button @click="deep()">Take picture</button>
    <button @click="dialogPrompt('1','2','3','4')">弹出框</button>
    <button @click="camera('myImage',null)">Take picture</button>
    <img id="myImage"/>
    <button @click="fetch('myImage1',null)">fetch picture</button>
    <img id="myImage1"/>
    <a href="javascript:void(0)" v-on:click="search">测试</a>
    <a v-text="testText">测试</a>
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
  import {dialogPrompt} from "../../static/cordovaplugin"


  export default {
    name: 'first',
    data() {
      return {
        message: '',
        summary: '',
        id: '',
        testText: '123',
      }
    },
    methods: {
      deep: function () {
        dialogBeep();
      },
      dialogPrompt: function (message, title, buttonLabels, defaultText) {
        dialogPrompt(message, title, buttonLabels, defaultText);
      },
      camera: function (imageId, url) {
        capturePictures(imageId, url);
      },
      fetch: function (imageId, url) {
        fetchPictures(imageId, url);
      },


      search: function () {
        this.axios.get('/test?test=wrong')
          .then(function (response) {
            console.log(response);
            alert(response.data);
          }).catch(function (response) {
            console.log(response);
          });
      }
    }
  }
</script>

<style scoped>
  textarea {
    width: 80%;
  }
</style>
