<template>
  <div v-if="isOpenModalOpinion">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  Escribe tu Opinion para el juego: {{ gameSelected.name }}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" @click="closeModal">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="txt_nombre_usuario" class="form-label"
                    >Nombre Usuario</label
                  >
                  <input
                    class="form-control"
                    id="txt_nombre_usuario"
                    placeholder="Evan You"
                    type="text"
                    v-model="nombre_usuario"
                  />
                </div>
                <div class="mb-3">
                  <label for="txt_opinion" class="form-label">Opinion</label>
                  <textarea
                    id="txt_opinion"
                    class="form-control"
                    rows="3"
                    v-model="opinion"
                  ></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeModal">
                  Cerrar
                </button>
                <button type="button" class="btn btn-primary" @click="addOpinion">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ModalComments",
  computed: {
    ...mapState(["isOpenModalOpinion", "gameSelected"]),
    nombre_usuario: {
      get() {
        return this.$store.state.opinion.nombre_usuario;
      },
      set(value) {
        this.$store.commit("SET_NOMBREUSUARIO", value);
      },
    },
    opinion: {
      get() {
        return this.$store.state.opinion.opinion;
      },
      set(value) {
        this.$store.commit("SET_OPINION", value);
      },
    },
  },
  methods: {
    ...mapActions(["closeModal", "addOpinion"]),
  },
};
</script>

<style></style>
