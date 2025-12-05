import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook, faChartLine, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";

import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Accueil from "./components/Accueil.vue";
import Cours from "./components/Cours.vue";
import "./style.css";

const routes = [
  { path: '/', component: Accueil },
  { path: '/cours', component: Cours }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

library.add(faBook, faChartLine, faHouse, faTrophy);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
