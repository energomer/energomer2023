<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: 'Характеристики',
    component: InfoCard,
    props: {
      title: ['Характеристики гибридного канала связи PLC+RF'],
      parametersList:[
        {key: 'Скорость передачи данных', value: 'по интерфейсу 9 600 бит/сек'},
        {key: 'Способ модуляции', value: 'ROBO, DBPSK, DQPSK, D8PSK, D8PSK (выбираются автоматически)'},
        {key: 'Поддерживаемое количество устройств в рамках одного координатора', value: 'теоретически 1024'},
        {key: 'Шифрование', value: 'AES 128'},
        {key: 'Рабочая частота передачи данных', value: 'RF – 868 МГц, PLC G3 - Cenelec A'},
        {key: 'Расстояние передачи данных', value: 'до 1000 м'},
        {key: 'Протяженность сети', value: 'по результатам ППО'},
        {key: 'Ступени ретрансляции', value: 'не более 15'},
      ]
    }
  },
  {
    tab: 'Преимущества',
    component: InfoCard,
    props: {
      title: ['Преимущества PLC+RF'],
      descriptionList: [
        'Технология RF дополняет PLC в местах повышенных помех в линии электропередач',
        'Соответствие европейскому стандарту G3-PLC',
        'Соответствие стандарту RF-868',
        'Высокая помехозащищенность, за счет использованию гибридного канала',
      ]
    }
  },
]
</script>

<template>
  <div 
    class="PLCRF"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h2 class="title">АСКУЭ на базе гибридного канала связи PLC+RF</h2>
      <p class="description">АСКУЭ, построенная на гибридном канале связи имеет ряд достоинств в местах частного сектора и плотной застройки, где счетчики, располагаясь на достаточно близком расстоянии друг от друга, выступают ретрансляторами, передавая информацию посредством таких технологий связи как PLC и RF.</p>
      <p class="description">Первая из них основана на отправке информации по линиям электропередач, вторая – радиочастоты. Оба способа передачи данных имеют как преимущества, так и недостатки. Большое количество зданий, неровности окружающей местности, зашумленность нелицензируемых частотных диапазонов, промышленные источники помех отрицательно влияют на надежность передачи данных.</p>
      <p class="description">Для снижения рисков, АО «Электротехнические заводы «Энергомера» разработало и внедряет систему, построенную на гибридном канале связи PLC + RF.</p>
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information" 
      >
        <img class="image" src="../../../assets/images/PLCRF.png" alt="">
      </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.PLCRF {
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
  margin: 0;
}

</style>