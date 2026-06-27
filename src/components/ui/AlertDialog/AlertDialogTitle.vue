<script setup lang="ts">
import {AlertDialogTitle} from 'reka-ui';

defineProps({as: {default: 'h2'}});
</script>

<template>
  <AlertDialogTitle :as="as" class="text-base tracking-wide text-foreground">
    <slot/>
  </AlertDialogTitle>
</template>
