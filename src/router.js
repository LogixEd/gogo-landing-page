import Vue from "vue";
import Router from "vue-router";
import About from './views/About.vue'
import HomePage from './views/HomePage.vue'
import FAQ from './views/FAQ.vue'
import Contact from './views/Contact.vue'
import Product from './views/Product.vue'
import WebHeader from './layout/WebHeader.vue'
import WebFooter from './layout/WebFooter.vue'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "homepage",
      components: {
        header: WebHeader,
        default: HomePage,
        footer: WebFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: WebHeader,
        default: About,
        footer: WebFooter
      }
    },
    {
      path: "/FAQ",
      name: "FAQ",
      components: {
        header: WebHeader,
        default: FAQ,
        footer: WebFooter
      }
    },
    {
      path: "/contact",
      name: "Contact",
      components: {
        header: WebHeader,
        default: Contact,
        footer: WebFooter
      }
    },
    {
      path: "/product",
      name: "Product",
      components: {
        header: WebHeader,
        default: Product,
        footer: WebFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
