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
          <strong>I currently help campaigns and nonprofit organizations build and manage digital tools</strong>, with a focus
          on connecting people with their leaders around the world. My past experience includes front-line field
          organizing, traditional communications, digital strategy, and a lifetime of nerding out with technology.
        </p>
      </div>
    </section>

    <section class="about-technology-section">
      <div class="about-technology">
        <div class="card">
          <h3 class="card__heading">Code Experience</h3>
          <ul class="card__list">
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>Gridsome</li>
            <li>Liquid Markup</li>
            <li>Python</li>
            <li>Django Template Language</li>
            <li>API Integrations</li>
          </ul>
        </div>

        <div class="card">
          <h3 class="card__heading">Platform Experience</h3>
          <ul class="card__list">
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
        <div class="card">
          <h3 class="card__heading">Campaign Experience</h3>
          <ul class="card__list">
            <li>US Senate</li>
            <li>State Legislatures</li>
            <li>Municipal & Local</li>
            <li>Grassroots Organizing</li>
            <li>Gender Equality</li>
            <li>Global Poverty</li>
            <li>International Development</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>Notable Accomplishments</h2>
      <ul>
        <li>Built first known single-page NationBuilder site.</li>
        <li>Bartered with Union bosses for phone bank time.</li>
        <li>Sent four elected officials door-knocking when OFA absorbed entire volunteer pool.</li>
        <li>Was once contracted with express goal of annoying a US Senator.</li>
      </ul>
      <!--
      <g-image
        src="~/images/clientcon-crop.jpg"
        alt="photo of the very dashing Phillip Kent Knight"
        width="350"
        fit="cover"
      /> 
      -->
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
.about-bio {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1.5rem;
}

.about-technology {
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  height:fit-content;
  align-items: center;
}


.card {
  border: 1px solid var(--dark-only-border);
  margin: 1rem;
}

.card__heading {
  padding: 1rem;
  margin: 0;
  background-color: var(--one-three);
}
.card__list {
  margin: 0;
  padding: 1rem 0.5rem;
  list-style: none;
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  background-color:var(--three-two);
  color:white;
}


.card__list li {
  padding: 0 0.5rem;
}
</style>
