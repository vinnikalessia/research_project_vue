<script lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -120%;
}

.slide-leave-to {
  position: absolute;
  left: -80%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
