<script setup lang="ts">
defineProps({
  label: {default: undefined},
});
</script>

<template>
  <div class="flex flex-col pt-2">
    <slot/>
  </div>
</template>
