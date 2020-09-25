<template>
  <Layout>
    <section class="about-intro-section">
      <div class="about-bio">
        <h2 class="bio__heading">Tinkering with technology and trying to make a difference.</h2>
        <p class="bio__text">
          I’ve worked on campaigns ranging from municipal boards to United States Senate, and with organizations
          from small student groups to the largest LGBT nonprofit in the world. Every professional role I’ve had
          has been different, but my ambition and determination have always been the same: I’m motivated by moving
          the needle- seeing measurable change in an often troubling world.
        </p>
        <p class="bio__text">
          <strong>I help campaigns and nonprofit organizations build and manage digital tools</strong>, with a focus on connecting people with their representatives. My past experience includes front-line field
          organizing, traditional communications, digital strategy, and a lifetime of nerding out with technology.
        </p>
      </div>
    </section>

    <section class="experience">
      <div class="image-container">
        <h2 class="experience-headline">Experience</h2>
        <g-image
          class="experience-image"
          src="~/images/bowling-comp.gif"
          alt="Animated gif, Phil bowls a strike and dances shamelessly"
          width="350"
          fit="cover"
        />
      </div>

      <div class="experience-container">
        <div class="pro-experience">
          <div class="pro-experience_item">
            <h3 class>Languages & Frameworks I've interacted with</h3>

            <ul class="inline-list">
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Vue.js</li>
              <li>Gridsome</li>
              <li>Liquid Markup</li>
              <li>Python</li>
              <li>php</li>
              <li>Django Template Language</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
            </ul>
          </div>

          <div class="pro-experience_item">
            <h3 class>Platforms & APIs I know</h3>
            <ul class="inline-list">
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
          <div class="pro-experience_item">
            <h3 class>Campaigns & Issues I've worked on</h3>
            <ul class="inline-list">
              <li>US Senate</li>
              <li>State Legislatures</li>
              <li>Municipal & Local</li>
              <li>Grassroots & Grasstops</li>
              <li>Gender Equality</li>
              <li>Global Poverty</li>
              <li>International Development</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="experience-item">
            <h3 class>Notable Accomplishments</h3>
            <ul class>
              <li class="technologist">Built first known single-page NationBuilder site.</li>
              <li class="telephone">Bartered with Union bosses for phone bank time.</li>
              <li
                class="suit"
              >Sent four elected officials door-knocking when OFA absorbed entire volunteer pool.</li>
              <li
                class="megaphone"
              >Was once contracted with express instructions to annoy a US Senator.</li>
              <li
                class="speaker"
              >Successfully explained "The Cloud" to an entire marketing department.</li>
            </ul>
          </div>
          <div class="experience-item">
            <h3 class>Non-professional points of interest</h3>
            <ul class>
              <li class="shoe">1 Kickball win</li>
              <li class="bowling">1 Bowling win</li>
              <li class="cake">Once made the best chocolate cake ever</li>
              <li class="farmer">Semi-successful Semi-organic Gardener</li>
              <li class="cyclist">Rode 545 miles on a bicycle in 7 days</li>
              <li class="mic">Licensed General Class Amateur Radio Operator</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="experience-links">
      <div>
        <a
          href="https://www.linkedin.com/in/phillipkentknight"
          target="_blank" rel="noreferrer"
          title="my linkedin profile, opens in new tab"
        >Connect with me on LinkedIn</a>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
   metaInfo: {
    title: "About me and my work",
    meta: [
      {
        name: "description",
        content:
          "I'm a product manager and campaign technologist with a background in campaign organizing. Learn more about my work.  "
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

.experience-headline {
  color: var(--pink);
}

.experience-image {
  justify-self: end;
}

.experience-container {
  padding: 10%;
}

.inline-list {
  padding: 0;
}
.inline-list li {
  padding: 0.2rem;
  margin: 0.2rem;
  display: inline-block;
  line-height: 1.2;
  border: 1px solid #db73a017;
}

.pro-experience_item {
  margin-bottom: 2rem;
}

li.technologist {
  list-style-type: " 👨‍💻 ";
}
li.telephone {
  list-style-type: " ☎️ ";
}
li.suit {
  list-style-type: " 👔 ";
}
li.megaphone {
  list-style-type: " 📢 ";
}
li.speaker {
  list-style-type: " 🗣️ ";
}
li.shoe {
  list-style-type: " 👟 ";
}
li.bowling {
  list-style-type: " 🎳 ";
}
li.cake {
  list-style-type: " 🎂 ";
}
li.farmer {
  list-style-type: " 👨‍🌾 ";
}
li.cyclist {
  list-style-type: " 🚴 ";
}
li.mic {
  list-style-type: " 🎙️ ";
}

.image-container {
  display: flex;
  justify-content: space-around;
  align-items: center;

  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: var(--accent);
}
.image-container h2 {
  padding: 0 10vw;
  font-size: clamp(1.5rem, 7vw, 3rem);
  color: var(--body-bg);
}
.image-container img {
  width: 100%;
  max-width: 280px;
}

.experience-links {
  text-align: center;
  font-size: 1.8rem;
  padding: 3rem 1rem;
}
</style>
