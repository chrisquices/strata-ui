<script setup lang="ts">
// A set of related checkboxes sharing one v-model (an array of the checked items' values).
// Compose: CheckboxGroup > CheckboxGroupItem. reka manages the array + roving-focus arrow nav;
// `name` emits one hidden input per checked value for form submission.
import type {PropType} from 'vue';
import {computed} from 'vue';
import {CheckboxGroupRoot} from 'reka-ui';
import {cn} from '../utils';

const props = defineProps({
  disabled: {type: Boolean, default: false},
  name: {type: String, default: undefined},
  required: {type: Boolean, default: false},
  orientation: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'vertical',
    validator: (value: string) => ['vertical', 'horizontal'].includes(value)
  },
  // Arrow-key navigation between items with a single tab stop (reka default). Off = each item is tabbable.
  rovingFocus: {type: Boolean, default: true},
  // Wrap focus at the group boundaries when navigating with arrows.
  loop: {type: Boolean, default: false},
});
const model = defineModel<(string | number)[]>();

const layout = computed(() => (props.orientation === 'horizontal' ? 'flex flex-row flex-wrap gap-x-6 gap-y-cluster-small' : 'flex flex-col gap-cluster-large'));
</script>

<template>
  <CheckboxGroupRoot
      v-model="model"
      :disabled="disabled"
      :name="name"
      :required="required"
      :orientation="orientation"
      :roving-focus="rovingFocus"
      :loop="loop"
      :class="cn(layout, $attrs.class)"
  >
    <slot/>
  </CheckboxGroupRoot>
</template>
