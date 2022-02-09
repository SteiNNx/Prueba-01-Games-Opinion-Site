<template>
  <div class="row">
    <CardGames
      v-for="(juego, index) in juegos"
      :key="index"
      :juego="juego"
      :index="index"
    />
    <ModalComments />
  </div>
</template>

<script>
import { mapState } from "vuex";

import CardGames from "@/components/CardGames";
import ModalComments from "@/components/ModalComments";

export default {
  name: "CardListGames",
  components: {
    CardGames,
    ModalComments,
  },
  computed: {
    ...mapState(["juegos"]),
  },
};
</script>
