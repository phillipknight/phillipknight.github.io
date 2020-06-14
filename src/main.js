// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import HeaderComponent from "~/components/HeaderComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.component('HeaderComponent', HeaderComponent),
  Vue.component('FooterComponent', FooterComponent),
  // Add Google Fonts Globally
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap'
  }),
  // Add theme color (for supported browsers)
    // Add a meta tag
    head.meta.push({
      name: 'theme-color',
      content: '#DB73A0'
    })
   



  
}
