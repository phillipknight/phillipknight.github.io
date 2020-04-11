<template>
  <nav class="nav" aria-label="Site Navigation">
    <g-link class="nav__link" to="/">Hello</g-link>
    <g-link class="nav__link" to="/about">About</g-link>
<!--    <g-link class="nav-link" to="/blog">Blog</g-link> -->
<!-- HIDE THEME TOGGLE   <toggle-theme></toggle-theme> -->
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
.nav__link {
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5rem solid transparent;
  box-sizing: border-box;
  padding: 0.5rem 0.5rem 0 0.5rem;
}

.nav__link:hover,
.nav__link:focus {
  border-bottom-color: var(--nav-bottom-hover);
  color: var(--nav-focus);
}
.nav__link.active--exact,
.nav__link.active--exact:hover,
.nav__link.active--exact:focus {
  color: var(--nav-active);
  cursor: default;
  border-bottom: 0.5rem solid var(--nav-bottom-hover);
  background: var(--nav-active-bg);
}
</style>