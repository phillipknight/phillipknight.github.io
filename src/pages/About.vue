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

    <section class="about-technology-section">
      <div class="about-technology">
        <div>
          <h3>Code Experience</h3>
          <ul class="about-code-list">
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>Gridsome</li>
            <li>Liquid Markup</li>
            <li>Python</li>
            <li>Django Template Language</li>
          </ul>
        </div>

        <div>
          <h3>Platform Experience</h3>
          <ul class="about-platforms-list">
            <li>ActionKit</li>
            <li>NationBuilder</li>
            <li>NGP/VAN</li>
            <li>EveryAction</li>
            <li>New/Mode</li>
            <li>Phone2Action</li>
            <li>WordPress</li>
            <li>Joomla!</li>
            <li>CiviCRM</li>
            <li>Google Analytics</li>
          </ul>
        </div>
      </div>

     <g-image
        src="~/images/clientcon-crop.jpg"
        alt="photo of the very dashing Phillip Kent Knight"
        width="350"
        fit="cover"
      />

    </section>
    <section>

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
  padding-bottom: 1.5rem;
}

.about-technology-section {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem;
}

.about-technology {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
}
.about-platforms-list {
  list-style: none;
  list-style-type: none;
  padding: 0;
  text-align: center;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
}

.about-code-list {
  list-style: none;
  list-style-type: none;
  padding: 0;
  text-align: center;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
}
.about-code-list li,.about-platforms-list li {
  padding:0.25rem;
}
</style>
