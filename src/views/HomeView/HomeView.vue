<script setup lang="ts">
import { useRouter } from 'vue-router';

import  { IcLogoWhite } from '@/components/UI/Icons';
import { appRoutes } from '@/router/appRoutes';

const router = useRouter();

</script>

<template>
  <div class="main-view">
    <IcLogoWhite />
    <img class="main-view-gif" src="./giphy_coub.gif" alt="">
    <button class="main-button" type="button" @click.stop="router.push(appRoutes.menu())">
      Начать просмотр
    </button> 
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  position: absolute;
  z-index: 110;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: #0D1322;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &-gif {
    width: 655px;
    height: 655px;
    object-fit: cover;
  }
}

.main-button {
  width: 304px;
  height: 100px;
  padding: 38px 40px 38px 40px;
  border-radius: 60px;
  border: 1px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9) 57.29%, rgba(235, 250, 255, 0.9) 81.92%, rgba(255, 255, 255, 0.9) 100%);
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0) 82.96%, rgba(255, 255, 255, 0.2) 100%);
  box-shadow: 0px 4px 24px 8px #FFFFFF1A inset, 16px 24px 16px -16px #FFFFFF1A inset, 0px 10px 25px -15px #0052A04D;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #007DB5;
}
</style>