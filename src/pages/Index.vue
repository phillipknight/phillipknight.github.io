<template>
  <Layout>
    <section class="center-flex half-screen">
      <h1 class="heading" id="namespace">Hi, I'm Phil!</h1>
      <p class="intro-text">I'm a campaigner turned technologist; I build and manage platforms, products, and projects with purpose.</p>
    </section>

    <section class="quick-links">
      <ul>
        <li>
          <a href="https://twitter.com/phillipkent" target="_blank" rel="noopener">Twitter</a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/phillipkentknight"
            target="_blank"
            rel="noopener"
          >Linkedin</a>
        </li>
        <li>
          <a href="https://instagram.com/phillipkent" target="_blank" rel="noopener">Instagram</a>
        </li>
        <li>
          <a href="https://dev.to/phillipkent" target="_blank" rel="noopener">Dev Community</a>
        </li>
      </ul>
    </section>
    <section class="half-screen">
      <ul>
        <li>Advocacy Technologist</li>
        <li>📣 Campaigner</li>
        <li>Developer</li>
        <li>Product Manager</li>
      </ul>

    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>


.center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.half-screen {
  height: calc(50vh - 3em);
}

.heading {
  margin-bottom: 0;
}

.intro-text {
  text-align: center;
}
</style>
