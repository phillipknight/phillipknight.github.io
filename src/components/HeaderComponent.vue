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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  max-width: 100%;
  height: 3rem;
  font-family: sans-serif;
  background-color: var(--header-bg);
  color: var(--header-link-color);
}
.header a {
  color: var(--header-link-color);
  text-decoration: none;
  text-transform: lowercase;
}




</style>
