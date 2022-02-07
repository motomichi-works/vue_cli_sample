<template>
  <div class="Hoge">
    <div>computedCount: {{ computedCount }}</div>
    <div>count: {{ count }}</div>
    <button @click="handleClick">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
    setCount: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const computedCount = computed(() => props.count);

    const handleClick = () => {
      props.setCount();
    };

    return {
      computedCount,
      handleClick,
    };
  },
});
</script>

<style scoped lang="scss">
.Hoge {
  display: block;
}
</style>
