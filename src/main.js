import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGlobeAmericas,
  faPhoneSquare,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedin,
  faTelegram,
  faHtml5,
  faJs,
  faCss3,
  faNodeJs,
  faPhp,
  faGitAlt,
  faVuejs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([
  faGlobeAmericas,
  faPhoneSquare,
  faEnvelope,
  faGithub,
  faLinkedin,
  faTelegram,
  faHtml5,
  faJs,
  faCss3,
  faNodeJs,
  faPhp,
  faGitAlt,
  faVuejs,
  faReact,
]);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
