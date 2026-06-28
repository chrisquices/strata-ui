<script setup lang="ts">
import {AlertDialogCancel} from 'reka-ui';
import Button from '../Button/Button.vue';

defineOptions({inheritAttrs: false});

const props = defineProps({
  variant: {type: String, default: 'secondary'},
  outline: {type: Boolean, default: false},
  size: {type: String, default: 'md'},
});
</script>

<template>
  <AlertDialogCancel as-child>
    <Button v-bind="$attrs" :variant="props.variant" :outline="props.outline" :size="props.size" class="flex-1">
      <slot/>
    </Button>
  </AlertDialogCancel>
</template>
