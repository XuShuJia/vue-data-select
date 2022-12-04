// useOptionsListConfig
import { ref } from "vue";
import type { IOptionsListConfig } from "../types";

export default (): IOptionsListConfig => {
  const optionItemHeight = ref(30);
  const optionItemLength = ref(10);
  const optionsListPaddingTop = ref(8);
  const optionsListPaddingBottom = ref(8);
  const optionsListPrerenderTopLength = ref(3);
  const optionsListPrerenderBottomLength = ref(3);

  return {
    optionItemHeight,
    optionItemLength,
    optionsListPaddingTop,
    optionsListPaddingBottom,
    optionsListPrerenderTopLength,
    optionsListPrerenderBottomLength,
  };
};
