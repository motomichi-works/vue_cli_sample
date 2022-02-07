<template>
  <Hoge :count="count" :setCount="setCount" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Hoge from "../../../components/counter-sample/organisms/Hoge.vue";

export default defineComponent({
  components: {
    Hoge,
  },
  setup() {
    const count = ref(0);
    const setCount = () => {
      count.value = count.value + 1;
    };

    return {
      count,
      setCount,
    };
  },
});
</script>
