<!-- App -->
<template>
  <div class="main">{{mainText}}</div>
</template>

<script>
export default {
  data () {
    return {
      mainText: 'Hello Viewport Unit'
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang="less">
  @import url('../assets/style/mixin.less');
  .main{
    margin: 20px auto;
    width: 700px;
    height: 200px;
    font-size: 24px;
    // postcss-wtite-svg 做出来的线只有上下两条.
    // 暂无研究具体原因
    // 暂时使用伪元素 scale 的方案做1px border
    border: 1px solid transparent; 
    border-width: 0 0 0 1px;
    border-image: svg(1pxBorder param(--color #000)) 0 2 stretch;
  }
</style>