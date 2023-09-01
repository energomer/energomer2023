<script setup lang="ts">
import { ref } from 'vue';

import { IcArrow, IcBolt,IcClock,IcDotPattern,IcMaintenance } from '@/components/UI/Icons';


const activeSlide = ref(0);

const slideFirstList = [
  'Приборы и системы учета электроэнергии',
  'Метрологическое оборудование',
  'Энергетическое оборудование',
  'Телекоммуникационное монтажное и щитовое оборудование',
  'Оборудование для электрохимической защиты.'
]

const slideSecondList = [
  {
    text: 'Самый короткий производственный цикл в отрасли',
    icon: IcClock,
  },
  {
    text: 'Свыше 550 модификаций продукции',
    icon: IcMaintenance,
  },
  {
    text: 'Ежемесячно устанавливается 70 млн. компонентов',
    icon: IcBolt
  }
]

const slideThirdList = [
  {
    title: '29 лет',
    text: 'на рынке электронных приборов учета электроэнергии',
  },
  {
    title: '50 млн. ',
    text: 'выпущено свыше 50 млн счетчиков',
  },
  {
    title: '20%',
    text: 'Ежегодный рост производительности',
  },
  {
    title: ' 5,5 млн.',
    text: 'приборов учета, каждое из которых становилось прорывом в отрасли. ',
  },
]
</script>

<template>
  <div class="home">
    <div class="title-wrapper">
      <h1 class="title">О компании</h1>
      <p class="subtitle">
        <span>«Электротехнические заводы «Энергомера» –</span>  
        <span>дочернее предприятие одноименного промышленного холдинга.</span>
      </p>
    </div>
    <div class="slides-container">
      <div class="slide-first" v-if="activeSlide === 0">
        <div class="slide-first-info">
          <div  
            data-aos="fade-in"
            :data-aos-duration="400"
            class="slide-first-title"
          >
            Компания осуществляет полный цикл производства широкой номенклатуры продукции:
          </div>
          <div 
            class="slide-first-item" 
            v-for="(item, index) in slideFirstList" 
            :key="item"
            data-aos="fade-right"   
            :data-aos-duration="200"
            :data-aos-delay="200 * index" 
          >
            {{ item }}
          </div>
          <div 
            data-aos="fade-right"   
            :data-aos-duration="400"
            :data-aos-delay="1000" 
            class="slide-first-panel"
          >
            <img src="../../assets/images/home/slide-first-text-1.png" alt="">
              <div class="slide-first-dots">
                <div v-for="item in Array.from({length: 20}, (_,index) => index)" :key="item" class="slide-first-dot">
                </div>
              </div>
            <img src="../../assets/images/home/slide-firs-text-2.png" alt="">
          </div>
        </div>
        <div class="slide-first-right">
          <img 
            data-aos="slide-left"  
            :data-aos-duration="500" 
            src="../../assets/images/home/first-slide-1.png" alt=""
          >
          <img 
            data-aos="fade-in"   
            :data-aos-duration="200"
            :data-aos-delay="300" 
            class="slide-first-right-1-1" src="../../assets/images/home/slide-first-1-1.png" alt=""
          >
          <IcDotPattern 
            data-aos="fade-up"   
            :data-aos-duration="200"
            :data-aos-delay="600" 
            class="slide-first-right-1-3"
          />
        </div>
      </div>
      <div class="slide-second" v-if="activeSlide === 1">
        <div 
          class="slide-second-title"
          data-aos="fade-in"  
          :data-aos-duration="500"
          v-if="activeSlide === 1"
        >
          Ежегодно предприятия АО «Энергомера» выпускают свыше 3 млн приборов учета.
        </div>
        <p 
          class="slide-second-text"
          data-aos="fade-in"  
          :data-aos-duration="500" 
          v-if="activeSlide === 1"
        >
          В структуру компании входят четыре завода, Корпоративный институт электротехнического приборостроения и собственная инжиниринговая компания. Производственные мощности оснащены современным оборудованием. 
          <br />
          <br />
          <br />
          Каждый третий счетчик электрической энергии и каждый второй телекоммуникационный шкаф в стране носят ТМ «Энергомера».
        </p>
        <img 
          class="slide-second-1-1" 
          src="../../assets/images/home/slide-second-1.png" 
          alt=""
          data-aos="fade-right"  
          :data-aos-duration="500" 
          :data-aos-delay="300"
          v-if="activeSlide === 1"
        >
        <img 
          class="slide-second-1-2" 
          src="../../assets/images/home/slide-second-2.png" 
          alt=""
          data-aos="slide-right"  
          :data-aos-duration="500" 
          :data-aos-delay="200"
          v-if="activeSlide === 1"
        >
        <img 
          class="slide-second-1-3" 
          src="../../assets/images/home/slide-second-3.png" 
          alt=""
          data-aos="fade-up"  
          :data-aos-duration="500" 
          :data-aos-delay="400"
          v-if="activeSlide === 1"
        >
        <img 
          class="slide-second-1-4" 
          src="../../assets/images/home/slide-second-4.png" 
          alt=""
          data-aos="fade-in"  
          :data-aos-duration="500" 
          :data-aos-delay="800"
          v-if="activeSlide === 1"
        >
        <img 
          class="slide-second-1-5" 
          src="../../assets/images/home/slide-secod-arrow.svg" 
          alt=""
          data-aos="fade-in"  
          :data-aos-duration="500" 
          :data-aos-delay="1200"
          v-if="activeSlide === 1"
        >
        <div class="slide-second-list">
            <div 
              v-for="(item, index) in slideSecondList" 
              :key="item.text" 
              class="slide-second-list-item"
              data-aos="fade-in"  
              :data-aos-duration="200" 
              :data-aos-delay="1200 + 200 * index"
            >
              <component :is="item.icon" />
              <span>{{ item.text }}</span>
            </div>
        </div>
        <div 
          class="slide-second-benefit"
          v-if="activeSlide === 1"
          data-aos="fade-left"  
          :data-aos-duration="200" 
          :data-aos-delay="1800"
        >
          <IcClock />
          <div>
            <div class="slide-second-benefit-title">15 000 счетчиков</div>
            <div class="slide-second-benefit-text">суточная производительность завода</div>
          </div>
        </div>
      </div>
      <div class="slide-third" v-if="activeSlide === 2">
        <div 
          class="slide-third-title"
          data-aos="fade-in"  
          :data-aos-duration="200" 
          v-if="activeSlide === 2"
        >
          Компания является первопроходцем в сегменте электронных приборов учета электроэнергии в России, и на сегодняшний день занимает одно из лидирующих позиций в отрасли. 
        </div>
        <div 
          class="slide-third-text-1"
          data-aos="fade-left"  
          :data-aos-duration="200" 
          :data-aos-delay="800"
          v-if="activeSlide === 2"
        >
          За 29 лет выпущено свыше 50 млн счетчиков. Создано 7 поколений приборов учета, каждое из которых становилось прорывом в отрасли. Реализованы крупнейшие в России и СНГ проекты по внедрению АСКУЭ, а общее количество точек учета на базе продукции «Энергомера» в системах учета страны превышает 5,5 млн. Продукция компании входит в сотню лучших товаров России.
        </div>
        <div 
          class="slide-third-text-2"
          data-aos="fade-left"  
          :data-aos-duration="200" 
          :data-aos-delay="1000"
          v-if="activeSlide === 2"
        >
          Специалистами предприятия ведутся научно-технические работы и внедряются инновационные решения, соответствующие тенденциям цифровой трансформации отрасли и актуальным требованиям рынка. Продукция АО «Энергомера» имеет десятки патентов и сотни сертификатов в России и за рубежом.
        </div>
        <img 
          class="slide-third-img-1" 
          src="../../assets/images/home/slide-third-1-1.png"
          alt=""
          data-aos="fade-right"  
          :data-aos-duration="200" 
          :data-aos-delay="100"
          v-if="activeSlide === 2"
        >
        <img 
          class="slide-third-img-2" 
          src="../../assets/images/home/slide-third-1-2.png" 
          alt=""
          data-aos="fade-right"  
          :data-aos-duration="200" 
          :data-aos-delay="200"
          v-if="activeSlide === 2"
        >
        <img 
          class="slide-third-img-3" 
          src="../../assets/images/home/slide-third-1-3.png" 
          alt=""
          data-aos="fade-right"  
          :data-aos-duration="200" 
          :data-aos-delay="400"
          v-if="activeSlide === 2"
        >
        <img 
          class="slide-third-img-4" 
          src="../../assets/images/home/slide-third-1-4.png" 
          alt=""
          data-aos="fade-right"  
          :data-aos-duration="200" 
          :data-aos-delay="600"
          v-if="activeSlide === 2"
        >
        <img 
          class="slide-third-img-5" 
          src="../../assets/images/home/slide-third-1-5.png" 
          alt=""
          data-aos="fade-left"  
          :data-aos-duration="200" 
          :data-aos-delay="1200"
          v-if="activeSlide === 2"
        >
        <img 
          class="slide-third-img-6" 
          src="../../assets/images/home/slide-third-1-6.png" 
          alt=""
          data-aos="fade-left"  
          :data-aos-duration="200" 
          :data-aos-delay="1200"
          v-if="activeSlide === 2"
        >
        <div 
          class="slide-third-panel"
          data-aos="fade-right"  
          :data-aos-duration="200" 
          :data-aos-delay="1400"
          v-if="activeSlide === 2"
        >
          <div 
            v-for="item in slideThirdList" 
            :key="item.text" 
            class="slide-third-panel-item"
          >
            <div class="slide-third-panel-title">{{ item.title }}</div>
            <div class="slide-third-panel-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-dots">
      <div 
        v-for="item in Array.from({length: 3}, (_,index) => index)" 
        :key="item" 
        :class="['slide-dot', {'slide-dot-active': item === activeSlide}]"
        @click.stop="activeSlide = item"
      >
      </div>
    </div>
    <button class="slider-button slider-button-prev" type="button" @click.stop="activeSlide <= 0 ? activeSlide = 2 : activeSlide--">
      <IcArrow />
    </button>
    <button class="slider-button slider-button-next" type="button" @click.stop="activeSlide >= 2 ? activeSlide = 0 : activeSlide++">
      <IcArrow />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin-left: 75px;
}
.title-wrapper {  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.title {
  @include title-h1;
  margin-top: 65px;
}

.subtitle {
  @include subtitle;
  color: $color-dark-grey;
  max-width: 725px;
  text-align: right;

  span {
    display: block;
  }
}

.slides-container {
  border-top: 1px solid #CFCCCA;
  margin-top: 40px;
  padding-top: 40px;
}

.slide-first {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 15px;

  &-info {
    width: 543px;
  }

  &-title {
    @include title-h3;
    margin-bottom: 29px;
  }

  &-item {
    border-top: 1px solid  #CFCCCA;
    padding: 15px 0;
  }

  &-panel {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.7) 57.29%, rgba(235, 250, 255, 0.7) 81.92%, rgba(255, 255, 255, 0.7) 100%);
    border: 1px solid;
    border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
    box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, 16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 15px -15px #0052A01A;
    padding: 20px 20px 20px 30px;
    width: 823px;
    border-radius: 20px;
    position: relative;
    left: -40px;
    top: 42px;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;

    img {
      object-fit: contain;
    }
  }

  &-right {
    position: relative;

    &-1-1 {
      position: absolute;
      left: 200px;
    }

    &-1-2 {
      position: absolute;
      left: -55px;
      top: -55px;
    }

    &-1-3 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  &-dots {
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: absolute;
    left: 460px;
    top: 0;
  }

  &-dot {
    width: 6px;
    height: 6px;
    background: #D9D9D9;
    border-radius: 50%;
  }
}

.slide-second {
  position: relative;
  &-title {
    max-width: 543px;
    @include title-h3;
  }

  &-text {
    margin-top: 56px;
    max-width: 543px;
  }

  &-1-1 {
    margin-left: 40px;
    margin-top: 56px;
  }

  &-1-2 {
    position: absolute;
    left: 300px;
    top: 350px;
  }

  &-1-3 {
    position: absolute;
    left: 745px;
    top: 250px;
  }

  &-1-4 {
    position: absolute;
    top: 0;
    right: 100px;
  }

  &-1-5 {
    position: absolute;
    top: -15px;
    left: 495px;
  }

  &-list {
    width: fit-content;
    position: absolute;
    top: 60px;
    left: 600px;
    z-index: 20;
  }

  &-list-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.7) 57.29%, rgba(235, 250, 255, 0.7) 81.92%, rgba(255, 255, 255, 0.7) 100%);
    border: 1px solid;
    border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
    box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, box-shadow, 16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 15px -15px #0052A01A;
    width: 473px;
    border-radius: 20px;
    margin-top: 4px;
  }

  &-benefit {
    display: flex;
    gap: 10px;
    padding: 16px 20px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.7) 57.29%, rgba(235, 250, 255, 0.7) 81.92%, rgba(255, 255, 255, 0.7) 100%);
    border: 1px solid;
    border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
    box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, box-shadow, 16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 15px -15px #0052A01A;
    border-radius: 20px;
    width: 365px;
    position: absolute;
    right: 225px;
    bottom: 50px;
  }
}

.slide-third {
  position: relative;

  &-title {
    @include title-h3;
    max-width: 654px;
  }

  &-text-1 {
    position: absolute;
    width: 487px;
    right: 180px;
    top: 50px;
  }

  &-text-2 {
    position: absolute;
    width: 340px;
    right: 40px;
    top: 200px;
  }

  &-img-1 {
    position: absolute;
    top: 260px;
    left: 40px;
  }

  &-img-2 {
    position: absolute;
    top: 300px;
    left: 250px;
  }

  &-img-3 {
    position: absolute;
    top: 100px;
    left: 350px;
    z-index: -1;
  }

  &-img-4 {
    position: absolute;
    top: 260px;
    left: 850px;
  }

  &-img-5 {
    position: absolute;
    right: 50px;
    top: 420px;
  }

  &-img-6 {
    position: absolute;
    right: 0;
    top: 370px;
  }

  &-panel {
    position: absolute;
    top: 465px;
    display: flex;
    justify-content: space-between;
    width: 1160px;
    padding: 25px 30px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.7) 57.29%, rgba(235, 250, 255, 0.7) 81.92%, rgba(255, 255, 255, 0.7) 100%);
    border: 1px solid;
    border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
    box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, box-shadow, 16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 15px -15px #0052A01A;
    border-radius: 20px;
  }

  &-panel-item {
    width: 260px;
  }

  &-panel-title {
    color: $color-blue;
    @include title-h3;
  }

  &-panel-text {
    color: $color-dark-grey;
  }
}

.slider-button {
  padding: 28px 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%),
    linear-gradient(180deg, #FFFFFF 57.29%, #EBFAFF 81.92%, #FFFFFF 100%);
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, 16px 24px 16px -16px #FFFFFF1A inset,  0px 10px 25px -15px #0052A04D;
  border-radius: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &-next {
    right: 30px;
    svg {
      transform: rotate(180deg);
    }
  }

  &-prev {
    left: 30px;
  }
}

.slide-dots {
  display: flex;
  gap: 20px;
  position: absolute;
  top: 1000px;
  left: 50%;
}

.slide-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #D9D9D9;

  &-active {
    background-color: $color-blue;
  }
}
</style>