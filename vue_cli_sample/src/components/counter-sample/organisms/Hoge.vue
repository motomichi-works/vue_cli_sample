<template>
  <div class="Hoge">
    <div>count: 0000</div>
    <button>+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    console.log("hoge");
  },
});
</script>

<style scoped lang="scss">
.Hoge {
  display: block;
}
</style>
