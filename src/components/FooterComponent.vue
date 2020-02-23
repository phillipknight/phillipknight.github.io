<template>
  <footer class="footer">
    <g-link to="/">🏠</g-link>

    <ul class="social-links">
      <li class="social-link__twitter">
        <a target="_blank" rel="noopener" href="https://twitter.com/">twitter</a>
      </li>
      <li class="social-link__linkedin">
        <a target="_blank" rel="noopener" href="https://linkedin.com/in/phillipkentknight">linkedin</a>
      </li>
      <li class="social-link__instagram">
        <a target="_blank" rel="noopener" href="https://instagram.com/phillipkent">instagram</a>
      </li>
      <li class="social-link__messenger">
        <a target="_blank" rel="noopener" href="https://messenger.com/t/phillipkent">messenger</a>
      </li>
      <li class="social-link__dev">
        <a target="_blank" rel="noopener" href="https://dev.to/phillipkent">dev</a>
      </li>
    </ul>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
//import TopNavigation from "~/components/TopNavigation.vue";

export default {
  props: {
      twitter:String,
      linkedinID:String,
      instagramID:String,
      facebookID:String,
      devID:String

    
  }
};
</script>
<style>
</style>
