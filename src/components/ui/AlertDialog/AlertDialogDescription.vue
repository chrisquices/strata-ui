<script setup lang="ts">
import {AlertDialogDescription} from 'reka-ui';
</script>

<template>
  <AlertDialogDescription class="text-sm text-pretty text-muted px-overlay">
    <slot/>
  </AlertDialogDescription>
</template>
