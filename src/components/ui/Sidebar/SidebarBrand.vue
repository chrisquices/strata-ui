<script setup lang="ts">
import {Layers, X} from '@lucide/vue';
import Button from '../Button/Button.vue';
import Caption from '../Caption/Caption.vue';
import SidebarHeader from './SidebarHeader.vue';

defineProps({
  onclose: {type: Function, default: undefined},
});
</script>

<template>
  <SidebarHeader>
    <div class="flex items-center gap-cluster min-w-0">
      <span
          class="inline-grid size-control-small shrink-0 place-items-center rounded-medium border border-border bg-surface text-foreground"
          aria-label="Strata" role="img">
        <Layers class="size-icon" aria-hidden="true"/>
      </span>
      <Caption tone="foreground" class="group-data-[collapsed]/sidebar:hidden">Strata</Caption>
    </div>
    <Button icon variant="ghost" size="sm" aria-label="Close navigation"
            class="xl:hidden group-data-[collapsed]/sidebar:hidden" @click="onclose && onclose()">
      <X class="size-icon"/>
    </Button>
  </SidebarHeader>
</template>
