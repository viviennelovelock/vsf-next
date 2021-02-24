<template>
  <div v-if="content">
    <render-content :content="content.content.body" />
    
  </div>
</template>

<script>
import Vue from 'vue';
import { useContent } from '@vue-storefront/storyblok';
import { onSSR } from '@vue-storefront/core';
import RenderContent from '~/cms/RenderContent.vue';

/*
* This page is prepared for CMS dynamic content rendering.
*/
export default Vue.extend({
  name: 'CMSDynamicPage',
  components: {
    RenderContent
  },
  setup (props, { root }) {
    const { $route } = root;
    const { id } = $route.params;
    const { search, content } = useContent(id);
    onSSR(async () => {
      await search({
        'slug': id,
        ...JSON.parse('{}')
      });
    });
    return {
      content
    }
  }
});
</script>

<style lang="scss">
.content-block {
  width: 100%;
  margin: 0 auto;
  margin-bottom: var(--spacer-xl);
}
</style>
