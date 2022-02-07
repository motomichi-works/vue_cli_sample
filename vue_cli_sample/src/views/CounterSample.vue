<template>
  <div class="CounterSample">
    <h1>This is CounterSample page</h1>
    <HogeContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HogeContainer from "../containers/counter-sample/organisms/HogeContainer.vue";

export default defineComponent({
  components: {
    HogeContainer,
  },
});
</script>
