<script setup lang="ts">
import type {PropType} from 'vue';
import {computed, useAttrs} from 'vue';
import {AvatarRoot} from 'reka-ui';
import {cn} from '../utils';

defineOptions({inheritAttrs: false});

const props = defineProps({
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
    validator: function (value: string) {
      return ['sm', 'md', 'lg'].includes(value);
    }
  },
});

const sizeClass = {sm: 'size-8', md: 'size-10', lg: 'size-12'};

const resolvedSize = computed(function () {
  return sizeClass[props.size] ?? sizeClass.md;
});

const attrs = useAttrs();
const forwardedAttrs = computed(function () {
  const attributes = {...attrs};
  delete attributes.class;
  return attributes;
});
</script>

<template>
  <AvatarRoot
      v-bind="forwardedAttrs"
      :class="cn('relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface border border-border align-middle select-none', resolvedSize, $attrs.class)"
  >
    <slot/>
  </AvatarRoot>
</template>
