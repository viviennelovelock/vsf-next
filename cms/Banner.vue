<template>
  <SfBanner
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="button_text"
    :link="button_link"
    :image="image"
    :background="background"
  >
    <template v-slot:call-to-action>
      <SfButton class="desktop-only">
        <nuxt-link :to="{ path: button_link }" class="text-light">
          {{ button_text }}
        </nuxt-link>
      </SfButton>
    </template>
  </SfBanner>
</template>

<script lang="ts">
import Vue from 'vue'
import { SfBanner, SfButton } from '@storefront-ui/vue'

export default Vue.extend({
  name: 'Banner',
  components: {
    SfBanner,
    SfButton,
  },
  props: {
    title: {},
    subtitle: {},
    description: {},
    button_text: {},
    button_link: {},
    image: {},
    background: {},
  },
})
</script>
