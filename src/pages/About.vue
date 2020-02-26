<template>
  <Layout>
    <h1 class="page-heading">About me</h1>
    <section class="about-intro-section">
      <g-image
        src="~/images/bw_headshot_pkk-crop.jpg"
        alt="photo of the very dashing Phillip Kent Knight"
        width="350"
        fit="cover"
      />
      <div class="about-bio">
        <h2 class="bio__heading">Tinkering with technology and trying to make a difference.</h2>
        <p class="bio__text">
          I’ve worked on campaigns ranging from municipal boards to United States Senate, and with organizations
          from small student groups to the largest LGBT nonprofit in the world. Every professional role I’ve had
          has been different, but my ambition and determination have always been the same: I’m motivated by moving
          the needle- seeing measurable change in a sometimes troubling world.
        </p>
        <p class="bio__text">
          <strong>I currently help campaigns and nonprofit organizations build and manage digital tools</strong>, with a focus
          on connecting people with their leaders around the world. My past experience includes front-line field
          organizing, traditional communications, digital strategy, and a lifetime of nerding out with technology.
        </p>
      </div>
    </section>

    <section class="about-technology-section">
      <div class="about-technology">
        <div class="card">
          <div class="card__heading">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 276444" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M9055 2h315224c4982 0 9055 4077 9055 9053v208830c0 4983-4073 9055-9055 9055H9055c-4976 0-9055-4072-9055-9055V9055C0 4079 4079 0 9055 0v2zm25037 31674h26646v6933H34092v-6933zm39339 73587H34092v-6960h39339v6960zm53528 15H81429v-6990h45530v6990zm78284-5h-70598v-6980h70598v6980zM101056 76140h138733v6858H101056v-6858zm-32631-37h25109v6933H68425v-6933zm-34333 0h26646v6933H34092v-6933zm60237-15299H34092v-6896h60237v6896zm32631 19h-25109v-6933h25109v6933zm78284 23h-70598v-6980h70598v6980zM101057 31695h60237v6896h-60237v-6896zm-32631-19h25109v6933H68426v-6933zm178966 136716l-24685-13835v-7924l24685-13834v9117l-17191 8580 17191 8832v9063zm4576 6173l8912-48595h5176l-8974 48595h-5114zm17893-6107v-9074l17232-8690-17232-8777v-8986l24685 13954v7815l-24685 13757zm-144285 71002h82191c220 14228 6065 26950 21943 36984H103632c12691-9220 21992-20406 21943-36984h2zm41093-43043c6421 0 11637 5211 11637 11640 0 6422-5217 11632-11637 11632-6423 0-11640-5211-11640-11632 0-6429 5217-11640 11640-11640zM27254 17067h278829c4409 0 8016 3604 8016 8010v156041c0 4406-3612 8009-8016 8009H27254c-4406 0-8010-3604-8010-8009V25075c0-4409 3604-8010 8010-8010v2z"/></svg>

            <h3 class="card__heading-text">
            Code Experience</h3>
          </div>
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
        <div class="card__heading">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 320921" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M20382 0h292569c5572 0 10656 2292 14363 5982l19 20 16 16 17 17c3682 3708 5967 8789 5967 14348v280157c0 5609-2294 10707-5984 14398-3690 3690-8789 5985-14398 5985H20382c-5568 0-10655-2291-14365-5983l-16-16-20-20-23-24C2282 311175 0 306101 0 300541V20384C0 14770 2290 9672 5980 5982c217-217 443-421 676-612C10284 2042 15108 2 20382 2zm158095 267881c-4289 0-7767-3780-7767-8442s3478-8443 7767-8443h95530c4289 0 7767 3780 7767 8443 0 4662-3478 8442-7767 8442h-95530zm-122010 0c-4243 0-7683-3780-7683-8442s3440-8443 7683-8443h88563c4243 0 7683 3780 7683 8443 0 4662-3440 8442-7683 8442H56467zm-3056-36884c-4243 0-7683-3780-7683-8442s3440-8443 7683-8443h88565c4243 0 7683 3780 7683 8443 0 4662-3440 8442-7683 8442H53411zm125066 0c-4289 0-7767-3780-7767-8442s3478-8443 7767-8443h95530c4289 0 7767 3780 7767 8443 0 4662-3478 8442-7767 8442h-95530zM47718 94323h233130v91276H47718V94323zm267196-21280c-637 115-1293 174-1962 174H20383c-669 0-1325-60-1962-174v227495c0 551 211 1038 549 1376l36 35c339 339 827 550 1378 550h292569c525 0 1013-225 1375-587s587-850 587-1375V73042zM135966 26323c7314 0 13242 5928 13242 13242s-5928 13243-13242 13243c-7313 0-13242-5929-13242-13243s5929-13242 13242-13242zm-46300 0c7314 0 13243 5928 13243 13242s-5929 13243-13243 13243c-7313 0-13242-5929-13242-13243s5928-13242 13242-13242zm-46298 0c7313 0 13242 5928 13242 13242s-5929 13243-13242 13243c-7314 0-13242-5929-13242-13243s5928-13242 13242-13242z"/></svg>

          <h3 class="card__heading-text">
            Platform Experience</h3>
            </div>
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
          <div class="card__heading">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2991 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M290 1507c-134 40-191 178-189 334 1 71 14 145 37 217s56 140 98 198c96 134 238 215 404 158 13-4 26-3 37 2 3-1 5-2 9-3 42-13 80-25 115-36 39-12 76-22 111-32 27-7 55 9 62 35 1 2 1 4 1 6l15 66c38 170 75 335 125 468 1 2 7 21 14 39 30 84 63 174 105 227 37 46 88 60 168-2 15-14 30-27 45-40 48-41 95-82 113-143-11-15-32-24-53-33-70-30-139-59-121-206l3-21c6-43 8-65 6-74-1-5-12-15-33-34l-8-7c-41-38-56-92-55-150 1-69 23-144 46-198 7-17 22-28 40-31 521-72 839 18 1092 91 11 3 22 6 32 9-226-233-411-585-537-947-134-382-202-776-185-1052-207 305-570 790-1434 1108-1 0-2 1-3 1l-7 2c-9 3-10 2-12 4s0 2-3 7c0 1 1-2-9 14-7 11-17 18-28 22zm2153-74c0 125-123 350-199 354 131 256 291 478 472 610 11 1 20 2 30 2 18-1 35-5 54-17 41-42 67-107 81-189 41-253-42-650-181-1032-139-383-334-748-516-937-67-69-130-113-184-121-14-2-22-3-26-1s-12 8-23 19c-5 5-11 11-17 18-1 2-1 3-2 5-85 176-57 555 53 962 84-39 459 5 459 327zm268 1065c-11 2-22 1-33-5-9-2-19-4-29-6-66-14-131-32-201-52-239-68-539-154-1022-92-15 41-27 90-28 134 0 32 6 59 23 75l8 7c36 33 54 49 63 82 8 28 4 57-3 113l-3 21c-9 71 26 86 60 101 45 19 90 38 112 100 4 9 5 19 3 30-20 104-85 160-150 215-14 12-29 25-42 37l-3 3c-141 113-238 81-312-11-53-66-88-164-122-255-3-8-6-16-14-38-51-138-89-307-128-481l-4-18c-19 6-39 11-58 17-39 12-77 23-113 35-5 1-8 3-10 4-24 9-34 14-55 4-207 61-381-40-497-202-48-67-86-145-112-226S1 1924 0 1843c-2-193 71-365 242-425 8-14 13-21 24-30 12-10 22-13 42-21l7-2c1 0 2-1 2-1 888-326 1228-835 1422-1125 54-81 97-145 140-188 21-21 37-34 59-42s45-9 76-4c78 12 159 66 241 151 192 199 395 577 538 972 144 396 230 811 186 1082-17 105-53 191-113 248-2 2-4 4-7 5-38 26-74 36-111 37-13 0-26 0-38-1z"/></svg>

          <h3 class="card__heading-text">
            Campaign Experience</h3>
            </div>
          <ul class="card__list">
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
    </section>

    <section class="accomplishments-section">
      <g-image
        src="~/images/clientcon-crop.jpg"
        alt="Phil speaking at ActionKit Clientcon 2019"
        width="350"
        fit="cover"
      />

      <div class="accomplishments">
        <h2 class="accomplishments__heading">Some Notable Accomplishments</h2>
        <ul class="accomplishments__list">
          <li>Built first known single-page NationBuilder site.</li>
          <li>Bartered with Union bosses for phone bank time.</li>
          <li>Sent four elected officials door-knocking when OFA absorbed entire volunteer pool.</li>
          <li>Was once contracted with express goal of annoying a US Senator.</li>
          <li></li>
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
.about-bio {
  max-width: 700px;
  margin: 3rem auto 3rem auto;
}
.page-heading {
  margin: 1rem 1rem 1rem 1rem;
}
.bio__heading {
  margin: 0 1rem;
}
.bio__text {
  margin: 1rem;
}
.about-technology {
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  height: fit-content;
  align-items: center;
  margin: 3rem 0;
}

.card {
  border: 1px solid var(--card-border);
  margin: 1rem;
}

.card__heading {
  display:flex; 
  justify-content: space-between;
  color: var(--card-headline-color);
  padding: 0 1rem;
  margin: 0;
  background-color: var(--card-headline-bg);
  text-transform: lowercase;
}

.card__heading-text {
  color: var(--card-headline-color);
}

.card__heading svg {
  width:2.5rem;
  fill:var(--card-heading-icons);
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
  background-color: var(--three-two);
}

.card__list li {
  padding: 0 0.5rem;
}

.accomplishments-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.accomplishments {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
.accomplishments__heading {
  margin: 1rem 1rem 0 1rem;
}
.accomplishments__list {
  list-style: none;
  list-style-type: none;
  margin: 1rem;
  padding: 0;
}
.accomplishments__list li {
  padding: 0.125rem 0;
}
</style>
