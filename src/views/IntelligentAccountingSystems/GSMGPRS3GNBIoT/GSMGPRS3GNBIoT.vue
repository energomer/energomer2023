<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: '',
    component: InfoCard,
    props: {
      title: ['Характеристики канала связи G3-PLC'],
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
      <h2 class="title">АСКУЭ на базе каналов связи GSM/GPRS/3G и NB-IoT</h2>
      <p class="description">Для сбора данных с отдельно расположенных точек учета могут быть использованы сети мобильной связи. В продуктовой линейке Компании Энергомера доступны как счетчики с широко используемыми технологиями GSM/GPRS/3G, так и с перспективным каналом связи интернета вещей NB-IoT.</p>
      <p class="description">NB-IoT (Narrow Band Internet of Things) – стандарт сотовой связи для устройств телеметрии с низкими объёмами обмена данными.Разработан консорциумом 3GPP в рамках работ над стандартами сотовых сетей нового поколения. Канал связи призван заменить устаревающие технологии ранних поколений мобильной связи, такие как GPRS и EDGE.</p>
      <p class="description">Применение приведенных каналов связи в АСКУЭ рекомендуется для счетчиков, установленных в небольшом количестве, либо в значительно удаленных от УСПД точках учета.</p>
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
  left: 30px;
  left: initial;
  margin: 0;
}

</style>