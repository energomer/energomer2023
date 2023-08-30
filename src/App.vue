<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import AOS from 'aos';

import { AppHeader } from '@/components/AppHeader';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'aos/dist/aos.css';

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  AOS.init();
});
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style lang="scss">
body {
  @include app-container;
  padding: 30px 80px 76px 80px;
  overflow: hidden;
}
</style>
