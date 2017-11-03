<template>
  <section>
    <page-header/>
    <page-top-info></page-top-info>
    <logo-box></logo-box>
  </section>
</template>

<script>
  import PageHeader from '../components/PageHeader.vue'
  import PageTopInfo from '../components/PageTopInfo.vue'
  import LogoBox from '../components/LogoBox.vue'

  export default {
    components: {
      LogoBox,
      PageHeader,
      PageTopInfo
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

</style>
