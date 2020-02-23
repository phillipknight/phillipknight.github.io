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
