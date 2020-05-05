<template>
  <Layout>
    <section class="about-intro-section">
      <div class="about-bio">
        <h2 class="bio__heading">Tinkering with technology and trying to make a difference.</h2>
        <p class="bio__text">
          I’ve worked on campaigns ranging from municipal boards to United States Senate, and with organizations
          from small student groups to the largest LGBT nonprofit in the world. Every professional role I’ve had
          has been different, but my ambition and determination have always been the same: I’m motivated by moving
          the needle- seeing measurable change in a sometimes troubling world.
        </p>
        <p class="bio__text">
          <strong>I now help campaigns and nonprofit organizations build and manage digital tools</strong>, with a focus
          on connecting people with their leaders around the world. My past experience includes front-line field
          organizing, traditional communications, digital strategy, and a lifetime of nerding out with technology.
        </p>
      </div>
    </section>

    <section class="">
      <h2 class="">I've got experience with...</h2>

        <div class="">
            <h3 class="">Code</h3>

          <ul class="">
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>Gridsome</li>
            <li>Liquid Markup</li>
            <li>Python</li>
            <li>php</li>
            <li>Django Template Language</li>
            <li>API Integrations</li>
          </ul>
        </div>

        <div class="">

            <h3 class="">Platforms</h3>
          <ul class="">
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
        <div class="">

            <h3 class="">Campaigns</h3>
          <ul class="">
            <li>US Senate</li>
            <li>State Legislatures</li>
            <li>Municipal & Local</li>
            <li>Grassroots & Grasstops</li>
            <li>Gender Equality</li>
            <li>Global Poverty</li>
            <li>International Development</li>
          </ul>
        </div>
    </section>

    <section class="accomplishments-section">
      <div class="accomplishments">
        <div class="accomplishments__heading">
          <h2 class="accomplishments__heading-text">Notable Accomplishments</h2>
        </div>
        <ul class="accomplishments__list">
          <li>Built first known single-page NationBuilder site.</li>
          <li>Bartered with Union bosses for phone bank time.</li>
          <li>Sent four elected officials door-knocking when OFA absorbed entire volunteer pool.</li>
          <li>Was once contracted with express goal of annoying a US Senator.</li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About me"
  }
};
</script>


<style>
.about-intro-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-bio {
  max-width: 900px;
  margin: 1em;
}
.bio__heading {
  color: var(--pink);
}


/* DEBUGGING */
svg {
  display: none;
}
</style>
