import Vue from 'vue';

export default async () => {
  await fetch('/cms')
    .then(res => res.json())
    .then((components) => {
      components.map(component => {
        Vue.component(component.replace('.vue', ''), async () => await import(`~/cms/${component}`));
      });
    });
}
