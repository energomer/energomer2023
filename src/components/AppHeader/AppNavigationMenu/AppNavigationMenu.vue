<script setup lang="ts">
import { computed } from 'vue';

import { IcArrowNext } from '@/components/UI/Icons';
import { appNavigation } from '@/constants/app-navigation';

defineEmits(['onLinkClick'])

const items = computed(() => {
  const navItem: { text: string, link: string, isParent: boolean }[][] = []

  appNavigation.forEach(() => navItem.push([]))

  appNavigation.forEach((item, index) => {
    if (item.text && item.link) {
      navItem[index].push({ text: item.text, link: item.children[0].link, isParent: true })
    } 

    item.children.forEach((subItem) => {
      if (subItem.text && subItem.link) {
        if (subItem?.children) {
          navItem[index].push({ text: subItem.text, link: subItem.children?.[0].link, isParent: false })
        } else {
          navItem[index].push({ text: subItem.text, link: subItem.link, isParent: false })
        }
      }
    })
  })

  return navItem;
})
</script>

<template>
  <div class="navigation-menu">
    <div class="navigation-blocks">
      <ul v-for="(blocks, index) in items" :key="index" class="list">
        <li v-for="item in blocks" :key="item.link" class="list-item" @click.stop="$emit('onLinkClick')">
          <RouterLink 
            :class="item.isParent ? 'parent-link' : 'children-link'" 
            :to="item.link"
          >
            <span>{{ item.text }}</span>
            <IcArrowNext v-if="!item.isParent"/>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="background-image">
      <img src="../../../assets/images/menu-background.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .navigation-menu {
    @include container;
    padding: 53px 20px 20px 20px;
    background: $color-white;
    border-radius: 40px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      right: 80px;
      background: $color-white;
      width: 27px;
      height: 27px;
      border-radius: 6px;
      transform: rotate(45deg);
    }
  }

  .background-image {
    margin-top: 150px;
  }

  .navigation-blocks {
    padding: 0 20px;
    display: flex;
    gap: 70px;
  }

  .list {
    list-style: none;
    display: grid;
    height: fit-content;
  }

  .list-item {
    height: fit-content;
  }

  .parent-link {
    display: block;
    left: 40px;
    width: 360px;
    padding: 12px 15px 12px 15px;
    border-radius: 20px;
    color: $color-blue;
    background: $color-grey;
    text-decoration: none;

    @include body-text-grow;
  }

  .children-link {
    @include body-text;

    width: 360px;
    padding: 20px 0px 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #CFCCCA;
    text-decoration: none;
    font-size: 15px;
    color: $color-black;
  }
</style>