<script setup lang="ts">
import {RouterView} from 'vue-router';
import Navigation from './Navigation.vue';
import Card from '@ui/Card/Card.vue';

</script>

<template>
  <div class="strata-shell flex h-screen flex-col overflow-hidden text-foreground bg-background">

<!--    <div class="flex h-chrome-bar shrink-0 items-center justify-center bg-background">-->
<!--      <p class="leading-snug text-foreground">-->
<!--        Strata Elements-->
<!--      </p>-->
<!--    </div>-->

    <div class="flex min-h-0 flex-1 justify-center p-4">
      <div class="flex min-h-0 w-fit max-w-full">
        <Navigation/>

        <Card class="flex min-h-0 w-[48rem] max-w-full shrink border-y-0 border-r-0 bg-transparent">
          <div class="flex min-h-0 flex-1 overflow-hidden">
            <div class="relative flex min-w-0 flex-1 flex-col overflow-hidden">
              <div class="min-w-0 flex-1 overflow-y-auto">
                <RouterView/>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>

  </div>
</template>
