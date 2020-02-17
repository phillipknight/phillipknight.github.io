<template>
  <Layout>
    <h1>About me</h1>
    <section class="about-intro-section">
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
    </section>
    <svg class="svg-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="var(--dark-grey)"
        fill-opacity="1"
        d="M0,128L0,0L205.7,0L205.7,96L411.4,96L411.4,288L617.1,288L617.1,128L822.9,128L822.9,32L1028.6,32L1028.6,256L1234.3,256L1234.3,32L1440,32L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z"
      />
    </svg>
    <section class="about-technology-section">
      <div class="about-technology">
        <h3>Platforms</h3>
        <ul class="about-platforms-list">
          <li>ActionKit</li>
          <li>NationBuilder</li>
          <li>NGP VAN</li>
          <li>New/Mode</li>
          <li>Phone2Action</li>
          <li>Joomla!</li>
          <li>WordPress</li>
          <li>CiviCRM</li>
          <li>Google Analytics</li>
        </ul>
      </div>
    </section>
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

.about-technology-section {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem;
}
.about-platforms-list {
  list-style: none;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.svg-divider {
  margin-bottom:-8px;
}
</style>
