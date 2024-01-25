<script lang="ts">
import { defineComponent, ref, onMounted, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const currentPath = ref('/');
    
    const instance = getCurrentInstance();
    
    onMounted(() => {
      if (instance && instance.appContext.config.globalProperties.$route) {
        currentPath.value = instance.appContext.config.globalProperties.$route.path;
      }
    });

    return {
      currentPath,
    };
  },
});
</script>

<template>
  <div class="bg-primary-500 shadow-lg text-white px-10 py-7 flex justify-between items-center">
    <nav class="flex items-center justify-between w-full">
      <div class="flex justify-between items-center w-fit">
        <router-link to="/" class="flex items-center focus-visible:ring-2 outline-none focus-visible:ring-primary-200 focus-visible:rounded-md">
          <img src="../../logo.svg" class="border-primary-200 border-1.8 rounded-full" alt="Logo Storyland" />
          <div class="ml-4 font-semibold text-3xl text-neutral-white">Storyland</div>
        </router-link>
        <nav class="grid grid-cols-2 gap-10 text-lg ml-20">
          <router-link to="/" class="flex justify-center items-center px-1 focus-visible:ring-2 outline-none focus-visible:ring-primary-200 focus-visible:rounded-md" :class="{ underline: currentPath === '/' }">Home</router-link>
          <router-link to="/special/wonka" class="flex justify-center items-center px-1 focus-visible:ring-2 outline-none focus-visible:ring-primary-200 focus-visible:rounded-md" :class="{ underline: currentPath === '/special/wonka' }">Specials</router-link>
        </nav>
      </div>
      <div class="{ 'border-b-2 border-white': currentPath === '/Winkelmand', 'border-b-2 border-white border-opacity-0': currentPath !== '/Winkelmand' }">
        <router-link to="/Winkelmand" class="p-2 pt-2.5 focus-visible:ring-2 outline-none focus-visible:ring-primary-200 focus-visible:rounded-md">
          <i class="fas fa-shopping-bag text-2xl"></i>
        </router-link>
      </div>
    </nav>
  </div>
</template>


