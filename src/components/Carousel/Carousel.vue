<script setup lang="ts">
import { ref } from 'vue';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IcArrow } from '../UI/Icons';

import type { CarouselProps } from './Carousel.types';
import { CarouselItem } from './CarouselItem';


defineProps<CarouselProps>();

const modules = [Navigation];

const prevNodeRef = ref<SwiperType | null>(null);
const nextNodeRef = ref<SwiperType | null>(null);

</script>

<template>
  <div class="carousel">
    <Swiper
      :slides-per-view="'auto'"
      :modules="modules"
      :navigation="{
        nextEl: nextNodeRef as unknown as HTMLDivElement,
        prevEl: prevNodeRef as unknown as HTMLDivElement,
      }"
      wrapper-class="product-slider__slides-wrapper"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.img" class="slider-item-slide">
        <CarouselItem
          class="carousel__item"
          :img="slide.img"
          :text="slide.text"
          :title="slide.title"
        />
      </SwiperSlide>
    </Swiper>
    <div class="carousel-slider__navigation">
      <div ref="prevNodeRef" class="carousel__button carousel__button_prev">
        <IcArrow />
      </div>
      <div ref="nextNodeRef" class="carousel__button carousel__button_next">
        <IcArrow />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.slider-item-slide {
  width: 211px;
  margin: 0;
}
.carousel {
  position: relative;
  width: 844px;

  &__item {
    width: 205px;
    height: 286px;
  }

  &__button {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(180deg, #007DB5 0%, #00A1D5 100%);
    box-shadow: 0px 5px 15px -10px #007DB580, 0px -5px 12px 0px #92E6FB80 inset,  0px -1px 2px 0px #FFFFFF66 inset;


    svg {
      @include fill-svg-and-path(#fff, 0ms)
    }

    &_prev {
      left: -30px;
    }

    &_next {
      right: -30px;

      svg {
        transform: rotate(180deg);
      }
    }
  }
}

.swiper-button-disabled {
  opacity: 0.6;
}
</style>
