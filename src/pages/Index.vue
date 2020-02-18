<template>
  <Layout>
    <section class="center-flex half-screen">
      <h1 class="heading" id="namespace">Hi, I'm Phil!</h1>
      <p
        class="intro-text"
      >I'm a campaigner turned technologist; I build and manage platforms, products, and projects with purpose.</p>
    </section>

    <section class="half-screen">
      <div class="links-section">
        <nav class="quick-links" aria-labelledby="quick-links-heading">
          <h2 id="quick-links-heading">Quick Links</h2>
          <a
            class="quick-link"
            href="https://twitter.com/phillipkent"
            target="_blank"
            rel="noopener"
          >Twitter</a>
          <a
            class="quick-link"
            href="https://linkedin.com/in/phillipkentknight"
            target="_blank"
            rel="noopener"
          >Linkedin</a>
          <a
            class="quick-link"
            href="https://instagram.com/phillipkent"
            target="_blank"
            rel="noopener"
          >Instagram</a>
          <a
            class="quick-link"
            href="https://messenger.com/t/phillipkent"
            target="_blank"
            rel="noopener"
          >Messenger</a>
          <a
            class="quick-link"
            href="https://dev.to/phillipkent"
            target="_blank"
            rel="noopener"
          >dev.to</a>
        </nav>
      </div>
    </section>
    <footer class="footer">
    </footer>
    
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

.full-screen {
  height: 100vh;
}

.half-screen {
  height:50vh;
}


.half-screen:first-child {
  height: calc(50vh - 3em);
}

.heading {
  margin-bottom: 0;
}

.intro-text {
  text-align: center;
}

.links-section {
  height: 50vh;
  min-height: 320px;
  display: flex;
  justify-content: center;
  background: var(--primary-color);
}

.quick-link {
  margin: 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: lowercase;
  font-weight: bold;
  background-color: #2d2d2d;
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

#quick-links-heading {
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
