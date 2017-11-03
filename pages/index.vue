<template>
  <section class="index">
    <page-header/>
    <page-top-info></page-top-info>
  </section>
</template>

<script>
  import PageHeader from '../components/PageHeader.vue'
  import PageTopInfo from '../components/PageTopInfo.vue'

  export default {
    components: {
      PageHeader,
      PageTopInfo
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    background-color: #dbdbdb;
    min-height: 1080px;
  }
</style>
