<template>
  <Hoge :count="count" :setCount="setCount" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCount from "../../../hooks/useCount";
import Hoge from "../../../components/counter-sample/organisms/Hoge.vue";

export default defineComponent({
  components: {
    Hoge,
  },
  setup() {
    const [count, setCount] = useCount();

    return {
      count,
      setCount,
    };
  },
});
</script>
