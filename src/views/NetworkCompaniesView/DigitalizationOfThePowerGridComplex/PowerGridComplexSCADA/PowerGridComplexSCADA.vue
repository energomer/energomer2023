<script setup lang="ts">
import { ref } from 'vue';

import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: 'Область применения',
    component: InfoCard,
    props: {
      title: ['Область применения'],
      description:[
        'Крупные энергосбытовые компании. Реализация концепции «РЭС»'
      ]
    }
  },
  {
    tab: 'Возможности',
    component: InfoCard,
    props: {
      title: ['Функциональные возможности'],
      descriptionList: [
        'Оповещение об аварии и отключение повреждённого участка',
        'Организация телеметрии',
        'Мониторинг оперативного состояния оборудования',
        'Мониторинг физических параметров электроэнергии',
        'Контроль доступа на объект в режиме реального времени',
        'Мониторинг SAIDI, SAIFI и качества электроснабжения',
        'Дистанционный доступ к цифровому оборудованию для конфигурирования и настройки'
      ]
    }
  },
  {
    tab: 'Принцип работы',
    component: InfoCard,
    props: {
      title: ['Принцип работы'],
      description: [
        'Автоматизация мониторинга и управления электрической сетью с помощью оборудования ТМ «Энергомера»',
        'Прием информации от приборов учета и визуализация мест обрыва фаз',
        'Локализация аварии всего за несколько минут'
      ]
    }
  },
]

const activeItem = ref(0);

</script>

<template>
    <div 
    class="power-grid-complex-SCADA"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h2 class="title">SCADA CE2.0</h2>
      <p class="description">Программно-апаратный комплекс для автоматизации управления и учёта</p>
      <img class="image" src="../../../../assets/images/cEnergoScada.png" alt="">
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information"
        @on-tab-click="activeItem = information.findIndex((item) => item.tab === $event)"
      >
      <div 
        v-if="activeItem === 0" 
        class="right-block-slot"
        data-aos="fade-in"
        :data-aos-duration="500"
      >
        <img src="../../../../assets/images/banground-Scada.png" alt="">
        <img class="scada-dots" src="../../../../assets/images/scada-dots.png" alt="">
        <div class="right-block-title">
          Описание
        </div>
        <p class="right-block-description">
          Комплексное решение для реализации концепции «Цифровая подстанция 2030» и «Цифровой РЭС». Пакетное решение для работы в реальном времени: сбор, обработка, отображение и архивирование информации об объекте мониторинга и управления
        </p>
      </div>
      </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss">
.power-grid-complex-SCADA {
  display: flex;
  justify-content: space-between
}
.left-block {
  position: relative;
  overflow: initial
}

.title {
  @include title-h1;
}

.description {
  @include subtitle;
  margin-top: 30px;
  color: $color-dark-grey;
  max-width: 850px;
}

.image {
  position: absolute;
  left: -140px;
  margin-top: 0;
}

.scada-dots {
  position: absolute;
  left: 0;
}

.image-qr {
  position: absolute;
  bottom: 200px;
  left: 690px;
  z-index: 1;
}

.right-block-slot {
  position: absolute;
  top: 301px;
}

.right-block-title {
  @include subtitle;
}

.right-block-description {
  margin-top: 20px;
  width: 435px;
}
</style>