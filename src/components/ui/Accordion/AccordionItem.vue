<script setup lang="ts">
import {AccordionItem} from 'reka-ui';

const props = defineProps({
  value: {type: String, required: true},
  disabled: {type: Boolean, default: false},
  unmountOnHide: {type: Boolean, default: undefined},
});
</script>

<template>
  <AccordionItem
      v-slot="{ open }"
      :value="props.value"
      :disabled="props.disabled"
      :unmount-on-hide="props.unmountOnHide"
      class="border-b border-border"
  >
    <slot :open="open"/>
  </AccordionItem>
</template>
