<script setup lang="ts">
import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const information = [
  {
    tab: 'Область применения',
    component: InfoCard,
    props: {
      title: ['Область применения'],
      description:[
        'Интеллектуальные системы учета электроэнергии (ИСУЭ) как на розничном, так и на оптовом рынке электроэнергии для электросетевых и сбытовых компаний.',
      ],
      descriptionList: [
        'Разграничение прав по типу пользователей',
        'Одновременная работа с группой однотипных устройств',
        'Считывание/запись даты и времени подключенных устройств',
        'Получение информации о подключенных устройствах',
        'Выполнение команд на подключенных устройствах',
        'Изменение параметров конфигурации подключенных устройств',
        'Контроль текущего состояния подключенных устройств',
        'Мониторинг измерений, хранящихся в подключенных устройствах',
        'Доступ к журналу событий подключенных устройств'
      ]
    }
  },
  {
    tab: 'Характеристики',
    component: InfoCard,
    props: {
      title: ['Характеристики'],
      characteristics: [
        'COM-порт', 'Ethernet', 'Инфракрасный порт IrDa', 'Оптическая головка',
        'Адаптер RS232-RS485', 'PLC-модем', 'Радио-модем'
      ],
      descriptionList: [
        ' Разграничение прав по типу пользователей',
        ' Одновременная работа с группой однотипных устройств',
        ' Считывание/запись даты и времени подключенных устройств',
        ' Получение информации о подключенных устройствах',
        ' Выполнение команд на подключенных устройствах',
        ' Изменение параметров конфигурации подключенных устройств',
        ' Контроль текущего состояния подключенных устройств',
        ' Мониторинг измерений, хранящихся в подключенных устройствах',
        ' Доступ к журналу событий подключенных устройств'
      ]
    }
  }
]
</script>

<template>
  <div 
    class="power-supply-companies-admin-tools-software"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h2 class="title">Admin Tools</h2>
      <p class="subtitle">Конфигурирование, наладка и контроль работы приборов учёта «Энергомера»</p>
      <p class="description">ПО Admin Tools позволяет производить любые доступные действия по любому доступному интерфейсу связи с каждым поддерживаемым прибором и устройством</p>
      <img class="image" src="../../../assets/images/solution-for-power-supply-companies/admin-tools.png" alt="">
    </div>
    <div class="right-block">
      <StepperWithTabs :items="information">
      </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.power-supply-companies-admin-tools-software {
  display: flex;
  justify-content: space-between;
}

.title {
  margin-top: 40px;
  @include title-h1;
}

.subtitle {
  margin-top: 10px;
  color: $color-dark-grey;
}

.description {
  @include subtitle;
  margin-top: 30px;
  color: $color-dark-grey;
  max-width: 850px;
}

.image {
  margin: 0;
  margin-top: 70px;
  position: absolute;
  left: -90px;
}

.image-bubble {
  position: absolute;
  top: 0;
  right: 0;
}

</style>