import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook, faChartLine, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import App from "./App.vue";
import "./style.css";

library.add(faBook, faChartLine, faHouse, faTrophy);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(VueQueryPlugin).mount("#app");
