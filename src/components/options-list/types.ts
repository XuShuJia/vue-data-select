import type { ExtractPropTypes, PropType, Ref } from "vue";
import type { TOptions } from "../../types";

export const OptionsListProps = {
  open: {
    type: Boolean,
    default: false,
    required: false,
  },
  top: {
    type: Number,
    default: 0,
    required: false,
  },
  left: {
    type: Number,
    default: 0,
    required: false,
  },
  minWidth: {
    type: Number,
    default: 0,
    required: false,
  },
  options: {
    type: Array as PropType<TOptions>,
    default: [],
    required: false,
  },
};

export type IOptionListProps = Readonly<ExtractPropTypes<typeof OptionsListProps>>;

export interface IOptionsListConfig {
  optionItemHeight: Ref<number>;
  optionItemLength: Ref<number>;
  optionsListPaddingTop: Ref<number>;
  optionsListPaddingBottom: Ref<number>;
  optionsListPrerenderTopLength: Ref<number>;
  optionsListPrerenderBottomLength: Ref<number>;
}
