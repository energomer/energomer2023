<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: 'Возможности',
    component: InfoCard,
    props: {
      title: ['Возможности ПО'],
      descriptionList: [
        'Совместимость со Split-счетчиками',
        'Журнал потребления электроэнергии',
        'Просмотр текущих показаний',
        'Контроль тарифа',
        'Передача показаний в энергосбытовую компанию',
        'История переданных данных',
        'Канал связи: Bluetooth (версии 4 и выше)'
      ]
    }
  },
  {
    tab: 'Диагностика оборудования',
    component: InfoCard,
    props: {
      title: ['Дополнительный инструмент диагностики оборудования'],
      descriptionList: [
        'Считывание векторных диаграмм (для трехфазных счетчиков)',
        'Просмотр параметров сети (для однофазных счетчиков)',
        'Тревожные события (вскрытие клеммной колодки, вскрытие корпуса счетчика, срабатывание датчика магнитного поля)',
        'Совместимость работы с приборами учета всех исполнений'
      ]
    }
  }
]
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
      <h2 class="title">Энергомера учёт</h2>
      <p class="description">Эффективное дополнение компактного индикаторного устройства CE901 для удобного сбора данных о потреблении электроэнергии</p>
      <img class="image" src="../../../assets/images/solution-for-power-supply-companies/mobile-app.png" alt="">
      <img class="image-qr" src="../../../assets/images/solution-for-power-supply-companies/qr-code.png" alt="">
    </div>
    <div class="right-block">
      <StepperWithTabs :items="information" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.power-supply-companies-mobile-app {
  display: flex;
  justify-content: space-between
}
.left-block {
  position: relative;
}

.title {
  margin-top: 40px;
  @include title-h1;
}

.description {
  @include subtitle;
  margin-top: 30px;
  color: $color-dark-grey;
  max-width: 850px;
}

.image {
  margin-top: 70px;
  margin-left: 70px;
  position: static;
}

.image-qr {
  position: absolute;
  bottom: 200px;
  left: 690px;
  z-index: 1;
}
</style>