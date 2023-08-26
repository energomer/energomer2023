<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  @include container;
  margin-top: 25px;
}
</style>