<template>
  <SfLink :target="target" :link="link">
    {{ caption }}
  </SfLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { SfLink } from '@storefront-ui/vue'

export default Vue.extend({
  name: 'Link',
  components: {
    SfLink,
  },
  props: {
    link: {},
    caption: {},
    target: {},
  },
})
</script>
