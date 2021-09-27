<script lang="ts">
import ListComponent from './components/ListComponent.vue';

export default {
  components: {
      ListComponent
  }
};
</script>

<template>
  <list-component></list-component>
</template>

<style lang="scss">
#app {
    display: flex;
    justify-content: center;
}
</style>