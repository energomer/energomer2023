<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: 'Характеристики',
    component: InfoCard,
    props: {
      title: ['Характеристики канала связи G3-PLC'],
      parametersList:[
        {key: 'Скорость передачи данных', value: 'до 45 кбит/с'},
        {key: 'Способ модуляции', value: 'OFDM'},
        {key: 'Поддерживаемое кол-во устройств в рамках одного координатора', value: 'до 400 устройств'},
        {key: 'Шифрование', value: 'AES-128'},
        {key: 'Рабочая частота передачи данных', value: '30 – 90 кГц'},
      ]
    }
  },
  {
    tab: 'Преимущества',
    component: InfoCard,
    props: {
      title: ['Преимущества G3-PLC'],
      descriptionList: [
        'Автоматизация мониторинга и управления через шкаф телемеханики ТМ «Энергомера»',
        'Прием сообщений от приборов учета и визуализация мест обрыва фаз',
        'Локализация аварии всего за несколько минут!'
      ]
    }
  },
]
</script>

<template>
  <div 
    class="G3PLC"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h2 class="title">АСКУЭ на базе канала связи G3-PLC</h2>
      <p class="description">PLC (Power Line Communication) – технология обмена данными непосредственно по линиям электропередачи. Для построения АСКУЭ Компанией «Энергомера» выбран один из наиболее современных стандартов – G3-PLC, развитие которого производится одноименным альянсом, объединяющим ведущих мировых производителей микроэлектроники и энергетического оборудования. Для передачи данных используется модуляция OFDM, применение которой существенно увеличивает помехоустойчивость и пропускную способность канала связи, по сравнению с конкурирующими технологиями. В результате обеспечивается оперативный сбор данных и журналов событий со счетчиков электроэнергии даже в изношенных электрических сетях.</p>
      <p class="description">Применение данной технологии сбора данных рекомендуется на тех объектах АСКУЭ, где предполагается большой объем собираемых данных и требуется оперативная реакция оборудования на команды оператора.</p>
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information" 
      >
        <img class="image" src="../../../assets/images/G3-PLC.png" alt="">
      </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.G3PLC {
  display: flex;
  justify-content: space-between;
}

.title {
  margin-top: 40px;
  @include title-h2;
}

.subtitle {
  margin-top: 10px;
  color: $color-dark-grey;
}

.description {
  @include subtitle;
  margin-top: 30px;
  color: $color-black;
  max-width: 850px;
  font-size: 16px;
}

.image {
  position: absolute;
  bottom: 20px;
  right: 30px;
  left: initial;
  margin: 0;
}

</style>