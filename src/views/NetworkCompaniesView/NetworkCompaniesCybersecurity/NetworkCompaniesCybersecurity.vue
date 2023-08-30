<script setup lang="ts">
import { ref } from 'vue';

import { InfoCard } from '@/components/InfoCard';
import { StepperWithTabs } from '@/components/StepperWithTabs';
import { ICEnergyLogo,IcRfLogo } from '@/components/UI/Icons';

import { SecuritySlide } from './Security'

const information = [
  {
    tab: 'Объекты защиты',
    component: SecuritySlide,
  },
  {
    tab: 'СКЗИ включает',
    component: InfoCard,
    props: {
      title: ['СКЗИ включает'],
      descriptionList: [
        'ПУ со встроенным СКЗИ для применения в «двухуровневой схеме», когда прибор учёта подключается непосредственно к ИВК ИСУЭ (планируется в 2023-2024 г.)',
        'УСПД для групповой защиты ПУ; при этом ПУ могут применяться без СКЗИ или с СКЗИ, выполняющим только функцию аутентификации ПУ в режиме считывания показаний',
        'Подсистему криптографической защиты ИСУЭ, выполняющую функции шлюза для взаимосвязи между ИСУЭ и криптографическими программно-аппаратными комплексами',
        'Криптографические ПАК – серверные СКЗИ, выполняющие криптографические операции с данными',
        'Подсистему электронной регистрации СКЗИ, выполняющую функции регистрации, ввода в эксплуатацию СКЗИ и управления криптографическими ключами',
        'Центр доверия, выполняющий функции создания криптографических ключей и ключевых документов',
        'APM регистрации, выполняющий ввод ПУ и УСПД в эксплуатацию'
      ]
    }
  }
]

const leftBlockTabs = [
  {
    icon: IcRfLogo,
    text: 'Постановление Правительства РФ №890 «О порядке предоставления доступа к минимальному набору функций интеллектуальных систем учёта электрической энергии (мощности)». Постановление описывает новые функции, которые должны быть реализованы в ИСУЭ.'
  },
  {
    icon: ICEnergyLogo,
    text: 'Минэнерго России утвердило документ, описывающий «Базовую модель угроз и нарушителя ИСУЭ», который устанавливает необходимость применения СКЗИ в ИСУЭ для защиты информации, передаваемой по общедоступным каналам связи.'
  }
]

const activeTab = ref(0);
</script>

<template>
  <div 
    class="network-companies-cybersecurity"
    data-aos="fade-in"
    :data-aos-duration="500"
  >
    <div 
      class="left-block"
    >
      <h1 class="title">Кибербезопасность</h1>
      <p class="description">Специальные программы для шифрования данных, которые используются для доверенного хранения документов или передачи информации по защищенным каналам связи</p>
      <img class="image-left" src="../../../assets/images/network-companies-view/cybersecurity.png" alt="">
      <div class="left-block-info">
        <div>
          <button 
            v-for="(tab, index) in leftBlockTabs" 
            :key="tab.text" 
            :class="['tab-button', {'tab-button_active': index === activeTab}]" 
            type="button" 
            @click.stop="activeTab = index"
          >
            <component :is="tab.icon" />
          </button>
        </div>
        <p
          v-if="activeTab === 0"
          class="tab-description"     
          data-aos="zoom-in"
          :data-aos-duration="500"
        >
          {{ leftBlockTabs[0].text }}
        </p>
        <p
          v-if="activeTab === 1"
          class="tab-description"     
          data-aos="zoom-in"
          :data-aos-duration="500"
        >
          {{ leftBlockTabs[1].text }}
        </p>
      </div>
    </div>
    <div class="right-block">
      <StepperWithTabs class="info" :items="information"/>
    </div>
  </div>
</template>

<style lang="scss">
.network-companies-cybersecurity {
  display: flex;
  justify-content: space-between
}

.left-block {
  position: relative;
  overflow: hidden
}

.title {
  @include title-h1;
}

.description {
  @include subtitle;
  margin-top: 30px;
  color: $color-dark-grey;
  max-width: 850px;
}

.image-left {
  position: absolute;
  top: 60px;
}

.image {
  margin-top: 70px;
  margin-left: 70px;
}

.info {
  width: 764px !important;
}

.left-block-info {
  margin-top: 522px;
  padding: 10px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 50px;
  width: 945px;
  background: #FFFFFF80;
  box-shadow: 0px 4px 24px 8px #FFFFFF1A inset ,16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 25px -15px #0052A04D;
}

.tab-button {
  @include reset-button-style;
  width: 225px;
  height: 52px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-grey;
  margin-top: 5px;

  svg {
    @include fill-svg-and-path($color-blue);
  }

  &_active {
    background: $color-blue;

    svg {
      @include fill-svg-and-path($color-white);
    }
  }
}

.tab-description {
  max-width: 531px;
}
</style>