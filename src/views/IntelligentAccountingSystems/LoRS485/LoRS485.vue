<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

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