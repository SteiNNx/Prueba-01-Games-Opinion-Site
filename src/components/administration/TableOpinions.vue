<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Persona</th>
        <th>Juego</th>
        <th>Opinion</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(opinion, index) in opinions" :key="index">
        <th>{{ index }}</th>
        <td>{{ opinion.nombre_usuario }}</td>
        <td>{{ opinion.nombre_juego }}</td>
        <td>{{ opinion.opinion }}</td>
        <td>
          <button
            :id="'btn-eliminar-' + index"
            class="btn btn-danger me-2"
            @click="deleteOpinion(index)"
          >
            Eliminar
          </button>
          <button :id="'btn-editar-' + index" class="btn btn-info">Editar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TableOpinions",
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    ...mapActions(["deleteOpinion"]),
  },
};
</script>
