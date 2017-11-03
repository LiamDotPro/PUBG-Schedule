<template>
  <div class="page-header">
    <div class="columns">
      <div class="column is-12">
        <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"
                   width="112" height="28">
            </a>

            <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
      <span class="icon" style="color: #333;">
        <i class="fa fa-lg fa-github"></i>
      </span>
            </a>

            <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
      <span class="icon" style="color: #55acee;">
        <i class="fa fa-lg fa-twitter"></i>
      </span>
            </a>

            <div class="navbar-burger burger" data-target="navMenuTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navMenuTransparentExample" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Contribute
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item is-disabled">
                    Coming Soon
                  </a>

                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    <div class="version">
                      <p class="is-size-6-desktop">
                        <small>Version</small>
                      </p>
                      <p>
                        <strong>0.0.1</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-lg fa-github"></i>
        </span>
              </a>
              <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-lg fa-twitter"></i>
        </span>
              </a>
              <div class="navbar-item">
                <div class="field is-grouped">
                </div>
              </div>
            </div>
          </div>

        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-header',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

  .page-header {
  }

</style>
