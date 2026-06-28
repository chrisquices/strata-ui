<script setup lang="ts">
import {AlertDialogTitle} from 'reka-ui';

const props = defineProps({as: {default: 'h2'}});
</script>

<template>
  <AlertDialogTitle :as="props.as" class="text-base text-foreground">
    <slot/>
  </AlertDialogTitle>
</template>
