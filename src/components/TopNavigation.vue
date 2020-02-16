<template>
  <nav class="nav">
    <g-link class="nav-link" to="/">Hello</g-link>
    <g-link class="nav-link" to="/about">About</g-link>
<!--    <g-link class="nav-link" to="/blog">Blog</g-link> -->
    <toggle-theme></toggle-theme>
  </nav>
</template>
<script>
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  name: "TopNavigation",
  components: {
    ToggleTheme
  }
};

</script>
<style>
.nav {
  display: flex;
}
.nav-link {
  display: flex;
  margin-left: 0.5rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5rem solid var(--nav-bottom);
  box-sizing: border-box;
  padding: 0.5rem 0.25rem 0 0.25rem;
}

.nav-link:hover,
.nav-link:focus {
  border-bottom-color: var(--nav-bottom-hover);
  color: var(--header-hover);
}
.nav-link.active--exact,
.nav-link.active--exact:hover,
.nav-link.active--exact:focus {
  border-bottom-color: var(--nav-bottom-hover);
  color: #ffffff;
  cursor: default;
  border-bottom: 0.5rem solid var(--nav-bottom-hover);
}
</style>