<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: 'Область применения',
    component: InfoCard,
    props: {
      title: ['Область применения'],
      description:[
        'Интеллектуальные системы учета для розничного рынка электроэнергии: ТСЖ, ДНТ, СНТ и др.',
        'Эффективно для энергосетевых и управляющих компаний.'
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
        'Настройка узлов, ветвей и линий',
        'Отображение и выгрузка осциллограммы',
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
        'MS .Net Framework 4.7.1',
        'Microsoft Visual C++ 2005-2008-2010-2012-2013-2015-2017-2019',
        'Redistributable Package'
      ]
    }
  }
]

</script>

<template>
  <div class="CEnergo-software-no-cloud">
    <div class="left-block">
      <p class="description">
        ПО предназначено для измерения и многотарифного коммерческого учёта электрической энергии и мощности, автоматизированного сбора, хранения, обработки и отображения данных по энергопотреблению
      </p>
      <div class="image-wrapper">
        <img src="../../../../assets/images/solution-for-power-supply-companies/cEnergo-image.png" alt="">
      </div>
    </div>
    <div class="right-block">
      <StepperWithTabs :items="information"/>
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
</style>