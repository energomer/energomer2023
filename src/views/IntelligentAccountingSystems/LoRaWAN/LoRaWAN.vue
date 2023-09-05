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

const information = [
  {
    tab: 'Характеристики',
    component: InfoCard,
    props: {
      title: ['Характеристики канала связи G3-PLC'],
      parametersList:[
        {key: 'Дальность связи', value: 'до 5 км в городской средедо 15 км в зоне прямой видимости'},
        {key: 'Частотный диапазон', value: '864 – 870 МГц'},
        {key: 'Количество частотных каналов', value: '8 (ширина канала 125 кГц)'},
        {key: 'Мощность передатчика (счетчик)', value: '25 мВт'},
        {key: 'Мощность передатчика (базовая станция)', value: 'до 100 мВт'},
        {key: 'Скорость передачи данных', value: '300 – 5120 бит/с'},
        {key: 'Шифрование', value: 'AES-128'},
      ]
    }
  },
  {
    tab: 'Преимущества',
    component: InfoCard,
    props: {
      title: ['Преимущества LoRaWan'],
      descriptionList: [
        'Высокая дальность связи –до 5 км в городе и до 15 км в сельской местности',
        'Эффективность и простотаорганизации в городской среде',
        'Простая интеграцияв различные программные комплексы',
        'Оптимальная стоимость системы за счет малого количества базовых станций'
      ]
    }
  },
]

const slides = [
  {
    img,
    title: 'CE207-R7',
    text: 'Счетчик электроэнергии однофазный многотарифный'
  },
  {
    img: img1,
    title: 'СE307-R34',
    text: 'Счетчик электроэнергии трехфазный многотарифныйй'
  },
  {
    img: img2,
    title: 'CE208-S7 СПОДЭС / DLMS',
    text: 'Однофазный многотарифный счетчик активной и реактивной энергии'
  },
  {
    img: img3,
    title: 'СE208-C4 СПОДЭС / DLMS',
    text: 'Счетчик электроэнергии однофазный многотарифный'
  },
  {
    img: img4,
    title: 'CE308-S34 СПОДЭС / DLMS',
    text: 'Трехфазный многотарифный счетчик активной и реактивной энергии'
  },
  {
    img: img5,
    title: 'CE308-S31 СПОДЭС / DLMS',
    text: 'Счетчик электроэнергии трехфазный многофункциональный'
  },
  {
    img: img6,
    title: 'CE308-C36 СПОДЭС / DLMS',
    text: 'Трехфазный многотарифный счетчик активной и реактивной энергии'
  },
]
</script>

<template>
  <div 
    class="LoRaWAN"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h2 class="title">АСКУЭ на базе канала связи LoRaWAN</h2>
      <p class="description">LoRaWAN – реализация энергоэффективной сети дальнего радиуса действия (LPWAN - low-power wide-area network) c применением модуляции LoRa (Long Range).</p>
      <p class="description">Ключевой особенностью канала связи является значительная дальность связи – до 15 километров в при отсутствии преград между приемником и передатчиком. Другим преимуществом технологии является низкое энергопотребление, обуславливающее перспективы ее использования в устройствах на батарейном питании.</p>
      <p class="description">Компанией Энергомера разработаны счетчики электроэнергии со встроенными модулями связи LoRaWAN. Реализация АСКУЭ осуществляется в партнерстве с оператором связи, предоставляющим возможность использования имеющейся «облачной» инфраструктуры (собранные данные хранятся на серверах оператора) или развертывания собственной закрытой сети (собранные данные хранятся в энергоснабжающей организации). Обеспечивается возможность интеграции в различные программные комплексы для анализа данных и предоставления потребителям личных кабинетов с отображением информации об энергопотреблении.</p>
      <p class="description">Применение канала связи рекомендуется на небольших объектах АСКУЭ, где производится сбор основных данных об энергопотреблении и основных журналов событий.</p>
      <Carousel class="carousel-products" :slides="slides"/>
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information" 
      >
        <img class="image" src="../../../assets/images/LoRaWAN.png" alt="">
      </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LoRaWAN {
  display: flex;
  justify-content: space-between;
}

.title {
  margin-top: 40px;
  @include title-h2;
}


.left-block {
  overflow: inherit;
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
  left: 30px;
  left: initial;
  margin: 0;
  border-radius: 20px;
}

.carousel-products {
  margin-top: 10px;
}

</style>