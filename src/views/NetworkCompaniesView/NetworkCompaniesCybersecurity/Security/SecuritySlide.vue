<script setup lang="ts">
import { IcInfo } from '@/components/UI/Icons';

import tab1 from '../../../../assets/images/network-companies-view/tab1.png'
import tab2 from '../../../../assets/images/network-companies-view/tab2.png'
import tab3 from '../../../../assets/images/network-companies-view/tab3.png'

const tabs = [
  {link: tab1, text: 'ИВК'},
  {link: tab2, text: 'ИВК ИСУЭ'},
  {link: tab3, text: 'Приборы учёта'},
]
</script>

<template>
  <div class="security">
    <h2>Объекты защиты</h2>
    <div 
      class="security-tabs-list"        
      data-aos="fade-left"
      >
      <div 
        v-for="item in tabs" 
        :key="item.link" 
        class="tab"
      >
          <img
          :src="item.link"
          alt=""     
        >
        <span>{{ item.text }}</span>
      </div>
    </div>
    <div 
      class="schema-wrapper"       
      data-aos="fade-in"
      :data-aos-duration="600"
    >
      <h3 class="schema-title">
        Структурная схема ИСУЭ с СКЗИ
      </h3>
      <img class="image" src="../../../../assets/images/network-companies-view/schema.png" alt="">
    </div>
    <div class="schema-info">
      <IcInfo class="schema-info-icon"/>
      <p class="schema-description">
        АС СКЗИ выполняет функции защиты информации при использовании коммуникационных протоколов, профиль которых определяется стандартами DLMS, ГОСТ Р 58940-2020 и методического документа МР 26.4.003-2019
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.security-tabs-list {
  margin-top: 30px;
  display: flex;
  gap: 10px;
}

.schema-wrapper {
  margin-top: 10px;
  padding-bottom: 20px;
  background: #fff;
  position: relative;
  z-index: 1;
  border-radius: 20px;
}

.schema-title {
  padding-left: 30px;
  padding-top: 30px;
}

.image {
  margin-left: 57px;
  margin-right: 200px;
  position: static;
  @include subtitle;
}

.tab {
  padding: 10px;
  background: $color-white;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  min-width: 218px;
  width: 100%;
}

.schema-info {
  margin-top: 15px;
  display: flex;
  gap: 20px;

  &-icon {
    min-width: 40px;
  }
}

.schema-description {
  color: #90A3A9;
}
</style>