<template>
  <footer class="footer">
    <ul class="social-links">
      <li v-if="linkedinID" class="social-link__linkedin">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          title="LinkedIn (new tab)"
          :href="'https://linkedin.com/in/' + linkedinID"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            />
          </svg>
        </a>
      </li>
      <li v-if="devID" class="social-link__dev">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          title="Dev.to (new tab)"
          :href="'https://dev.to/' + devID"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="dev"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
            />
          </svg>
        </a>
      </li>
      <li v-if="instagramID" class="social-link__instagram">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          title="Instagram (new tab)"
          :href="'https://instagram.com/' + instagramID"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
            />
          </svg>
        </a>
      </li>
      <li v-if="facebookID" class="social-link__messenger">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          title="Facebook Messenger (new tab)"
          :href="'https://messenger.com/t/' + facebookID"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 333333 333333"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M302077 0H31255C14069 0 1 14068 1 31256v270822c0 17186 14068 31254 31254 31254h270822c17186 0 31254-14068 31254-31254l2-270824C333333 14068 319265 0 302079 0h-2zM166667 69257c53906 0 97610 40204 97610 89709s-43704 89709-97610 89709c-9301 0-18302-1200-26903-3400l-34104 18802v-35004c-22302-16402-36604-41704-36604-70007 0-49505 43704-89709 97610-89709v-100h1zm-14902 94909l-48805 26103 53305-57406 26103 27103 47905-26503-53706 56406-24902-25803 100 100z"
              fill="white"
            />
          </svg>
        </a>
      </li>
      <li v-if="twitterID" class="social-link__twitter">
        <a
          class="social-links__link"
          target="_blank"
          rel="noopener"
          title="Twitter (new tab)"
          :href="'https://twitter.com/'+ twitterID"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
//import TopNavigation from "~/components/TopNavigation.vue";

export default {
  props: {
    twitterID: String,
    linkedinID: String,
    instagramID: String,
    facebookID: String,
    devID: String
  }
};
</script>
<style>
.footer {
  background-color: var(--nav-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 4rem;
}
.social-links {
  display: flex;
  justify-content: flex-end;
  align-items:center;
  padding: 0;
  margin: 0.5rem;
  list-style: none;
  list-style-type: none;
}
.social-links__link {
  font-weight: bold;
  color: var(--nav-link);
  display:flex;
}

.social-links li {
    margin-left: 1rem;
}

.social-links li:last-child {
  margin-right: 0.5rem;
}
.social-links__link svg {
  width: 2rem;
}

.social-links__link svg path {
  fill: var(--nav-link);
}
</style>
