<script setup lang="ts">
import { inject, computed } from 'vue';

const progress = inject('progress', {});
const percentage = computed(() => progress.percentage);
</script>

<template>
  <div
    v-if="percentage !== undefined"
    class="progress-indicator h-full rounded-full bg-foreground transition-all duration-slow"
    :style="{ '--progress-width': percentage + '%' }"
  ></div>
  <div v-else class="strata-ui-progress-indeterminate h-full w-1/3 rounded-full bg-foreground opacity-60"></div>
</template>

<style scoped>
.progress-indicator {
  width: var(--progress-width, 0%);
}

/* Indeterminate sweep. Co-located here — only this component uses it. Deliberately NOT in a
   reduced-motion block: like the spinner, it is essential loading feedback. */
@keyframes strata-ui-progress-indeterminate {
  from {
    translate: -110% 0;
  }
  to {
    translate: 320% 0;
  }
}
.strata-ui-progress-indeterminate {
  animation: strata-ui-progress-indeterminate 1.4s ease-in-out infinite;
}
</style>
