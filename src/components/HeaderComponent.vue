<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <top-navigation></top-navigation>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import TopNavigation from "~/components/TopNavigation.vue";

export default {
  components: {
    TopNavigation
  }
};
</script>
<style>
@media screen and (max-width: 1024px) {
  /* make room for header when fixed */
  .layout {
    margin-top: 4rem;
  }
  /* fix header on mobile and tablet sizes */
  .header {
    position: fixed;
    top: 0;
    width: 100%;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  max-width: 100%;
  height: 3rem;
  font-family: sans-serif;
  color: white;
  background-color: var(--nav-bg);
  z-index: 9999;
}

.header a {
  color:blue;
  color: var(--nav-link);
  text-decoration: none;
  text-transform: lowercase;
}
</style>
