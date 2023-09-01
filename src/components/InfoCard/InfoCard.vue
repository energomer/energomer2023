<script setup lang="ts">
import type { InfoCardProps } from './InfoCard.types';

defineProps<InfoCardProps>()
</script>

<template>
  <div class="info-card">
    <h2 
      class="title" 
      v-for="t in title"
      :key="t"
      data-aos="fade-in"  
      :data-aos-duration="500" 
    >
      {{ t }}
    </h2>
    <div class="description" v-if="description" >
      <p 
        v-for="paragraph in description" 
        :key="paragraph" 
        data-aos="fade-in"  
        :data-aos-duration="500" 
        :data-aos-delay="300"
        class="paragraph"
      >
        {{ paragraph }}
      </p>
    </div>
    <div class="list" v-if="descriptionList">
      <div 
        class="list-item" 
        v-for="(item, index) in descriptionList" 
        :key="item"
        data-aos="fade-right"
        :data-aos-duration="250"
        :data-aos-delay="250 * index"
      >
        {{ item }}
      </div>
    </div>
    <div class="characteristics" v-if="characteristics">
      <div 
        class="characteristic" v-for="(characteristic, index) in characteristics" 
        :key="characteristic"
        data-aos="fade-in"
        :data-aos-duration="250"
        :data-aos-delay="250 * index"
      >
        {{ characteristic }}
      </div>
    </div>
    <div class="parameters" v-if="parametersList">
      <div 
        class="parameter" v-for="(parameter, index) in parametersList" 
        :key="parameter.key"
        data-aos="fade-in"
        :data-aos-duration="250"
        :data-aos-delay="250 * index"
      >
        <div class="parameter-key">{{ parameter.key }}</div>
        <div class="parameter-value">{{ parameter.value }}</div>
      </div>
    </div>
    <div class="benefits" v-if="benefits">
      <div 
        class="benefit-card" v-for="(benefit, index) in benefits" 
        :key="benefit.text"
        data-aos="fade-left"
        :data-aos-duration="500"
        :data-aos-delay="250 * index"
      >
        <div class="benefit-card-icon">
          <component :is="benefit.icon" />
        </div>
        <p class="benefit-card-text">
          {{ benefit.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  @include title-h3;
  max-width: 470px;
  margin: 0;
}

.description {
  margin-top: 20px;
  max-width: 480px;
}

.paragraph {
  margin-top: 20px;
  color: $color-black;
  @include body-text;
}

.list {
  margin-top: 20px;
}

.list-item {
  position: relative;
  padding: 10px 0 10px 100px;
  border-top: 1px solid #CFCCCA;

  &:last-child {
    border-bottom: 1px solid #CFCCCA;
  }

  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: #DEE4EB;
    box-shadow: 0px 2px 1px 0px #FFFFFF;
    border-radius: 50%;
  }
}

.characteristics {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.characteristic {
  padding: 10px 15px;
  background: linear-gradient(0deg, #DEE4EB, #DEE4EB);
  border-bottom: 1px solid #90A3A9;
  border-radius: 10px;
  border: 0px 0px 1px 0px;
}

.benefits {
  position: absolute;
  bottom: 26px;
  display: flex;
  gap: 20px;
  z-index: 1;
}

.benefit-card {
  width: 300px;
  padding: 20px;
  background: $color-white;
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, 16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 25px -15px #0052A04D;
  border-radius: 40px;
}

.benefit-card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  min-width: 44px;
  background: $color-grey;
  border-radius: 10px;
}

.benefit-card-text {
  margin-top: 15px;
}

.parameters {
  margin-top: 20px;
}

.parameter {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #CFCCCA;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;

  &-key {
    color: #90A3A9;
    max-width: 360px;

  }

  &-value {
    width: 250px;
    text-align: left;
  }
}
</style>