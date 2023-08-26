<script setup lang="ts">
import type { UIToggleProps } from './UIToggle.types';

defineProps<UIToggleProps>()
</script>

<template>
  <label class="ui-toggle">
    <input class="checkbox" type="checkbox" v-bind="$attrs" />
    <div class="toggle-inner">
      <div class="toggle-line" />
      <span class="label">{{ label }}</span>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.toggle-inner {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 30px 20px 20px;
  border-radius: 20px;
  border: 1px solid $color-grey;
  transition: 0.3s all;
}

.checkbox {
  appearance: none;

  &:checked + .toggle-inner {
    border: 1px solid $color-blue;

    & .toggle-line {
      background: $color-blue;
    }

    & .label {
      color: $color-blue;

      &::before {
        left: -45px;
      }

      &::after {
        left: -35px;
        background: $color-blue;
      }
    }
  }
}

.toggle-line {
  width: 60px;
  height: 20px;
  background: #D9D9D9;
  border-radius: 20px;
  transition: 0.3s all;
}
.label {
  @include title-h3;

  position: relative;
  color: $color-dark-grey;
  transition: 0.3s all;

  &::before {
    content: '';
    position: absolute;
    left: -75px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(180deg, #FFFFFF 40.04%, #EBFAFF 100%);
    box-shadow: 0px 2px 4px 0px #0000004D;
    transition: 0.3s all;
  }

  &::after {
    content: '';
    position: absolute;
    left: -65px;
    top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #D9D9D9;
    transition: 0.3s all;
  }
}
</style>