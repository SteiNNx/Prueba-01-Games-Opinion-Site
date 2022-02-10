<template>
  <div>
    <header class="container text-center py-5">
      <h1>Lista de Opiniones</h1>
    </header>
    <section class="container">
      <ListOpinions />
    </section>
  </div>
</template>

<script>
import ListOpinions from "@/components/ListOpinions";
export default {
  name: "Opiniones",
  components: {
    ListOpinions,
  },
};
</script>
