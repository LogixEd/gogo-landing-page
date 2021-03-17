<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
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
          <base-button type="primary">Buy</base-button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 0rem 1rem !important;
  height: 48px !important;
  padding: 10px;
  z-index: 9990;
  color: black !important;
  top: 48px;
  position: fixed;
}
.searchbox {
  border-radius: 40px !important;
  
}
.nav-link {
    margin-right: 0rem !important;
}
.navbar-brand {
    padding-top: 0rem !important;
}
</style>