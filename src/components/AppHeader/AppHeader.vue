<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { appNavigation } from '@/constants/app-navigation';
import { useBooleanState } from '@/hooks/useBooleanState';

import { AppMenuButton } from './AppMenuButton';
import { AppNavigationMenu } from './AppNavigationMenu';
import { AppSubNavigation } from './AppSubNavigation';

const route = useRoute();

const activeNavigation = ref(0);
const [isMenuOpen,, closeMenu, toggleMenu] = useBooleanState(false);

watch(() => route.fullPath, () => {
  const index = appNavigation?.findIndex((item) => item?.link === route.matched[0]?.path);
  activeNavigation.value = index
  closeMenu();
})
</script>

<template>
<header class="header">
  <div class="container" @click.stop="">
    <AppSubNavigation class="app-navigation" :items="appNavigation?.[activeNavigation]?.children ?? []" />
    <AppMenuButton  class="header-button" @click.stop="toggleMenu" />
  </div>
  <Transition>
    <div v-if="isMenuOpen" class="navigation-menu-wrapper">
      <AppNavigationMenu />
    </div>
  </Transition>
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
  position: absolute;
  top: 158px;
  transition: 0.3s;
  z-index: 100;
}
</style>