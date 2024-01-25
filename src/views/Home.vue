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
};
</script>

<template>
    <Layout title="Home">
      <div class="px-52 pt-10 pb-12 flex justify-around items-center w-[1510px]">
        <p class="font-bold text-neutral-white text-xl pr-2 max-w-96">Verdiep je in de <span class="text-secondary-500">geschreven werelden</span>, waar verhalen sierlijk ontvouwen en elke pagina een <span class="text-secondary-500">portaal</span> is naar <span class="text-secondary-500">verborgen rijken</span>.</p>
        <img class="rounded-md h-auto w-80" src="../../public/The-10-Best-Fantasy-Books-for-5th-Graders.jpg" alt="foto van een fantasiewereld" />
      </div>
      <div class="px-32 py-6 bg-tertiary-500 min-h-screen">
        <div class="grid grid-cols-4 gap-y-24">
          <RouterLink class="flex flex-col justify-center" to="/book/de-reis-van-de-wijze-kat">
              <img src="../../public/De_reis_van_de_wijze_kat.jpg" alt="" class="w-auto h-72 self-center" />
            <div class="px-10 pt-2">
              <p class="font-bold">De reis van de wijze kat</p>
              <p>James Norbury</p>
            </div>
          </RouterLink>
          <div class="flex flex-col justify-center">
            <img src="../../public/AI.jpg" alt="" class="w-auto h-72 self-center" />
            <div class="px-10 pt-2">
              <p class="font-bold">A.I.</p>
              <p>Lieven Scheire</p>
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <img src="../../public/Reunie.jpg" alt="" class="w-auto h-72 self-center" />
            <div class="px-10 pt-2">
              <p class="font-bold">Reünie</p>
              <p>Jonas Boets</p>
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <img src="../../public/Avondrood.jpg" alt="" class="w-auto h-72 self-center" />
            <div class="px-10 pt-2">
              <p class="font-bold">Avondrood</p>
              <p>Corina Bomann</p>
            </div>
          </div>
        </div>
        <div class="mt-24 mx-40 mb-6">
          <h1 class="text-4xl font-bold">Specials deze week</h1>
          <div class="flex justify-around items-center mt-12">
            <div>
              <video class="w-auto h-40 self-center" loop autoplay muted playsinline src="../../public/wonka.mp4"></video>
            </div>
            <div class="px-10 pt-2">
              <p class="font-bold text-3xl">Wonka</p>
              <p class="text-lg">Roald Dahl</p>
            </div>
            <RouterLink to="/special/wonka" class="flex justify-center gap-2 bg-secondary-500 rounded-md w-fit h-fit p-4 items-center">
              <p>Bekijk hier</p>
              <i class="fas fa-chevron-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </Layout>
</template>

