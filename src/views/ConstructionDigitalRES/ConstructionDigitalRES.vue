<script setup lang="ts">
import {ref} from 'vue';

import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';

const fistTabInfo = [
  'Электросетевые компании',
  'Промышленные предприятия',
  'Объекты инфраструктуры'
]

const firtsTabList = [
  'Комплексное оборудование электрических сетей',
  'Анализ планов развития предприятия и сети электроснабжения',
  'Формирование цифрового двойника',
  'Расчёт и оптимизация параметров сети',
  'Формирование рекомендаций по оптимизации и развитию электрических сетей'
]

const information = [
  {
    tab: 'Область применения',
    component: InfoCard,
      props: {
        title: ['Область применения'],
      }
  },
  {
    tab: 'Возможности ПО',
    component: InfoCard,
    props: {
      title: ['Возможности ПО'],
      descriptionList: [
        'Создание единого источника информации о состоянии сети',
        'Сбор данных из различных подсистем для создания модели сети, отражающей поведение реальной системы',
        'Снижение издержек на создание модели и использование их для анализа сети',
        'Улучшение качества информации об электрической сети',
        'Упрощение процесса выдачи заявок на технологическое присоединение',
        'Точный расчёт технических потерь в сети и оценка износа оборудования',
        'Импорт измерений и информации о состоянии коммутационного оборудования из платформ SCADA-CE 2.0 и cEnergo'
      ]
    }
  },
  {
    tab: 'Пример реализации',
    component: InfoCard,
    props: {
      title: ['Пример реализации'],
      description: [
        'Интеллектуальные приборы учета электроэнергии ТМ «Энергомера» позволяют выявлять обрыв фазных и нулевых проводов при помощи векторных измерений параметров сети и эффективного алгоритма обмена данными.',
        'Реализованный в счетчике протокол телемеханики МЭК 60870-5-104 по GSM каналу обеспечивает взаимодействие с диспетчерской системой SCADA, которая за счет анализа топологии сети и параметров совокупности ее узлов, локализует места повреждений сети и формирует команду телеуправления на УСПД для снятия опасного напряжения с поврежденного участка сети.'
      ]
    }
  }
]

const activeTab = ref(information[0].tab)
</script>

<template>
  <div 
    class="construction-digital-RES"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h2 class="title">Построение цифрового РЭС</h2>
      <p class="description">
        Программно-аппаратный комплекс, позволяющий оценивать надежность электроснабжения промышленного предприятия и выявлять уязвимые места в энергосистеме при проектировании, в процессе эксплуатации, а также при разработке сценариев развития сети
      </p>
      <p class="subtitle">Пример реализации</p>
      <img class="image" src="../../assets/images/construction-digital-RES.png" alt="">
    </div>
    <div class="right-block">
      <StepperWithTabs 
        :items="information"
        @on-tab-click="activeTab = $event"
      >
      <div v-if="activeTab === information[0].tab" class="first-tab">
        <div class="first-tab-list-wrapper">
          <div class="first-tab-list">
            <div 
              class="first-tab-item" 
              v-for="(item, index) in fistTabInfo" 
              :key="item"
              data-aos="fade-in"
              :data-aos-duration="250"
              :data-aos-delay="250 * index"
            >
              {{ item }}
            </div>
          </div>
          <img src="../../assets/images/res-1.png" alt="">
        </div>
        <div class="first-tab-steps">
          <div class="first-tab-steps-title">
            Этапы построения
          </div>
          <div class="first-tab-steps-list">
            <div 
              v-for="(item, index) in firtsTabList" 
              :key="item" 
              class="first-tab-steps-item"
              data-aos="fade-right"
              :data-aos-duration="250"
              :data-aos-delay="250 * index"
            >
              <div>{{ index + 1 }}</div>
              <div> {{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <img class="res" v-if="activeTab === information[1].tab" src="../../assets/images/res-2.png" alt=""/>
      <img class="res"  v-if="activeTab === information[2].tab" src="../../assets/images/res-3.png" alt=""/>
    </StepperWithTabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.construction-digital-RES {
  display: flex;
  justify-content: space-between
}
.left-block {
  position: relative;
}

.title {
  margin-top: 40px;
  @include title-h2;
}

.description {
  @include subtitle;
  margin-top: 20px;
  color: $color-dark-grey;
  max-width: 850px;
}

.subtitle {
  margin: 36px 0 20px 0;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: left;
}

.image {
  margin-left: 0;
  position: static;
}

.first-tab-list-wrapper {
  position: relative;

  img {
    position: absolute;
    top: -60px;
  }
}

.first-tab-list {
  margin-top: 20px;
}

.first-tab-item {
  width: fit-content;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  background: linear-gradient(0deg, #DEE4EB, #DEE4EB);
  border-bottom: 1px solid #90A3A9;
}

.first-tab-steps {
  margin-top: 132px;

  &-title {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: left;
  }

  &-list {
    margin-top: 20px;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 10px 0px;
    border-top:1px solid #CFCCCA;

    & > div:first-child {
      color: $color-blue;
    }
  }
}

.res {
  margin-top: 40px;
}
</style>