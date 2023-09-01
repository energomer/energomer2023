<script setup lang="ts">
import { Carousel } from '@/components/Carousel';
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

import img from './image 95.png'
import img1 from './image 95-1.png'
import img2 from './image 95-2.png'
import img3 from './image 95-3.png'
import img4 from './image 95-4.png'
import img5 from './image 95-5.png'
import img6 from './image 95-6.png'
import img7 from './image 95-7.png'
import img8 from './image 95-8.png'
import img9 from './image 95-9.png'


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

const slides = [
  {
    img,
    title: 'CE208-S7 СПОДЭС / DLMS',
    text: 'Однофазный многотарифный счетчик активной и реактивной энергии'
  },
  {
    img: img1,
    title: 'СE208-C4 СПОДЭС / DLMS',
    text: 'Счетчик электроэнергии однофазный многотарифный'
  },
  {
    img: img2,
    title: 'CE308-S34 СПОДЭС / DLMS',
    text: 'Трехфазный многотарифный счетчик активной и реактивной энергии'
  },
  {
    img: img3,
    title: 'CE308-S31 СПОДЭС / DLMS',
    text: 'Счетчик электроэнергии трехфазный многофункциональный'
  },
  {
    img: img4,
    title: 'CE308-C36 СПОДЭС / DLMS',
    text: 'Трехфазный многотарифный счетчик активной и реактивной энергии'
  },
  {
    img: img5,
    title: 'CE207-R7',
    text: 'Счетчик электроэнергии однофазный многотарифный'
  },
  {
    img: img6,
    title: 'CE207-S7',
    text: 'Счетчик электроэнергии однофазный многотарифный'
  },
  {
    img: img7,
    title: 'СE307-R34',
    text: 'Счетчик электроэнергии трехфазный многотарифный'
  },
  {
    img: img8,
    title: 'СE307-S35',
    text: 'Счетчик электроэнергии трехфазный многотарифный'
  },
  {
    img: img9,
    title: 'СЕ805М',
    text: 'Устройство сбора и передачи данных'
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
      <Carousel class="carousel-products" :slides="slides"/>
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

.carousel-products {
  margin-top: 40px;
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
  color: $color-black;
  max-width: 850px;
  margin-top: 20px;
  font-size: 14px;
}

.image {
  position: absolute;
  bottom: 20px;
  right: 30px;
  left: initial;
  margin: 0;
  border-radius: 20px;
}

</style>