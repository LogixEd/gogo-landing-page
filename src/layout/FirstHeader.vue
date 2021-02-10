<template>
  <nav
    class="navbar main-nav flex-row align-items-md-center navbar-expand-lg navbar-light"
  >
    <div class="container">
      <button
        type="button"
        data-toggle="collapse"
        data-target="0.9123175080320436"
        aria-controls="0.9123175080320436"
        aria-label="Toggle navigation"
        class="navbar-toggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="0.8676037709613988" class="collapse navbar-collapse">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="/"
                ><img
                  src="https://demos.creative-tim.com/vue-argon-design-system/img/brand/white.png"
              /></a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#undefined"
                aria-label="Toggle navigation"
                class="navbar-toggler"
              >
                <span></span> <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav flex-row mr-auto ml-4 d-none d-md-flex">
          <li class="nav-item">
            <a href="/" class="nav-link-light nav-text-color">GoGoBoard</a>
          </li>
        </ul>
        <div class="d-none d-sm-block ml-auto">
          <ul class="navbar-nav ct-navbar-nav flex-row align-items-center">
            <li class="nav-item dropdown d-none">
              <a
                href="#"
                id="ct-versions"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn-link text-white dropdown-toggle mr-sm-3"
                >1.0</a
              >
              <div aria-labelledby="ct-versions" class="dropdown-menu">
                <a href="../..//docs/1.0/" class="dropdown-item active"
                  >Latest - 1.0</a
                >
              </div>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link-light nav-text-color">docs</a>
            </li>
            <li class="nav-item">
              <a
                href="https://twitter.com/creativetim"
                target="_blank"
                class="nav-link nav-link-icon"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/creativetimofficial"
                target="_blank"
                class="nav-link nav-link-icon"
                ><i class="fa fa-instagram"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/creativetimofficial"
                target="_blank"
                class="nav-link nav-link-icon"
                ><i class="fa fa-dribbble"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.instagram.com/creativetimofficial"
                target="_blank"
                class="nav-link nav-link-icon"
                ><i class="fa fa-github"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="search-box">
          <input
            aria-label="Search"
            autocomplete="off"
            spellcheck="false"
            value=""
          />
          <!---->
        </div>
        <a
          href="https://www.creative-tim.com/product/vue-argon-design-system"
          target="_blank"
          class="btn btn-neutral btn-icon ml-sm-3 d-none d-md-block"
          ><span class="btn-inner--icon"
            ><i class="fa fa-cloud-download mr-2"></i
          ></span>
          <span class="nav-link-inner--text">Download</span></a
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "",
};
</script>

<style>
.nav-text-color {
  color: #ffff;
}
.navbar-apple {
  background-color: #1d1d1f !important;
  display: block;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 50;
  height: 48px;
  line-height: 0;
}
</style>
