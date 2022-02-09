import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faComments,
    faHeadphonesSimple,
    faHome,
    faUsersGear
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeadphonesSimple, faHome, faComments, faUsersGear);

Vue.component("font-awesome-icon", FontAwesomeIcon);