<script setup lang="ts">
import { ref } from 'vue';

import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';
import { IcThunder } from '@/components/UI/Icons';

import frame1 from '../../../../assets/images/solution-for-power-supply-companies/Frame-123.png'
import frame2 from '../../../../assets/images/solution-for-power-supply-companies/Frame-124.png'
import frame3 from '../../../../assets/images/solution-for-power-supply-companies/Frame-125.png'


const decorImages = [
  frame1, frame2, frame3
]

const information = [
  {
    tab: 'Область применения',
    component: InfoCard,
    props: {
      title: ['Область применения'],
      description:[
        'Интеллектуальные системы учета для розничного рынка электроэнергии: ТСЖ, ДНТ, СНТ и др.',
      ]
    }
  },
  {
    tab: 'Принцип работы',
    component: InfoCard,
    props: {
      title: ['Принцип работы'],
      descriptionList: [
        'Автоматизированный сбор, хранение, обработка и отображение данных по энергопотреблению',
        'Расчёт и локализация технических и коммерческих потерь',
        'Интеграция с АСДУ РС',
        'Приём схем и параметров электрической сети 10 кВ на основе ОИМ'
      ]
    }
  },
  {
    tab: 'Возможности',
    component: InfoCard,
    props: {
      title: ['Возможности ПО'],
      descriptionList: [
        'Измерение и многотарифный учёт активной и реактивной электрической энергии и мощности',
        'Сбор данных измерений, журналов событий и диагностической информации со счетчиков электроэнергии',
        'Управление реле нагрузки через УСПД или напрямую в счетчике',
        'Визуальное представление данных и генерация отчетных форм',
        'Измерение текущего времени при помощи системы обеспечения единого времени',
        'Защита результатов измерений, хранящихся в БД, от несанкционированного доступа',
        'Расчёт коммерческих потерь для линий 6-10 кВ, на основе измерений мгновенных значений токов и напряжений',
        'Расчёт коммерческих потерь для линий 0.4 кВ, на основе измерений профилей нагрузок токов и напряжений, усреднённых за интервал 30 или 60 минут'
      ]
    }
  },
  {
    tab: 'Требования',
    component: InfoCard,
    props: {
      title: ['Технические требования'],
      descriptionList: [
        'ОС: Windows 7 SP1 и выше',
      ]
    }
  }
]

const activeTab = ref(information[0].tab)

</script>

<template>
  <div class="CEnergo-software-no-cloud">
    <div 
      class="left-block"
    >
      <p class="description">
        ПО предназначено для измерения и многотарифного коммерческого учёта электрической энергии и мощности, автоматизированного сбора, хранения, обработки и отображения данных по энергопотреблению
      </p>
      <div class="image-wrapper">
        <img src="../../../../assets/images/solution-for-power-supply-companies/cEnergo-image.png" alt="">
      </div>
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information"
        @on-tab-click="activeTab = $event"
      >
        <div class="decor-images" v-if="activeTab === information[0].tab">
          <img 
            v-for="(image, index) in decorImages" 
            :key="image" 
            class="decor-image" 
            :src="image" alt=""
            data-aos="fade-right"
            :data-aos-duration="300"
            :data-aos-delay="100 * index"
          >
        </div>
        <div 
          class="second-tab-info" 
          data-aos="fade-in"
          :data-aos-duration="300"
          :data-aos-delay="200"
          v-if="activeTab === information[1].tab"
        >
          <div class="second-tab-icon">
            <IcThunder />
          </div>
          <div class="second-tab-title">
            Защита от изменений – уровень С по МИ 3286-2010
          </div>
          <div class="second-tab-text">
            Дополнительная абсолютная погрешность при измерении ±1 единица младшего разряда учтенного значения
          </div>
        </div>
    </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CEnergo-software-no-cloud {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.right-block {
  height: 840px;
  width: 740px;
}

.description {
  @include subtitle;
  position: absolute;
  max-width: 653px;
  color: $color-dark-grey;
}

.decor-images {
  margin-top: 140px;
  position: relative;
  display: flex;
}

.decor-image {
  position: absolute;
  left: 0;

  &:nth-child(1) {
    left: 0px;
  }

  &:nth-child(2) {
    left: 120px;
  }

  &:nth-child(3) {
    left: 240px;
  }
}

.second-tab-info {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.1) 57.29%, rgba(235, 250, 255, 0.1) 81.92%, rgba(255, 255, 255, 0.1) 100%);
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, 16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 25px -15px #0052A04D;
  padding: 20px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  margin-top: 270px;
}

.second-tab-icon {
  background: #DEE4EB;
  border-radius: 10px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.second-tab-title {
  margin: 15px 0;
  @include subtitle;
}
</style>