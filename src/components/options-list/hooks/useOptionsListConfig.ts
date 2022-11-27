// useOptionsListConfig
import { ref } from "vue";

export default () => {
  const optionItemHeight = ref(30);
  const optionItemLength = ref(8);
  const optionListPaddingTop = ref(10);
  const optionListPaddingBottom = ref(10);

  return {
    optionItemHeight,
    optionItemLength,
    optionListPaddingTop,
    optionListPaddingBottom,
  };
};
