<template>
  <v-overlay v-if="isLoading || isReady" persistent :model-value="true" class="align-center justify-center">
    <div class="d-flex flex-column align-center justify-center">
      <v-progress-circular color="primary" indeterminate size="40"></v-progress-circular>
      <span class="mt-2 text-white text-body-2">Cargando...</span>
    </div>
  </v-overlay>

</template>

<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  isReady: {
    type: Boolean,
    default: false
  }
});
</script>
