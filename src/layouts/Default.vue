<template>
  <div class="layout">
    <HeaderComponent></HeaderComponent>
    <div class="container">
      <slot />
    </div>
    <FooterComponent
      twitterID="phillipkent"
      linkedinID="phillipkentknight"
      instagramID="phillipkent"
      facebookID="phillipkent"
      devID="phillipkent"
    ></FooterComponent>
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
  --color-alpha: black;
  --color-bravo: white;
  --main-color: #eb0000;

  /* header components */

  --nav-bg: var(--main-color);
  --nav-link: #ffffff;
  --nav-active: #fff;
  --nav-active-bg: #920000;
  --nav-bottom: var(--color-bravo);
  --nav-bottom-hover: var(--color-alpha);
  --nav-focus: black;

  --card-border: var(--main-color);
  --card-headline-color: #ffffff;
  --card-headline-bg: var(--main-color);
  --card-heading-icons: #920000;
  --card-body-bg:none; 
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--color-bravo);
  color: var(--color-alpha);
}
/* dark mode */
body[data-theme="dark"] {
  --color-alpha: white;
  --color-bravo: #0f0f0f;
  --nav-bg: black;
  --nav-focus: #eb0000;
  --nav-active: #fff;
  --nav-bottom-hover: var(--main-color);

  --card-border: var(--main-color);
  --card-headline-color: #ffffff;
  --card-headline-bg: #270000;
  --card-heading-icons: #920000;
  --card-body-bg: #1b1b1b;
}

h2,
h3 {
  color: var(--main-color);
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

img {
  max-width: 100%;
}
</style>
