<script setup lang="ts">
// Components landing — the /components entry point. Renders the section chrome (sidebar) and a grid
// of cards introducing the library's categories (Primitives, Composites, Blocks, Engines): each card
// stacks a centered icon, a title, and a short description.
import {Blocks, Group, Layers, Wrench} from '@lucide/vue';
import ComponentContent from '@app/component/ComponentContent.vue';
import Card from '@ui/Card/Card.vue';
import CardTitle from '@ui/Card/CardTitle.vue';
import CardDescription from '@ui/Card/CardDescription.vue';
import ComponentHeader from "@app/component/ComponentHeader.vue";
import ComponentHeaderDescription from "@app/component/ComponentHeaderDescription.vue";
import ComponentHeaderTitle from "@app/component/ComponentHeaderTitle.vue";

const categories = [
  {
    id: 'primitives',
    label: 'Primitives',
    icon: Layers,
    description: 'Foundational, single-purpose building blocks you compose everything else from.',
  },
  {
    id: 'composites',
    label: 'Composites',
    icon: Group,
    description: 'Multi-part components assembled from primitives into complete, interactive controls.',
  },
  {
    id: 'blocks',
    label: 'Blocks',
    icon: Blocks,
    description: 'Generic, reusable interface patterns built from primitives and composites into ready-made sections.',
  },
  {
    id: 'engines',
    label: 'Engines',
    icon: Wrench,
    description: 'Headless, presentation-independent APIs that drive complex behavior and specialized workflows.',
  },
];
</script>

<template>

  <!-- Header -->
  <ComponentHeader>

    <!-- Title -->
    <ComponentHeaderTitle>&nbsp;</ComponentHeaderTitle>

    <!-- Description -->
    <ComponentHeaderDescription>
      &nbsp;
    </ComponentHeaderDescription>
  </ComponentHeader>

  <ComponentContent>
    <div class="mx-auto grid grid-cols-2 gap-6">
      <Card
          v-for="category in categories"
          :key="category.id"
          class="flex flex-col items-center gap-4 p-12 text-center"
      >

        <!-- Icon -->
        <div class="flex size-16 items-center justify-center rounded-large border border-border text-foreground shadow-raised" style="background:radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0f11 0%, #1a1a1d 100%)">
          <component :is="category.icon" class="size-icon-large" aria-hidden="true"/>
        </div>

        <!-- Text -->
        <div class="flex w-full flex-col gap-1.5">
          <CardTitle class="text-lg">{{ category.label }}</CardTitle>
          <CardDescription class="leading-relaxed">{{ category.description }}</CardDescription>
        </div>
      </Card>
    </div>
  </ComponentContent>
</template>
