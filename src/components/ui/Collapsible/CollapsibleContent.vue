<script setup lang="ts">
import {inject} from 'vue';
import {CollapsibleContent} from 'reka-ui';

const contentId = inject('collapsibleContentId', undefined);
</script>

<template>
  <CollapsibleContent class="strata-ui-collapsible">
    <div :id="contentId">
      <slot/>
    </div>
  </CollapsibleContent>
</template>

<style>
/* Height expand/collapse, keyed off reka's data-state. Co-located here — only this component
   uses it. Non-scoped: the class sits on reka's CollapsibleContent root, which a scope hash
   wouldn't tag. */
@keyframes strata-ui-collapsible-down {
  from {
    height: 0;
    overflow: hidden;
  }
  to {
    height: var(--reka-collapsible-content-height);
    overflow: hidden;
  }
}
@keyframes strata-ui-collapsible-up {
  from {
    height: var(--reka-collapsible-content-height);
    overflow: hidden;
  }
  to {
    height: 0;
    overflow: hidden;
  }
}
.strata-ui-collapsible[data-state='open'] {
  animation: strata-ui-collapsible-down var(--duration-fast) ease-out;
}
.strata-ui-collapsible[data-state='closed'] {
  animation: strata-ui-collapsible-up var(--duration-fast) ease-out;
}
@media (prefers-reduced-motion: reduce) {
  .strata-ui-collapsible[data-state='open'],
  .strata-ui-collapsible[data-state='closed'] {
    animation: none;
  }
}
</style>
