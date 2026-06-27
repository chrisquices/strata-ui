<script setup lang="ts">
import {AccordionContent} from 'reka-ui';
</script>

<template>
  <AccordionContent class="strata-accordion-content">

    <!-- Keep padding inside the animated height wrapper so closed panels collapse to 0. -->
    <div class="pb-stack text-sm text-muted">
      <slot/>
    </div>
  </AccordionContent>
</template>

<style>

/* Non-scoped because the class sits on reka's AccordionContent root. */
@keyframes strata-accordion-down {
  from {
    height: 0;
    overflow: hidden;
  }
  to {
    height: var(--reka-accordion-content-height);
    overflow: hidden;
  }
}

@keyframes strata-accordion-up {
  from {
    height: var(--reka-accordion-content-height);
    overflow: hidden;
  }
  to {
    height: 0;
    overflow: hidden;
  }
}

.strata-accordion-content[data-state='open'] {
  animation: strata-accordion-down 100ms ease-out;
}

.strata-accordion-content[data-state='closed'] {
  animation: strata-accordion-up 100ms ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .strata-accordion-content[data-state='open'],
  .strata-accordion-content[data-state='closed'] {
    animation: none;
  }
}
</style>
