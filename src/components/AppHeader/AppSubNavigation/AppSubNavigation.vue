<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { IcLogo } from '@/components/UI/Icons';

import type { AppSubNavigationProps } from './AppSubNavigation.types';

const props = defineProps<AppSubNavigationProps>();
console.log(props);
</script>

<template>
  <div class="sub-navigation">
    <div class="logo">
      <IcLogo />
    </div>
    <ul class="list">
      <li v-for="item in items" :key="item.link" lang="list-item">
        <RouterLink class="link" :to="item.link">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sub-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 40px;
  height: 107px;
  border: 1px solid;
  border-radius: 40px;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 0px 4px 24px 8px #FFFFFF1A inset,  16px 24px 16px -16px #FFFFFF1A inset,  0px 10px 25px -15px #0052A04D;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.5) 57.29%, rgba(235, 250, 255, 0.5) 81.92%, rgba(255, 255, 255, 0.5) 100%);
}

.list {
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
}

.link {
  @include body-text;
  font-size: 15px;
  color: $color-black;
  text-decoration: none;
  position: relative;

  &::before {
      content: '';
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 50px;
      width: 0%;
      height: 3px;
      background: $color-blue;
      transition: 0.4s;
  }
}

.router-link-exact-active  {
  &.link {
    color: $color-blue;

    &::before {
      width: 100%;
    }
  }
}
</style>