<script lang="ts">
import Layout from '../../components/Layout.vue';

export default {
  components: {
    Layout,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  
<Layout title="Specials">
  <div class="px-32 pt-6">
    <button onclick="window.history.back()">
      <i class="fas fa-arrow-left text-neutral-white text-2xl"></i>
    </button>
  </div>
  <div
    class="px-52 pt-10 pb-16 flex justify-around items-center text-neutral-white"
  >
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold">
        Wonka
      </h1>
      <RouterLink 
        to="/"
        class="text-2xl text-secondary-500 underline underline-offset-4"
        >Roald Dahl</RouterLink
      >
    </div>
    <div class="flex justify-center">
        <div>
            <video class="w-auto h-40 self-center" loop autoplay muted playsinline src="../../../public/wonka.mp4"></video>
          </div>
    </div>
  </div>
  <div class="px-52 pb-12 w-[1510px]">
    <div class="text-xl text-neutral-white">
        Wonka is het fantastische verhaal over de grootste uitvinder, goochelaar en chocolademaker ter wereld – de man die we nu allemaal kennen als de geweldige Willie Wonka. Gebaseerd op de film Wonka van Warner Bros. Pictures, bedacht door Paul King die samen met Simon Farnaby het scenario schreef. Het hartverwarmende en humoristische Wonka is een verrukkelijke mix van magie en muziek, opwinding en ontroering, waarin de lezer kennismaakt met de jonge Willie Wonka, die choc-vol ideeën zit en vastbesloten is om de wereld hapje voor hapje te veranderen. Dit verhaal is het bewijs dat de mooiste dingen in het leven beginnen met een droom. En dat als je het geluk hebt om Willie Wonka te ontmoeten, alles mogelijk is.
    </div>
  </div>
</Layout>
</template>
