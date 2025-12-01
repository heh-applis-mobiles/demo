import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBook, faChartLine, faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";

library.add(faBook, faChartLine, faHouse, faTrophy);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
