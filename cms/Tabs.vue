<template>
  <SfTabs>
    <SfTab v-for="(item, i) in items" :key="i" :title="item.title">
      {{ item.content }}
    </SfTab>
  </SfTabs>
</template>

<script lang="ts">
import Vue from 'vue'
import { SfTabs } from '@storefront-ui/vue'

export default Vue.extend({
  name: 'Tabs',
  components: {
    SfTabs,
  },
  props: {
    items: {},
  },
})
</script>
