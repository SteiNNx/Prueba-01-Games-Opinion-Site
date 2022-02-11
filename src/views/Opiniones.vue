<template>
  <div>
    <header class="container text-center py-5">
      <h1>Lista de Opiniones</h1>
    </header>
    <section class="container">
      <AccordingsOpinions />
    </section>
  </div>
</template>

<script>
import AccordingsOpinions from "@/components/AccordingsOpinions";
export default {
  name: "Opiniones",
  components: {
    AccordingsOpinions,
  },
};
</script>
