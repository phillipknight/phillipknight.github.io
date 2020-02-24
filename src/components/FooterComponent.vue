<template>
  <footer class="footer">

    <ul class="social-links">
      <li v-if="twitterID" class="social-link__twitter">
        <a target="_blank" rel="noopener" :href="'https://twitter.com/'+ twitterID">twitter</a>
      </li>
      <li v-if="linkedinID" class="social-link__linkedin">
        <a target="_blank" rel="noopener" :href="'https://linkedin.com/in/' + linkedinID">linkedin</a>
      </li>
      <li v-if="instagramID" class="social-link__instagram">
        <a target="_blank" rel="noopener" :href="'https://instagram.com/' + instagramID">instagram</a>
      </li>
      <li v-if="facebookID" class="social-link__messenger">
        <a target="_blank" rel="noopener" :href="'https://messenger.com/t/' + facebookID">messenger</a>
      </li>
      <li v-if="devID" class="social-link__dev">
        <a target="_blank" rel="noopener" :href="'https://dev.to/' + phillipkent">dev</a>
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
    twitterID: String,
    linkedinID: String,
    instagramID: String,
    facebookID: String,
    devID: String
  }
};
</script>
<style>
.social-links {
    display:flex;
    justify-content: space-around;
    padding:0;
    margin:0.5rem;
    list-style:none;
    list-style-type: none;
}

.footer {
    margin-top:3rem;
}
</style>
