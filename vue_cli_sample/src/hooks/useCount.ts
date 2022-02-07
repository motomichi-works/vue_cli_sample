import { ref, Ref } from "vue";

type UseCount = () => (Ref<number> | (() => void))[];

const useCount: UseCount = () => {
  const count = ref(0);
  const setCount = () => {
    count.value = count.value + 1;
  };

  return [count, setCount];
};

export default useCount;
