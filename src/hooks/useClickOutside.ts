import type { Ref } from 'vue';
import { onMounted, onUnmounted, watch, watchEffect } from 'vue';

export const useClickOutside = <T extends HTMLDivElement | null>(
  nodeRef?: Ref<T>, callback?: () => void,
) => {
  const listener = (event: MouseEvent) => {
    if (!nodeRef?.value) {
      return;
    }

    if (nodeRef?.value !== null && nodeRef.value.contains(event.target as Node)) {
      return;
    }

    callback?.();
  };

  watchEffect(() => {
    if (nodeRef?.value) {
      window.addEventListener('click', listener, true);
    } else {
      window.removeEventListener('click', listener, true);
    }
  })
};
