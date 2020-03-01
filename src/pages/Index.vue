<template>
  <Layout>
    <section class="full-screen">
      <div class="intro-grid">
        <div class="intro-grid__column site-title">
                  <h1 class="intro__headline" id="namespace" ref="introHeadline">
          <span class="intro__headline-word">Hi,</span>
          <span class="intro__headline-word">I'm</span>
          <span class="intro__headline-word">Phil</span>
        </h1>
        </div>
        <div class="intro-grid__column"></div>
      </div>

      <g-image
        src="~/images/phil-treated.png"
        alt="stylized headshot of Phil"
        width="350"
        fit="cover"
      />
      <p
        class="intro__text"
      >I'm a campaigner turned technologist; I build and manage platforms, products, and projects with purpose.</p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
    meta: [
      {
        name: "description",
        content:
          "I'm a digital tech professional working for progressive campaigns and nonprofit organizations, and this is my website"
      },
      { name: "og:title", content: "Phillip Kent Knight - Campaign Tech" },
      {
        name: "og:description",
        content:
          "I'm a digital tech professional working for progressive campaigns and nonprofit organizations, and this is my website"
      },
      { name: "og:url", content: "https://phillipknight.github.io" }
    ]
  }
};
</script>

<style>
.intro {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.full-screen {
  height: calc(100vh - 3rem);
  min-height: fit-content;
  /* SAVE IMAGE STYLE FOR LATER
  background: url(~@/images/beard.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left; */
  background: var(--navy);
}

.half-screen:first-child {
  height: calc(50vh - 3em);
}

.intro__headline {
  font-size: 25vh;
  font-family: "Bebas Neue", "Tungsten", Impact, Helvetica, sans-serif;
  text-transform: uppercase;
  line-height: 0.85;
  font-weight: normal;
}

.intro__headline-word {
  display: block;
}

.intro__headline-word:nth-child(1) {
  color: white;
}
.intro__headline-word:nth-child(2) {
  color: var(--pink);
}

.intro__headline-word:nth-child(3) {
  color: var(--mint);
}
.intro__text {
  text-align: center;
  margin: 1rem;
}

.quick-links-section {
  height: 50vh;
  min-height: fit-content;

  display: flex;
  justify-content: center;
}

.quick-links__link {
  margin: 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: lowercase;
  font-weight: bold;
  color: var(--secondary-body-color);
  width: 9rem;
  border: 1px solid var(--link);
}

.quick-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.quick-links__heading {
  font-size: 1.25rem;
  text-transform: lowercase;
  margin: 0;
}

.info-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
