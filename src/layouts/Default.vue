<template>
  <div class="layout">
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>

</script>
<style>
body {
  --dark-grey: #353535;
  --orange: #ff7e00;
  --opaque-bg: #ffffffcc;
  --header-bg: var(--orange);
  --header-link-color: white;
  --header-hover: black;
  --nav-bottom: var(--header-bg);
  --nav-bottom-hover: black;
  --body-bg: white;
  --body-copy: black;
  --link: var(--orange);

  font-family: sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--body-bg);
  color: var(--body-copy);

  scroll-snap-type: y mandatory;
}

body[data-theme="dark"] {
  --opaque-bg: #0000009c;
  --header-bg: var(--dark-grey);
  --header-link-color: white;
  --header-hover: var(--orange);
  --nav-bottom: var(--header-bg);
  --nav-bottom-hover: var(--orange);
  --body-bg: black;
  --body-copy: white;
  --link: var(--orange);
}

a {
  color: var(--link);
}

.button {
  border: 1px solid var(--link);
  padding: 0.5rem;
  text-decoration: none;
  opacity: 0.8;
  text-align: center;
  width: fit-content;
  height: fit-content;
}
.button:hover,
.button:focus {
  opacity: 1;
}
.layout {
  margin: 0;
}

div.container p, div.container h1, div.container h2  {
  margin-left:1rem;
  margin-right:1rem;
}

img {
  max-width: 100%;
}

</style>
