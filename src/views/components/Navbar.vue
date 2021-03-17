<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">GoGoBoard</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-default"
        aria-controls="navbar-default"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-default">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="javascript:void(0)">
                <img src="/public/img/brand/blue.png" />
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar-default"
                aria-controls="navbar-default"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav ml-lg-auto">
          <li class="nav-item">
            <a href="/" class="nav-link nav-link-icon">Docs</a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link nav-link-icon">Download</a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link nav-link-icon">Resoures</a>
          </li>
          <li class="nav-item">
            <div class="search-box nav-link nav-link-icon">
              <input
                class="searchbox"
                aria-label="Search"
                autocomplete="off"
                spellcheck="false"
                value=""
              />
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="/"
            >
              <i class="fa fa-search " aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <SubNavbar/>
  </div>
</template>
<script>
import SubNavbar from './SubNavbar.vue'

export default {
  components: {
    SubNavbar
  }
}
</script>

<style scoped>
.navbar {
  padding: 0rem 1rem !important;
  height: 48px !important;
  padding: 10px;
  width: 100%;
  z-index: 9999;
}
.searchbox {
  border-radius: 18px !important;
  height: 26px;
}
.nav-link {
    margin-right: 0rem !important;
}
.navbar-brand {
    padding-top: 0rem !important;
}
</style>