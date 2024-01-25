<script lang="ts">
import Layout from '../components/Layout.vue';

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
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
    <Layout title="Detail boek">
      <div class="px-32 pt-6 w-[1510px]">
        <button @click="goBack">
          <i class="fas fa-arrow-left text-neutral-white text-2xl"></i>
        </button>
      </div>
      <div class="px-52 pt-10 pb-16 flex justify-around items-center text-neutral-white">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-4xl font-bold">De reis van de wijze kat</h1>
          <RouterLink to="/author/james-norbury" class="text-2xl text-secondary-500 underline underline-offset-4">James Norbury</RouterLink>
        </div>
        <div class="flex justify-center">
            <img class="w-auto h-96" src="../../public/De_reis_van_de_wijze_kat.jpg" alt="boek 1" />
        </div>
      </div>
      <div class="px-52 pb-12 w-[1510px]">
        <div class="text-xl text-neutral-white">Op een dag hoort de Kat over een eenzame oude dennenboom diep in het woud. Wie de boom vindt, verkrijgt oneindige wijsheid. De Kat gaat op weg en ontmoet allerlei dieren, zoals de nieuwsgierige Haas, de praatgrage Aap en de vermoeide Schildpad. Elk vertellen zij hun eigen verhaal. Maar pas als de Kat een speelse kitten leert kennen, begrijpt hij het doel van zijn reis...</div>
      </div>
    </Layout>
</template>
