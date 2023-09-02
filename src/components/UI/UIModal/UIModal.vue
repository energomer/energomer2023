<script setup lang="ts">
import type {UIModalEmits,UIModalProps} from './UIModal.types';

defineProps<UIModalProps>()
defineEmits<UIModalEmits>()
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isOpen" class="ui-modal" @click.stop="$emit('onClose')">
        <div class="ui-modal-inner">
          <slot />
        </div>
      </div>
    </Transition>
</Teleport>
</template>

<style lang="scss">
.ui-modal {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background: rgba(#252C3A, 0.7);
}
</style>