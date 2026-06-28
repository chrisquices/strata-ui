<script setup lang="ts">
import {cn} from '../utils';
</script>

<!-- @container/card: named container so consumers can use @card container queries inside. -->
<template>
  <div :class="cn('@container/card rounded-large border border-border bg-surface text-foreground shadow-raised', $attrs.class)">
    <slot/>
  </div>
</template>
