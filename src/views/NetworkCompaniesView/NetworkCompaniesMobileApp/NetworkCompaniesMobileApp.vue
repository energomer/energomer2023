<script setup lang="ts">
import { computed, ref } from 'vue';

import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: 'ceSMR',
    component: InfoCard,
    props: {
      title: ['Функциональные возможности'],
      descriptionList:[
        'Контроль замены приборов учета с внесением в базу серийных номеров старого и нового счетчика',
        'Формирование истории операций',
        'Формирование отчета о выполнении работ',
        'Контроль выполнения операций',
        'Формирование таблиц с использованием картографических сервисов'
      ]
    }
  },
  {
    tab: 'cePPO',
    component: InfoCard,
    props: {
      title: ['Функциональные возможности'],
      descriptionList: [
        'Фотофиксация работ с привязкой к геокоординатам',
        'Ведение базы данных по каждому объекту и точке учета',
        'Фильтрация координат',
        'Редактирование данных, введенных по УСПД',
        'Редактирование линий, опор и абонентов',
        'Поисковик по абонентам',
        'Сохранение и обмен фотографиями'
      ]
    }
  },
]


const description = computed(() => [
  'Мобильное приложение для автоматизации операций по замене приборов учета электроэнергии',
  'Мобильное приложение для автоматизации поопорного предпроектного обследования на любых объектах'
])
const activeItem = ref(0)

const handleTabClick = (tab: string) => {
  const index = information.findIndex((item) => item.tab === tab)

  activeItem.value = index;
}
</script>

<template>
  <div 
    class="power-supply-companies-mobile-app"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h2
        v-if="activeItem === 0" 
        class="title"
        data-aos="fade-in"
        :data-aos-duration="500"
      >
        {{ information[0].tab }}
      </h2>
      <h2
        v-if="activeItem === 1" 
        class="title"
        data-aos="fade-in"
        :data-aos-duration="500"
      >
        {{ information[1].tab }}
      </h2>
      <p
        v-if="activeItem === 0"
        data-aos="fade-in"
        :data-aos-duration="500"
        class="description"
      >
        {{ description[0] }}
      </p>
      <p
        v-if="activeItem === 1"
        data-aos="fade-in"
        :data-aos-duration="500"
        class="description"
      >
        {{ description[1] }}
      </p>
      <div class="image-wrapper">
        <img class="image-background-scheme" src="../../../assets/images/network-companies-view/scheme.png" alt="">
        <img class="image-background" src="../../../assets/images/network-companies-view/engineer.png" alt="">
      </div>
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information" 
        with-phone-image 
        @on-tab-click="handleTabClick"
      >
        <div class="children-slot">
          <h4 class="children-slot-title">Особенности</h4>
          <p class="children-slot-text">Программный комплекс включает в себя мобильное приложение для работы исполнителей на объектах, и веб-кабинет для формирования заданий и контроля их выполнения инженером.</p>
        </div>
      </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.power-supply-companies-mobile-app {
  display: flex;
  justify-content: space-between;
}

.image-wrapper {
  margin-top: 117px;
  position: relative;
}
.left-block {
  overflow: initial;
}
.image-background {
  position: absolute;
  left: 50px;
}

.image-background-scheme {
  position: absolute;
  z-index: 10;
  left: -80px;
  top: -60px;
}

.children-slot {
  position: absolute;
  z-index: 1;
  width: 278px;
  bottom: 200px;
  left: 325px;

  &-title {
    @include subtitle;
  }

  &-text {
    margin-top: 10px;
    @include tab-text;
  }
}

</style>