// useOptionsListXYRect
import { onMounted, ref, type Ref, type UnwrapRef } from "vue";
import type { ISearchInputExposed } from "@/components/search-input/types";

// vue3 智障设计之一，ref中的ref给你自动解包（莫名其妙，给使用者造成更大的心智负担，使用vue需要记住更多vue特有的东西，在自由度这点vue相比react就是垃圾
export default (searchInputRef: Ref<UnwrapRef<ISearchInputExposed>>) => {
  const x = ref(0);
  const y = ref(0);
  const minWidth = ref(0);
  onMounted(() => {
    if (searchInputRef.value.container) {
      const searchInputContainerRect = searchInputRef.value.container.getBoundingClientRect();
      x.value = searchInputContainerRect.x;
      y.value = searchInputContainerRect.y + searchInputContainerRect.height + 5;
      minWidth.value = searchInputContainerRect.width;
    }
  });
  return {
    optionsListTop: y,
    optionsListLeft: x,
    optionsListMinWidth: minWidth,
  };
};
