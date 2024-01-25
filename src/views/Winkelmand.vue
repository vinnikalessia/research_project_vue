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
  <Layout title="Winkelmand">
    <div class="px-52 pt-10 pb-12 bg-tertiary-500 min-h-screen w-[1510px]">
      <div class="grid grid-cols-4 gap-y-24 w-full divide-x divide-gray-500">
        <div class="col-span-3">
          <p class="text-2xl font-bold mb-6 underline">Je winkelmand</p>
          <div class="grid grid-cols-4 text-lg font-semibold place-items-center">
            <p>Boek</p>
            <p>Auteur</p>
            <p>Prijs</p>
            <p>Verwijderen</p>
          </div>
          <div class="grid grid-cols-4 place-items-center">
            <RouterLink class="flex justify-start pl-2 py-4" to="/book/${book.slug}">
              <img src="../../public/De_reis_van_de_wijze_kat.jpg" alt="" class="w-auto h-36 self-center" transition:name="{book.slug}" />
            </RouterLink>
            <div class="px-2 pt-2">
              <p class="font-bold">De reis van de wijze kat</p>
              <p>James Norbury</p>
            </div>
            <div>20.99</div>
            <i class="fas fa-trash text-neutral-black text-2xl"></i>
          </div>
        </div>
        <div class="pl-4 flex flex-col">
          <p class="text-2xl font-bold mb-6 underline">Bestelling</p>
          <div class="flex justify-between py-1">
            <p>De reis van de wijze kat</p>
            <p>€ 20.99</p>
          </div>
          <div class="flex justify-between py-1 divide-y divide-neutral-black">
            <p>totaal</p>
            <p>€ 20.99</p>
          </div>
          <button class="mt-12 flex justify-center gap-2 bg-secondary-500 rounded-md w-fit px-4 items-center">
            <p>betaal</p>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>
