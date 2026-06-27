<!-- Gains a second column only when a CardAction is present (the has-[] hook). -->
<template>
  <div
      class="grid auto-rows-min grid-rows-[auto_auto] items-start gap-stack-small p-container has-[[data-card-action]]:grid-cols-[1fr_auto]">
    <slot/>
  </div>
</template>
