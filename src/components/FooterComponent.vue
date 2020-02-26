<template>
  <footer class="footer">
    <ul class="social-links">
      <li v-if="linkedinID" class="social-link__linkedin">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          :href="'https://linkedin.com/in/' + linkedinID"
        >linkedin</a>
      </li>
      <li v-if="devID" class="social-link__dev">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          :href="'https://dev.to/' + devID"
        >dev.to</a>
      </li>
      <li v-if="instagramID" class="social-link__instagram">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          :href="'https://instagram.com/' + instagramID"
        >instagram</a>
      </li>
      <li v-if="facebookID" class="social-link__messenger">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          :href="'https://messenger.com/t/' + facebookID"
        >messenger</a>
      </li>
      <li v-if="twitterID" class="social-link__twitter">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          :href="'https://twitter.com/'+ twitterID"
        >twitter</a>
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
.footer {
  background-color: var(--nav-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3rem;
  margin-top: 4rem;
}
.social-links {
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0.5rem;
  list-style: none;
  list-style-type: none;
}
.social-links__link {
  font-weight: bold;
  color: var(--nav-link);
}
</style>
