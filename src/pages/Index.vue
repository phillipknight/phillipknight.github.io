<template>
  <Layout>
    <section class="greet">
      <div class="intro-grid">
        <div class="intro-grid__column site-title">
          <h1 class="intro__headline" id="namespace" ref="introHeadline">
            <span class="intro__headline-word">Hi,</span>
            <span class="intro__headline-word">I'm</span>
            <span class="intro__headline-word">Phil</span>
          </h1>
        </div>
        <div class="intro-grid__column pics">
          <g-image
            src="~/images/phil-treated.png"
            alt="stylized headshot of Phil"
            width="350"
            fit="cover"
          />
          <g-image src="~/images/phil-treated.png" alt width="350" fit="cover" />
          <g-image src="~/images/phil-treated.png" alt width="350" fit="cover" />
        </div>
      </div>
    </section>
    <section class="intro-text-section">
      <div class="intro__text">
        <h2
          class
        >A campaigner turned technologist; I build and manage projects, products, and platforms with purpose.</h2>
        <g-link to="/about">
          Learn more about my work
          <svg
          aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 640 640"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            style="
    fill: var(--mint);
    margin-left: 0.5rem;
    width: 1.5rem;
"
          >
            <path
              d="M640.012 319.953L394.729 74.788H163.266l163.36 163.361H-.012v163.702h326.638l-163.36 163.361h231.463z"
            />
          </svg>
        </g-link>
      </div>
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

.intro-grid__column.pics {
  display: flex;
  overflow-x: hidden;
  min-width: fit-content;
}

.intro-grid {
  display: grid;
  grid-template-columns: 4fr 4fr;
  align-items: center;
  height: calc(100vh - 3rem);
  height: 100vh;
}

.intro-grid__column.pics img {
  margin-left: 1rem;
}

.intro-grid__column.site-title {
  display: flex;
  justify-content: center;
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

.intro-text-section {
  display: flex;
  justify-content: flex-end;
}

.intro__text {
  text-align: left;
  padding: 0 3rem;
}

.intro__text a {
  color: var(--mint);
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.intro__text a:focus, .intro__text a:hover {
    font-size: larger;
}

@media only screen and (min-width: 926px) {
  .intro__text {
    width: 50%;
  }
}
</style>
