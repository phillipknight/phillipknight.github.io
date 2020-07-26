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
          <g-image src="~/images/phil-treated.png" alt="" width="350" fit="cover" />
          <g-image src="~/images/phil-treated.png" alt="" width="350" fit="cover" />
        </div>
      </div>
    </section>
    <section class="intro-text-section">
      <div class="intro__text">
        <h2>A campaigner turned technologist; I build and manage products with purpose.</h2>
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
          "A former campaign organizer turned digital technologist, now working as a product manager for innovative nonprofit organiations and advocacy campaigns."
      },
      { name: "og:title", content: "Phillip Kent Knight - Campaign Technologist & Product Manager" },
      {
        name: "og:description",
        content:
          "Building digital products for progress."
      },
      { name: "og:url", content: "https://phillipkentknight.com" }
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



.intro-grid__column.pics {
  display: flex;
  overflow-x: hidden;
  min-width: fit-content;
}

.intro-grid {
  display: grid;
  grid-template-columns: 4fr 4fr;
  align-items: center;
  height: 100vh;
}

.intro-grid__column.pics img {
  margin-left: 1rem;
  height: intrinsic;
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
  color: var(--body-color);
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
.intro__text h2 {
  color: var(--body-color);
}

.intro__text a {
  color: var(--mint);
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size:larger;
}



@media only screen and (min-width: 926px) {
  .intro-grid {
      height: calc(100vh - 3rem);
  }
  .intro__text {
    width: 50%;
  }
}
</style>
