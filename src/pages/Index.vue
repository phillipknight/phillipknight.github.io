<template>
  <Layout>
    <section class="center-flex half-screen">
      <h1 class="intro__heading" id="namespace">Hi, I'm Phil!</h1>
      <p
        class="intro__text"
      >I'm a campaigner turned technologist; I build and manage platforms, products, and projects with purpose.</p>
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

.full-screen {
  height: 100vh;
}

.half-screen {
  height: 50vh;
    min-height: fit-content;

}

.half-screen:first-child {
  height: calc(50vh - 3em);
}

.intro__heading {
  margin-bottom: 0;
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
