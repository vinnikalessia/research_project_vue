<script lang="ts">
import Footer from './Footer.vue';
import Header from './Header.vue';

export default {
  components: {
    Footer,
    Header,
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
  <body>
    <div class="relative flex flex-col bg-primary-500">
      <div class="absolute t-0 l-0 z-50 w-full">
        <Header></Header>
      </div>
      <div class="min-h-screen mt-28 text-neutral-black">
        <slot></slot>
      </div>
      <Footer></Footer>
    </div>
  </body>
</template>
