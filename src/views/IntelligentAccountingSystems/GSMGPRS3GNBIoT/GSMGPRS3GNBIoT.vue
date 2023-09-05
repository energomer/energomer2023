<script setup lang="ts">
import { Carousel } from '@/components/Carousel';
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

import img5 from './image 95.png'
import img6 from './image 95-1.png'
import img7 from './image 95-2.png'
import img8 from './image 95-3.png'
import img from './image 95-4.png'
import img1 from './image 95-5.png'
import img2 from './image 95-6.png'
import img3 from './image 95-7.png'
import img4 from './image 95-8.png'


const slides = [
  {
    img,
    title: 'CE208-S7СПОДЭС / DLMS',
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
]

const information = [
  {
    tab: '',
    component: InfoCard,
    props: {
      title: ['Преимущества GSM/GPRS/3G/4G и NB-IoT'],
      descriptionList:[
        'Эффективен для систем с небольшим количеством приборов учета',
        'Оптимален для связи с удаленными точками учета',
        'Высокая стабильность качества связи',
        'Отсутствие уровня УСПД обеспечивает снижение стоимости системы',
        'Возможность использования в качестве дополнения для уже существующих АСКУЭ'
      ]
    }
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
      <h2 class="title">АСКУЭ на базе каналов связи GSM/GPRS/3G/4G и NB-IoT</h2>
      <p class="description">Для сбора данных с отдельно расположенных точек учета могут быть использованы сети мобильной связи. В продуктовой линейке Компании Энергомера доступны как счетчики с широко используемыми технологиями GSM/GPRS/3G/4G, так и с перспективным каналом связи интернета вещей NB-IoT.</p>
      <p class="description">NB-IoT (Narrow Band Internet of Things) – стандарт сотовой связи для устройств телеметрии с низкими объёмами обмена данными.Разработан консорциумом 3GPP в рамках работ над стандартами сотовых сетей нового поколения. Канал связи призван заменить устаревающие технологии ранних поколений мобильной связи, такие как GPRS и EDGE.</p>
      <p class="description">Применение приведенных каналов связи в АСКУЭ рекомендуется для счетчиков, установленных в небольшом количестве, либо в значительно удаленных от УСПД точках учета.</p>
      <Carousel class="carousel-products" :slides="slides"/>
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information" 
      >
        <img class="image" src="../../../assets/images/GSMGPRS3GNBIoT.png" alt="">
      </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LoRaWAN {
  display: flex;
  justify-content: space-between;
}

.left-block {
  overflow: inherit;
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
  left: 24px;
  margin: 0;
  border-radius: 20px;
}

.carousel-products {
  margin-top: 40px;
}
</style>