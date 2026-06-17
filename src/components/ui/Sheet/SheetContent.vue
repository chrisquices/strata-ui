<script setup lang="ts">
import type { PropType } from 'vue';
import { DialogPortal, DialogOverlay, DialogContent } from 'reka-ui';

defineOptions({ inheritAttrs: false });
const props = defineProps({
  side: {
    type: String as PropType<'right' | 'left' | 'bottom' | 'top'>,
    default: 'right',
    validator: (value: string) => ['right', 'left', 'bottom', 'top'].includes(value),
  },
});

// strata-ui-sheet-{side} matches the slide-in/out keyframes in the <style> block below; keep the names in sync.
const positionClass = {
  right: 'inset-y-0 right-0 h-full w-80 max-w-full border-l',
  left: 'inset-y-0 left-0 h-full w-80 max-w-full border-r',
  bottom: 'inset-x-0 bottom-0 w-full rounded-t-large border-t',
  top: 'inset-x-0 top-0 w-full rounded-b-large border-b',
};
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="strata-ui-overlay-fade fixed inset-0 z-modal bg-overlay/60" />
    <DialogContent
      v-bind="$attrs"
      :class="[
        'fixed z-modal overflow-y-auto bg-surface border-border focus-visible:outline-none',
        `strata-ui-sheet-${side in positionClass ? side : 'right'}`,
        positionClass[side] ?? positionClass.right,
      ]"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

<style>
/* Edge slides, keyed off data-state per side (strata-ui-sheet-{side}). Co-located here — only this
   component uses these. Non-scoped: the class sits on reka's DialogContent root, which a scope
   hash wouldn't tag. (The backdrop's strata-ui-overlay-fade is shared, so it stays in app.css.) */
@keyframes strata-ui-sheet-in-right { from { translate: 100% 0; } }
@keyframes strata-ui-sheet-out-right { to { translate: 100% 0; } }
@keyframes strata-ui-sheet-in-left { from { translate: -100% 0; } }
@keyframes strata-ui-sheet-out-left { to { translate: -100% 0; } }
@keyframes strata-ui-sheet-in-bottom { from { translate: 0 100%; } }
@keyframes strata-ui-sheet-out-bottom { to { translate: 0 100%; } }
@keyframes strata-ui-sheet-in-top { from { translate: 0 -100%; } }
@keyframes strata-ui-sheet-out-top { to { translate: 0 -100%; } }
.strata-ui-sheet-right[data-state='open'] { animation: strata-ui-sheet-in-right var(--duration-slow) ease-out; }
.strata-ui-sheet-right[data-state='closed'] { animation: strata-ui-sheet-out-right var(--duration-slow) ease-in forwards; }
.strata-ui-sheet-left[data-state='open'] { animation: strata-ui-sheet-in-left var(--duration-slow) ease-out; }
.strata-ui-sheet-left[data-state='closed'] { animation: strata-ui-sheet-out-left var(--duration-slow) ease-in forwards; }
.strata-ui-sheet-bottom[data-state='open'] { animation: strata-ui-sheet-in-bottom var(--duration-slow) ease-out; }
.strata-ui-sheet-bottom[data-state='closed'] { animation: strata-ui-sheet-out-bottom var(--duration-slow) ease-in forwards; }
.strata-ui-sheet-top[data-state='open'] { animation: strata-ui-sheet-in-top var(--duration-slow) ease-out; }
.strata-ui-sheet-top[data-state='closed'] { animation: strata-ui-sheet-out-top var(--duration-slow) ease-in forwards; }
@media (prefers-reduced-motion: reduce) {
  [class*='strata-ui-sheet-'][data-state='open'],
  [class*='strata-ui-sheet-'][data-state='closed'] {
    animation: none;
  }
}
</style>
