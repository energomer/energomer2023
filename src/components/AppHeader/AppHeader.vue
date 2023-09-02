<!-- eslint-disable no-param-reassign -->
<script setup lang="ts">
// @ts-nocheck
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { appNavigation } from '@/constants/app-navigation';
import { useBooleanState } from '@/hooks/useBooleanState';

import { UIModal } from '../UI/UIModal';

import { AppMenuButton } from './AppMenuButton';
import { AppNavigationMenu } from './AppNavigationMenu';
import { AppSubNavigation } from './AppSubNavigation';

const route = useRoute();

const activeNavigation = ref<number>(-1);
const [isMenuOpen,, closeMenu, toggleMenu] = useBooleanState(false);

watch(() => route.fullPath, () => {
  const index = appNavigation?.findIndex((item) => item?.link === route.matched[0]?.path);
  activeNavigation.value = index
  closeMenu();
})

const items = computed(() => {
  if (appNavigation?.[activeNavigation.value]?.children) {
    return appNavigation?.[activeNavigation.value]?.children
  }

  if (route.matched[0]?.path === '/software') {
    return appNavigation?.[3]?.children[0]?.children
  }

  if (route.matched[0]?.path === '/intelligent-accounting-systems') {
    return appNavigation?.[3]?.children[1]?.children
  }

  return []
})

watch(isMenuOpen, () => {
  if (isMenuOpen.value) {
    document.querySelectorAll('.slider-button').forEach((el) => {
      el.style.opacity = '0'
    })
  } 
  
  if (!isMenuOpen.value) {
    document.querySelectorAll('.slider-button').forEach((el) => {
      el.style.opacity = '1'
    })
  } 
})

</script>

<template>
<header class="header">
  <div class="container" @click.stop="">
    <AppSubNavigation 
      class="app-navigation" 
      :items="items" 
    />
    <AppMenuButton  :class="['header-button', {'header-button-active': isMenuOpen}]" @click.stop="toggleMenu" />
  </div>
  <UIModal :isOpen="isMenuOpen" @on-close="closeMenu">
    <div 
      v-if="isMenuOpen" 
      class="navigation-menu-wrapper"     
      data-aos="fade-down-left"
      :data-aos-duration="500"
      @click.stop=""
    >
      <AppNavigationMenu @on-link-click="closeMenu()"/>
    </div>
  </UIModal>
</header>
</template>

<style lang="scss" scoped>
.container {
  @include container;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.app-navigation {
  width: 100%;
}

.navigation-menu-wrapper {
  margin-top: 158px;
  transition: 0.3s;
  z-index: 100;
}

.header-button {
  position: relative;
  z-index: 102;

  &-active {
    background: #FFF;
  }
}
</style>