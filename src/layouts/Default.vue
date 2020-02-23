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
/* live in a casually responsive world */

* {
  max-width: 100%;
  box-sizing: border-box;
}

/* default mode body styles */
body {
  --first-color: #ff7e00;
  --second-color: black;
  --third-color: #353535;
  --one-two: var(--first-color);
  --one-three: var(--first-color);
  --two-one: var(--second-color);
  --two-three: var(--second-color);
  --three-one: var(--third-color);
  --three-two: var(--third-color);
  --primary-color: var(--orange);
  --primary-body-color: black;
  --primary-background-color: white;
  --secondary-body-color: white;
  --secondary-background-color: var(--orange);
  --secondary-color: var(--dark-grey);
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
}
/* dark mode */
body[data-theme="dark"] {
  --one-two: var(--second-color);
  --one-three: var(--third-color);
  --two-one: var(--first-color);
  --two-three: var(--third-color);
  --three-one: var(--first-color);
  --three-two: var(--second-color);
  --dark-only-border: var(--third-color);
  --primary-color: var(--dark-grey);
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

div.container p,
div.container h1,
div.container h2 {
  margin-left: 1rem;
  margin-right: 1rem;
}

img {
  max-width: 100%;
}
</style>
