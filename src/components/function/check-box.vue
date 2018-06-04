<template>
  <div class="slide-checkbox">
    <input type="checkbox" name="checkbox" id="SlideCheck" />
    <label for="SlideCheck"></label>
  </div>
</template>

<script>
    export default {
        name: "check-box"
    }
</script>

<style scoped>
  .slide-checkbox {
    position: relative;
    width: 120px;
    height: 40px;
    line-height: 40px;
    border-radius: 30px;
    background: #4fbe79;
  }

  .slide-checkbox input[type=checkbox] {
    visibility: hidden;
  }

  .slide-checkbox label {
    position: absolute;
    height: 30px;
    width: 30px;
    left: 5px;
    top: 5px;
    background: #FFFFFF;
    border-radius: 50% 50%;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    -o-transition: all .4s ease;
    -ms-transition: all .4s ease;
    transition: all .4s ease;
  }

  .slide-checkbox input[type=checkbox]:checked + label {
    left: 85px;
  }
</style>
