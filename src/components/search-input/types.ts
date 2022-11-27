import type { ExtractPropTypes, Ref } from "vue";
import { VueDataSelectProps } from "../../types";

export const SearchInputProps = {
  size: VueDataSelectProps.size,
  block: VueDataSelectProps.block,
  disabled: VueDataSelectProps.disabled,
  placeholder: VueDataSelectProps.placeholder,
  focused: {
    type: Boolean,
    default: false,
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
    required: false,
  },
};

export type ISearchInputProps = Readonly<ExtractPropTypes<typeof SearchInputProps>>;

export interface ISearchInputState {
  focused: boolean;
  searchText: string;
}

export interface ISearchInputExposed {
  container: Ref<HTMLDivElement | null>;
  input: Ref<HTMLInputElement | null>;
}
