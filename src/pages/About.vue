<template>
  <Layout>
    <h1>About me</h1>

    <g-image
      src="~/images/bw_headshot_pkk-crop.jpg"
      alt="photo of the very dashing Phillip Kent Knight"
      width="350"
      fit="cover"
    />
    <div class="about-bio">
      <h2>Tinkering with technology and trying to make a difference.</h2>
      <p>
        I’ve worked on campaigns ranging from municipal boards to United States Senate, and with organizations
        from small student groups to the largest LGBT nonprofit in the world. Every professional role I’ve had
        has been different, but my ambition and determination have always been the same: I’m motivated by moving
        the needle- seeing measurable change in a sometimes troubling world.
      </p>
      <p>
        I currently help campaigns and nonprofit organizations build and manage online technolgy, with a focus
        on connecting people with their leaders around the world. My past experience includes front-line field
        organizing, traditional communications, digital strategy, and a lifetime of nerding out with technology.
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>


<style>
.about-bio {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
}
</style>
