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
  --navy: #021a25;
  --pink: #db73a0;
  --mint: #2ba25b;

  /* header components */

  --color-alpha: white;
  --color-bravo: var(--navy);
  --nav-bg: var(--color-bravo);
  --nav-focus: var(--pink);
  --nav-active: #fff;
  --nav-bottom-hover: var(--pink);
  --nav-link:white;
  --body-bg: white;
  --body-color: var(--navy);
  --accent: var(--pink);

  font-family: sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--body-bg);
  color: var(--body-color);

  --link: var(--mint);
}
/* dark mode */
body[data-theme="dark"] {
  --body-bg: var(--navy);
  --body-color: white;

  --link: var(--mint);
}

h2,
h3 {
  color: var(--body-color);
}

a {
  color: var(--link);
  text-decoration-style: dashed;
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
