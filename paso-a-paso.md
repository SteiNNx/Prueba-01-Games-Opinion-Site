1. Crear Proyecto
    - vue create prueba
        - Seleccionar Manually Select Features
            - Babel, Router, Vuex, Unit Test, E2E
            - Version de Vue, seleccion 2.x
            - use history mode for router, Y
            - Pick a unit test solution, Jest
            - pick an 2e2, Cypress
            - dedicated config files
            - guardar configuracion en un presets
            - vue-vuex-router-jest-cypress
2. Incluir Bootstrap y FontAwesome
    - npm install bootstrap --save, !!! si da error con popper npm install --save @popperjs/core
    - instalar fontawesome
        - npm i --save @fortawesome/fontawesome-svg-core 
        - npm i --save @fortawesome/free-solid-svg-icons
        - npm i --save @fortawesome/vue-fontawesome
        - Crear archivo @/plugins/fontawesome 
        ```
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
        ```
        - hacer require en main.js (entry de la aplicacion) require('@/plugins/fontawesome')
        - @https://fontawesome.com/icons/users-gear?s=solid <font-awesome-icon icon="fa-solid fa-headphones-simple" class="me-2" />
3.- Crear Navbar