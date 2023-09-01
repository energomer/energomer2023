<script setup lang="ts">
import type { CarouselItemProps } from './CarouselItem.types';

defineProps<CarouselItemProps>()
</script>

<template>
  <div class="carousel-item">
    <img class="carousel-image" :src="img" alt="">
    <p class="carousel-title">{{ title }}</p>
    <p class="carousel-text">{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.carousel-item {
  padding: 10px 20px 20px 20px;
  background: #FFF;
  border-radius: 40px;
}

.carousel-image {
  display: block;
  margin: 0 auto;
}

.carousel-title {
  margin-top: 6px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
}


.carousel-text {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #90A3A9;
  margin-top: 10px;
}
</style>