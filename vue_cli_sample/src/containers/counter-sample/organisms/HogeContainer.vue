<template>
  <Hoge />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hoge from "../../../components/counter-sample/organisms/Hoge.vue";

export default defineComponent({
  components: {
    Hoge,
  },
  setup() {
    console.log("hoge");
  },
});
</script>
