// useClassNames
import { computed } from "vue";
import styles from "../style.module.less";
import type { ISearchInputProps } from "../types";

export default (props: ISearchInputProps) => {
  return computed(() => {
    const classNames: string[] = [styles.search_input, styles[`search_input_${props.size}`]];
    if (props.block) {
      classNames.push(styles.search_input_block);
    }
    if (props.focused) {
      classNames.push(styles.search_input_focused);
    }
    if (props.disabled) {
      classNames.push(styles.search_input_disabled);
    }
    return classNames;
  });
};
