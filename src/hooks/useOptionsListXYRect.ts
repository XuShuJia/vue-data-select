// useOptionsListXYRect
import { onMounted, ref, type Ref, type UnwrapRef } from "vue";
import type { ISearchInputExposed } from "@/components/search-input/types";

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
