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
<Layout title="Detail auteur">
	<div class="px-32 pt-6 w-[1510px]">
		<button onclick="window.history.back()">
			<i class="fas fa-arrow-left text-neutral-white text-2xl"></i>
		</button>
	</div>
	<div class="px-52 pt-10 pb-12 flex justify-between items-center text-neutral-white">
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-4xl font-bold mb-6">James Norbury</h1>
            <p class="text-xl text-neutral-white w-[40rem]">James Norbury is een kinderboekenauteur van Zuid-Wales. Hij is vooral gekend om ‘Grote Panda & Kleine Draak’ en ‘De reis van Grote Panda en Kleine Draak’.</p>
        </div>
        <div class="flex justify-center">
            <img class="h-96" src="../../public/james_norbury.jpg" alt="boek 1">
        </div>
	</div>
    <div class="px-52 pb-12">
        <h1 class="text-2xl text-neutral-white font-bold mb-6">Enkele boeken van de auteur</h1>
        <p>
            <div>
                <h2 class="text-neutral-white">De reis van de wijze kat</h2>
                <img class="w-32 h-auto" src="../../public/De_reis_van_de_wijze_kat.jpg" alt="De reis van de wijze kat"/>
            </div>
        </p>
    </div>
</Layout>
</template>
