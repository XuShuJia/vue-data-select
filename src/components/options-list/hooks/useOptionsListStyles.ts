// useXYRectStyles
import { type CSSProperties, type Ref, computed } from "vue";
import type { IOptionListProps, IOptionsListConfig } from "../types";

export default (props: IOptionListProps, config: IOptionsListConfig, scrollRef: Ref<HTMLDivElement | null>) => {
  const optionsListStyles = computed(() => {
    const styles: CSSProperties = {
      top: `${props.top}px`,
      left: `${props.left - 2}px`,
      minWidth: `${props.minWidth + 2}px`,
      minHeight: `${
        config.optionItemHeight.value + config.optionsListPaddingTop.value + config.optionsListPaddingBottom.value
      }px`,
      maxHeight: `${
        config.optionItemHeight.value * config.optionItemLength.value +
        config.optionsListPaddingTop.value +
        config.optionsListPaddingBottom.value
      }px`,
      paddingTop: `${config.optionsListPaddingTop.value}px`,
      paddingBottom: `${config.optionsListPaddingBottom.value}px`,
    };
    return styles;
  });
  const optionsListScrollStyles = computed(() => {
    const marginRight = 4;
    const styles: CSSProperties = {
      minWidth: `${props.minWidth - marginRight}px`,
      maxHeight: `${
        config.optionItemHeight.value * config.optionItemLength.value -
        config.optionsListPaddingTop.value -
        config.optionsListPaddingBottom.value
      }px`,
      marginRight: `${marginRight}px`,
    };
    return styles;
  });
  const optionsListRealHeightStyles = computed(() => {
    const styles: CSSProperties = {
      height: `${props.options.length * config.optionItemHeight.value}px`,
    };
    return styles;
  });

  return {
    optionsListStyles,
    optionsListScrollStyles,
    optionsListRealHeightStyles,
  };
};
