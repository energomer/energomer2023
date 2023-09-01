<script setup lang="ts">
import { useRoute } from 'vue-router';

import { IcMore } from '@/components/UI/Icons';

const route = useRoute();
</script>

<template>
  <button class="menu-button" type="button" :disabled="route.name === 'home'">
    <span>Меню</span>
    <IcMore class="icon"/>
  </button>
</template>

<style lang="scss">
.menu-button {
  @include reset-button-style;
  @include title-h3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 107px;
  border: 1px solid;
  border-radius: 40px;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
  padding: 37.5px 40px;
  box-shadow: 0px 10px 25px -15px #0052A04D;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.5) 57.29%, rgba(235, 250, 255, 0.5) 81.92%, rgba(255, 255, 255, 0.5) 100%);

  &:disabled {
    color: $color-black;
  }
}

.icon {
  margin-top: 6px;
}
</style>