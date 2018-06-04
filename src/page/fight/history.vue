//历史
<template>
  <div class="dialog">
      <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
      <div class="dialog-cover back" v-if="isShow" @click="closeMyself"></div>
      <!-- transition 这里可以加一些简单的动画效果 -->
      <transition name="drop">
          <!--style 通过props 控制内容的样式 -->
          <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}" v-if="isShow">
              <div class="dialog_head back">
                <!--弹窗头部 title-->
                <slot name="header">提示信息</slot>
              </div>
              <div class="dialog_main" :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
                <!--弹窗的内容-->
                <slot name="main">弹窗内容</slot>
              </div>
              <!--弹窗关闭按钮-->
              <div class="foot_close" @click="closeMyself">
                <div class="close_img back"></div>
              </div>
          </div>
      </transition>
  </div>
</template>

<script>
    export default {
        name: "new-game"
    }
</script>

<style scoped>

</style>
