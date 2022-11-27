// useXYRectStyles
import { type CSSProperties, computed } from "vue";
import type { IOptionListProps } from "../types";
import useOptionsListConfig from "./useOptionsListConfig";

export default (props: IOptionListProps) => {
  const { optionItemHeight, optionItemLength, optionListPaddingTop, optionListPaddingBottom } = useOptionsListConfig();
  return computed(() => {
    const styles: CSSProperties = {
      top: `${props.top}px`,
      left: `${props.left}px`,
      minWidth: `${props.minWidth}px`,
      minHeight: `${optionItemHeight.value + optionListPaddingTop.value + optionListPaddingBottom.value}px`,
      maxHeight: `${
        optionItemHeight.value * optionItemLength.value + optionListPaddingTop.value + optionListPaddingBottom.value
      }px`,
      paddingTop: `${optionListPaddingTop.value}px`,
      paddingBottom: `${optionListPaddingBottom.value}px`,
    };
    return styles;
  });
};
