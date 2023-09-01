<script setup lang="ts">
import { ref } from 'vue';

import { UIToggle } from '@/components/UI/UIToggle';

import { CEnergoSoftwareCloud } from './CEnergoSoftwareCloud';
import { CEnergoSoftwareNoCloud } from './CEnergoSoftwareNoCloud';

const isCloud = ref(false);
</script>

<template>
  <div 
    class="power-supply-companies-CEnergo-software"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div class="left-block-header">
        <h2 class="left-block-title">cEnergo</h2>
        <UIToggle 
          class="toggle"
          label="Cloud" 
          :checked="isCloud" 
          @change.stop="isCloud = $event.target.checked" 
        />
    </div>
    <div class="info-blocks">
      <CEnergoSoftwareCloud
      :data-aos-duration="500"
        data-aos="fade-in"
        v-if="isCloud"
      />
      <CEnergoSoftwareNoCloud 
        data-aos="fade-in"
        :data-aos-duration="500"
        v-if="!isCloud"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.power-supply-companies-CEnergo-software {
  position: relative;
}


.toggle {
  position: relative;
  z-index: 10;
}
.left-block-header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 40px;
}

.left-block-title {
  @include title-h1;
}
</style>