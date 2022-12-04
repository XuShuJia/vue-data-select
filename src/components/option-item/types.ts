import type { ExtractPropTypes, PropType } from "vue";

export const OptionItemProps = {
  title: {
    type: String,
    default: "",
    required: true,
  },
  value: {
    type: String as PropType<string | number>,
    default: "",
    required: true,
  },
  height: {
    type: Number,
    default: 0,
    required: true,
  },
};

export type IOptionItemProps = Readonly<ExtractPropTypes<typeof OptionItemProps>>;
