<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import { IcDotPattern } from '@/components/UI/Icons';
import { createRandomIntFromInterval } from '@/utils/number';

import {ellipsePositions} from './StepperWithTabs.constants';
import type { StepperWithTabsEmits, StepperWithTabsProps } from './StepperWithTabs.types';

const props = defineProps<StepperWithTabsProps>()
const emits = defineEmits<StepperWithTabsEmits>()

const ellipseStyle = ref(ellipsePositions[0]);

const activeTab = ref<string>()
const activeItem = computed(() => props.items?.find((item) => activeTab.value === item.tab))

const handleNabClick = (tab: string) => {
  activeTab.value = tab
  emits('onTabClick', tab)

  ellipseStyle.value = ellipsePositions[createRandomIntFromInterval(0, 5)]
}

onMounted(() => {
  activeTab.value = props?.items?.[0]?.tab
})
</script>

<template>
  <div class="stepper-with-tabs">
    <div class="tabs-wrapper" v-if="items?.filter((item) => item.tab).length">
      <button 
        v-for="item in items" 
        :key="item.tab" 
        :class="['tab', {'tab-active': item.tab === activeTab}]" 
        type="button"
        @click.stop="handleNabClick(item.tab)"
      >
        {{ item.tab }}
      </button>
    </div>
    <div class="content">
      <component 
        :is="activeItem?.component"
        :title="activeItem?.props?.title"
        :description="activeItem?.props?.description"
        :descriptionList="activeItem?.props?.descriptionList"
        :benefits="activeItem?.props?.benefits"
        :characteristics="activeItem?.props?.characteristics"
      />
    </div>
    <div class="background-image-wrapper">
      <img class="background-image" src="../../assets/images/lap-background.png" alt="">
      <IcDotPattern class="background-dots"/>
    </div>
    <img
      :style="ellipseStyle"
      class="ellipse" 
      src="../../assets/images/background-ellipse.png" 
      alt=""
    >
    <img
      v-if="withPhoneImage"
      class="background-image-phone"
      src="../../assets/images/phone.png" alt=""
    >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.stepper-with-tabs {
  position: relative;
  width: 740px;
  height: 850px;
  padding: 40px 33px 20px 33px;
  border-radius: 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%),
  linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 0px 10px 25px -15px #0052A04D;
}

.tabs-wrapper {
  display: flex;
  gap: 4px;
  align-items: center;
  background: #E9EAEA;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  width: fit-content;
  margin-bottom: 40px;
}

.tab {
  @include reset-button-style;
  @include tab-text;
  padding: 16px 24px;
  border-radius: 40px;
  color: $color-dark-grey;
  text-transform: uppercase;
  transition: 0.4s all;

  &-active {
    color: $color-white;
    background: linear-gradient(180deg, #007DB5 0%, #00A1D5 100%);
    box-shadow: 0px -5px 12px 0px #92E6FB80 inset, 0px -1px 2px 0px #FFFFFF66 inset, 0px 5px 15px -10px #007DB580;
  }
}

.background-image-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
}

.background-dots {
  position: absolute;
  right: 30px;
  bottom: 55px;
  z-index: -1;
}

.ellipse {
  position: absolute;
  z-index: -1;
  filter: blur(80px);
  transition: 1s all;
}

.background-image-phone {
  position: absolute;
  bottom: 0;
  z-index: 0;
}
</style>