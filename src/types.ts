import type { ExtractPropTypes, PropType } from "vue";

export const VueDataSelectProps = {
  size: {
    type: String as PropType<"small" | "default" | "large">,
    default: "default",
    required: false,
  },
  block: {
    type: Boolean,
    default: false,
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  onGetOptions: {
    type: Function as PropType<(searchText: string) => Promise<TOptions>>,
    default: undefined,
    required: false,
  },
};

export type IVueDataSelectProps = Readonly<ExtractPropTypes<typeof VueDataSelectProps>>;

export interface IOptionItem {
  title: string;
  value: string | number;
}
export type TOptions = IOptionItem[];

export interface IVueDataSelectState {
  focused: boolean;
  searchText: string;
  openOptionsList: boolean;
}
