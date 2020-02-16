<template>
  <Layout>
    <div class="center-flex">
      <h1>Hi, I'm Phil!</h1>

      <p>I'm a technologist focused on campaigns</p>
    </div>
    <ul>
      <li>👨‍💻 Advocacy Technologist</li>
      <li>📣 Campaigner</li>
      <li>Developer</li>
      <li>Product Manager</li>
    </ul>
    <p class="home-links">
      <a href="https://twitter.com/phillipkent" target="_blank" rel="noopener">Twitter</a>
      <a href="https://linkedin.com/in/phillipkentknight" target="_blank" rel="noopener">Linkedin</a>
      <a href="https://instagram.com/phillipkent" target="_blank" rel="noopener">Instagram</a>
      <a href="https://dev.to/phillipkent" target="_blank" rel="noopener">Dev Community</a>
    </p>
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
.home-links a {
  margin-right: 1rem;
}


.center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
</style>
