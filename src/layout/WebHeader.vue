<template>
    <header class="header-global">
        <base-nav class="navbar-main-fixed" transparent type="" effect="light" expand="true">
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="../img/gogo-logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="@/img/gogo-logo.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <router-link slot="title" class="nav-link" role="button" :to="{ name: 'homepage' }">
                    <span class="nav-link-inner--text">{{$t('navHome')}}</span>
                </router-link>
                <router-link slot="title" class="nav-link" role="button" :to="{ name: 'about' }">
                    <span class="nav-link-inner--text">{{$t('navAbout')}}</span>
                </router-link>
                <a class="nav-link" href="">
                    <span class="nav-link-inner--text">{{$t('navDoc')}}</span>
                </a>
                <router-link slot="title" class="nav-link" role="button" :to="{ name: 'Product' }">
                    <span class="nav-link-inner--text">Product</span>
                </router-link>
                <router-link slot="title" class="nav-link" role="button" :to="{ name: 'FAQ' }">
                    <span class="nav-link-inner--text">FAQ</span>
                </router-link>
                <router-link slot="title" class="nav-link" role="button" :to="{ name: 'Contact' }">
                    <span class="nav-link-inner--text">ติดต่อเรา</span>
                </router-link>
            </ul>

           <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/GoGo-Board-Thailand-199024580829714" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href=""
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href=""
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://shopee.co.th/itim.shop?categoryId=100632&itemId=13027667638" target="_blank" rel="noopener"   
                       class="btn btn-outline-primary btn-icon">
                        <span class="btn-inner--icon">
                            <i class="fa fa-shopping-bag mr-2"></i>
                        </span>
                        <span class="nav-link-inner--text">{{$t('buyNow')}}</span>
                    </a>
                </li>
                <!-- <li class="nav-item d-none d-lg-block ml-lg-4"> -->
                <!-- </li> -->
            </ul>
            <div class="ml-5">
                <b-dropdown size="sm" v-bind:text="flagBtn">
                    <b-dropdown-item @click="changeLocale('th')">TH</b-dropdown-item>
                    <b-dropdown-item @click="changeLocale('en')">EN</b-dropdown-item>
                </b-dropdown>
            </div>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/modifiedComponents/baseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import i18n from '@/plugins/i18n'

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data () {
    return {
      menuLanguage: false,
      flagBtn: 'th',
      languages: [
        {  language: 'en', title: 'English'},
        {  language: 'th', title: 'ไทย'}
      ]
    }
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale
      this.flagBtn = locale
    }
  }
};
</script>
<style>
.item-muted{
    color: grey;
}
.lang-sw{
    /* width: 1px;
    height: 1px; */
    margin-right: 5vw;
}
</style>
