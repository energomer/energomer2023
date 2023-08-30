<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';
import { IcSecurity, IcWiFi } from '@/components/UI/Icons';

const information = [
  {
    tab: '',
    component: InfoCard,
    props: {
      title: ['Область применения'],
      descriptionList:[
        'Разграничение прав доступа',
        'Управление учетными записями',
        'Доступ к личному кабинету абонента Система управления проектами Управление счетчиками в проекте',
        'Сбор и обработка данных (в система АСКУЭ в связке с cEnergo)',
        'Управление реле нагрузки приборов учета',
        'Ведение системного журнала',
        'Мониторинг телеметрической информации от телемеханизированного оборудования и электропитающих установкой'
      ],
      benefits: [
        {
          text: 'Удобный доступ к продукту с широкими возможностями по обеспечению безопасности.',
          icon: IcSecurity
        },
        {
          text: 'СeCloud реализует контейнерную микросервисную архитектуру с доступом к веб-интерфейсу через сеть интернет, приватную или локальную сети',
          icon: IcWiFi,
        }
      ]
    }
  },
]
</script>

<template>
  <div class="CEnergo-software-cloud">
    <div 
      class="left-block"
    >
      <p class="description">
        ПО предназначено для измерения и многотарифного коммерческого учёта электрической энергии и мощности, автоматизированного сбора, хранения, обработки и отображения данных по энергопотреблению
      </p>
      <div class="image-wrapper">
        <img src="../../../../assets/images/solution-for-power-supply-companies/cenergo-cloud.png" alt="">
      </div>
    </div>
    <div class="right-block">
      <StepperWithTabs :items="information"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CEnergo-software-cloud {
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
  margin-bottom: 30px;
  top: 110px;
  max-width: 653px;
  color: $color-dark-grey;
}
</style>