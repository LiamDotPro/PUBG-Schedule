<template>
  <div class="PageTopInfo">
    <div class="container">

    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PageTopInfo',
    data() {
      return {
        pair: 'loading'
      }
    },
    methods: {
      testAxios: function () {
        axios.get('http://localhost:2000/test').then(res => {
          this.pair = res.data.Data.Buy[0].Price
        }).catch((e) => {
          console.log(e)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

  .PageTopInfo {

    .media {
      margin-top: 60px;
      margin-bottom: 60px;
    }

    .picture-square {
      margin-top: 80px;
    }

    .info-text {

      margin-top: 200px;

      h1 {
        font-size: 36px;
      }

      h2 {
        font-size: 20px;
      }
    }
  }

</style>
