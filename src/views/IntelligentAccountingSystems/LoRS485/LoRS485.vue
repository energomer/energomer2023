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

const information = [
  {
    tab: '',
    component: InfoCard,
    props: {
      title: ['Преимущества RS-485'],
      descriptionList:[
        'Оптимальное соотношение цены и качества',
        'Эффективен для систем с небольшим количеством точек учета',
        'Стабильность и оперативность сбора данных с приборов учета',
        'Бюджетное решение для примененияв многоквартирных домах'
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
    title: 'CE308-S34 СПОДЭС / DLMS',
    text: 'Трехфазный многотарифный счетчик активной и реактивной энергии'
  },
  {
    img: img2,
    title: 'CE308-S31 СПОДЭС / DLMS',
    text: 'Счетчик электроэнергии трехфазный многофункциональный'
  },
  {
    img: img3,
    title: 'CE207-R7',
    text: 'Счетчик электроэнергии однофазный многотарифный'
  },
  {
    img: img4,
    title: 'CE207-S7',
    text: 'Счетчик электроэнергии однофазный многотарифный'
  },
  {
    img: img5,
    title: 'СE307-R34',
    text: 'Счетчик электроэнергии трехфазный многотарифный'
  },
  {
    img: img6,
    title: 'СE307-S35',
    text: 'Счетчик электроэнергии трехфазный многотарифный'
  },
  {
    img: img7,
    title: 'СЕ805М',
    text: 'Устройство сбора и передачи данных'
  },
  {
    img: img8,
    title: 'СЕ805M (B,E)',
    text: 'Устройство сбора и передачи данных'
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
      <h2 class="title">АСКУЭ на базе проводного канала связи RS-485</h2>
      <p class="description">RS-485 (Recommended Standard 485 или EIA/TIA-485-A) – широко используемая технология передачи данных по витой паре. Канал связи обеспечивает стабильность и оперативность сбора данных со счетчиков электроэнергии, но для их подключения требуется прокладка витой пары и установка устройств-разветвителей. Правильно спроектированные проводные сети позволяют реализовать эффективную связь в промышленных приложениях и в системах автоматизированного управления производственными процессами, обеспечивая устойчивость к помехам, электростатическим разрядам и перенапряжениям.</p>
      <p class="description">RS-485 для организации АСКУЭ рекомендуется применять на территории промышленных объектов и в многоквартирных домах с выделенными шахтами для прокладки линий связи. Решение является наиболее бюджетным для применения в многоквартирных домах.</p>
      <Carousel class="carousel-products" :slides="slides"/>
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information" 
      >
        <img class="image" src="../../../assets/images/LoRS485.png" alt="">
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

.carousel-products {
  margin-top: 40px;
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
  left: 28px;
  margin: 0;
  border-radius: 20px;
}

</style>