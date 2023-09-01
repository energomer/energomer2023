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