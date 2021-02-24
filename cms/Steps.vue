<template>
  <SfSteps :steps="items" :can-go-back="true">
    <SfStep v-for="(step, i) in items" :key="i" :name="step.step">
      <div>
        {{ step }}
      </div>
    </SfStep>
  </SfSteps>
</template>

<script lang="ts">
import Vue from 'vue'
import { SfSteps } from '@storefront-ui/vue'

export default Vue.extend({
  name: 'Steps',
  components: {
    SfSteps,
  },
  props: {
    items: {},
  },
})
</script>
