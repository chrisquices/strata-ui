<script setup lang="ts">
import {Plus, Filter} from '@lucide/vue';
import Button from '../Button/Button.vue';
import SidebarHeader from './SidebarHeader.vue';
</script>

<template>
  <SidebarHeader>
    <slot>
      <div class="flex items-center gap-cluster-small min-w-0">
        <Button variant="secondary" icon aria-label="New">
          <Plus class="size-icon"/>
        </Button>
        <Button variant="ghost" icon aria-label="Filter" class="group-data-[collapsed]/sidebar:hidden">
          <Filter class="size-icon"/>
        </Button>
      </div>
    </slot>
  </SidebarHeader>
</template>
